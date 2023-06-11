import type { PiniaPluginContext } from "pinia";
import { toRaw } from "vue";

// 判断一个变量是否为对象
const isObject = (obj: any) => {
  return typeof obj == "object";
};

// 定义持久化存储的参数类型
interface PresistType<S, Store> {
  enable: boolean; // 是否启用持久化存储
  option: Partial<{
    key: string; // 存储的键名
    storage: "local" | "session"; // 存储的方式（localStorage 或 sessionStorage）
    include: (keyof S)[]; // 需要存储的属性名列表
    exclude: (keyof S)[]; // 不需要存储的属性名列表
  }>;
  resetToState?: ((store: Store) => void) | boolean; // 是否需要在初始化时从存储中恢复状态
}

// 扩展 Pinia 的 DefineStoreOptionsBase 接口，添加 presist 字段
declare module "pinia" {
  export interface DefineStoreOptionsBase<S, Store> {
    presist?: Partial<PresistType<S, Store>>; // 定义 presist 参数类型
  }
}

// 导出插件
export default ({ options, store }: PiniaPluginContext) => {
  const presist = options.presist; // 获取 presist 参数

  // 如果启用了持久化存储
  if (presist && isObject(presist) && presist.enable) {
    !presist.option && (presist.option = {}); // 如果没有设置 option 参数，则创建一个空对象
    const key = presist.option?.key || store.$id; // 获取存储的键名，默认为 store 的 $id 属性
    presist.option!.key = key;

    const storage = presist.option?.storage || "local"; // 获取存储的方式，默认为 localStorage
    presist.option!.storage = storage;

    // 如果需要从存储中恢复状态
    if (presist.resetToState) {
      if (typeof presist.resetToState === "boolean") {
        // 如果 resetToState 为 true，则从存储中获取数据并恢复状态
        const json = (window as any)[presist.option?.storage + "Storage"].getItem(
          presist.option?.key
        );
        if (json) {
          store.$patch(JSON.parse(json));
        }
      } else if (typeof presist.resetToState === "function") {
        // 如果 resetToState 为函数，则调用函数恢复状态
        presist.resetToState.call(presist, store);
      }
    }

    // 监听状态变化，将状态存储到本地存储中
    store.$subscribe(
      (mutation, state) => {
        const toPersistObj = JSON.parse(JSON.stringify(toRaw(state))); // 将状态转换为可持久化的对象
        if (presist.option?.include || presist.option?.exclude) {
          // 如果设置了 include 或 exclude 参数，则只存储指定的属性
          Object.keys(toPersistObj).forEach((it) => {
            if (
              (presist.option?.include &&
                !presist.option?.include?.includes(it)) ||
              (presist.option?.exclude &&
                presist.option?.exclude?.includes(it))
            ) {
              toPersistObj[it] = undefined;
            }
          });
        }
        (window as any)[storage + "Storage"].setItem(
          key,
          JSON.stringify(toPersistObj)
        ); // 存储到本地存储中
      },
      { detached: true } // 设置为 detached 模式，避免影响其他插件
    );
  }
};