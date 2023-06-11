import type { RouteRecordRaw } from "vue-router";

export default [
  {
    path: '/index',
    name: 'Dashborad',
    meta: {
      icon: 'menu',
      title: ''
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {
          title: '首页',
        },
        component:()=>{}
      }
    ]
  }
] as RouteRecordRaw[]
