import type { Ref, UnwrapRef } from 'vue'
import type { RouteRecordRaw, RouteMeta } from 'vue-router'

/**
 * 路由元信息
 */
export interface IRouteMeta {
  /**
   * 标题
   */
  title?: string
  /**
   * 隐藏
   */
  hidden?: boolean
  /**
   * 外链
   */
  outLink?: string
  /**
   * 固定
   */
  affix?: boolean
  /**
   * 是否能缓存
   */
  cacheable?: boolean
  /**
   * 是否是默认路径或首页
   */
  isRootPath?: boolean
  /**
   * 图标前缀
   */
  iconPrefix?: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 标记
   */
  badge?: string | number
  /**
   * 是否为单页面
   */
  isSingle?: boolean
}
export interface SplitTab {
  label: string
  iconPrefix?: string | unknown
  icon: string
  fullPath: string
  children?: Array<RouteRecordRaw>
  checked: Ref<UnwrapRef<boolean>>
}