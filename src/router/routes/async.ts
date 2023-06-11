import Layout from "@/layout";

export const asyncRoutes = [
  {
    path: "/index",
    component: Layout,
    name: "Dashboard",
    meta: {
      title: "控制台",
      iconPrefix: "icon",
      icon: "dashboard",
    },
    redirect: "/index/index",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/index/index.vue"),
        meta: {
          title: "首页",
          affix: true,
          cacheable: true,
          iconPrefix: "icon",
          icon: "menu",
        },
      },
    ],
  },
  {
    path: "/table",
    component: Layout,
    name: "Table",
    meta: {
      title: "表格",
      iconPrefix: "icon",
      icon: "table",
    },
    redirect: "/table/menu",
    children: [
      {
        path: "menu",
        name: "TableMenu",
        component: () => import("@/views/table/menu.vue"),
        meta: {
          title: "菜单",
          affix: true,
          cacheable: true,
          iconPrefix: "icon",
          icon: "menu",
        },
      },
    ],
  },
];
