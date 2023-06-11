import { RouteMeta } from 'vue-router'
import { IRouteMeta } from '@/types/route'
import { IGlobalProperties } from '@/types/global'
// 路由
declare module 'vue-router' {
  interface RouteMeta extends IRouteMeta {}
  interface RouteRecordRaw {
    /**
     * 图标
     */
    icon: string
  }
}

// 全部配置
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends IGlobalProperties {}
}

/// <reference types="vite/client" />
