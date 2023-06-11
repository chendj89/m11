import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import path from 'path'
// 图标
import Icons from 'unplugin-icons/vite'
// 自动导入组件-sfc
import ViteComponents from 'unplugin-vue-components/vite'
// naiveUi自动导入组件-sfc
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// 自动导入引用
import AutoImport from 'unplugin-auto-import/vite'
// svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV == 'development' ? '/' : '/m7/',
  plugins: [
    vue({
      script: {
        propsDestructure: true
      }
    }),
    vueSetupExtend(),
    // svg图标
    Icons({ autoInstall: true }),
    // 本地svg合成symbol
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // icons的子目录才有dir
      symbolId: 'icon-[dir]-[name]'
    }),
    ViteComponents({
      dts: true,
      resolvers: [NaiveUiResolver()]
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'vue-router',
        {
          'naive-ui': ['*']
        }
      ],
      defaultExportByFilename: true,
      dirs: ['./components/**'],
      dts: './auto-imports.d.ts',
      vueTemplate: false,
      resolvers: [],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    vueJsx()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/scss/var.module.scss" as *;
        @use "@/scss/mixin.scss" as *;
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
