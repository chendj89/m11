# m11

### 1、在ts环境中，如何给vue3 router的meta扩展接口属性

```ts
// types/router.ts
import { RouteMeta } from 'vue-router';
declare module 'vue-router' {
   interface RouteMeta {
       api?: string;
   }
}
```

### 2、在 Vue.config.globalProperties 中定义

```ts
// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$globalVar = 'I am a global variable';

app.mount('#app');
```
```ts
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    /**
     * 智能提示
     */
    $globalVar: string;
  }
}
```

### 3、ts中的 !

在 TypeScript 中，感叹号 ! 表示一个非空断言操作符（non-null assertion operator），用于告诉编译器某个值不为空，可以直接使用，从而避免编译器的空值警告。

### 4、ts中的 ？

在 TypeScript 中，问号 ? 表示可选属性（optional property）或可选参数（optional parameter），用于表示该属性或参数可以为空或未定义。使用可选属性或可选参数可以避免编译器的空值警告，同时也方便了代码的书写和使用。