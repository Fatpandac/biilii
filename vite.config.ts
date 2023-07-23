import { URL, fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver, HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import type { HttpProxy, ProxyOptions } from 'vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [
        HeadlessUiResolver(),
        ElementPlusResolver(),
      ],
      dirs: [
        'src',
      ],
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
      ],
      dirs: [
        'src/composables',
        'src/stores',
        'src/utils',
      ],
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
    proxy: {
      '/passport': {
        target: 'https://passport.bilibili.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/passport/, ''),
        configure,
      },
      '/api': {
        target: 'https://api.bilibili.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        configure,
      },
      '/biilii': {
        target: 'https://www.bilibili.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/biilii/, ''),
        configure: (proxy, options) => configure(proxy, options, 'path=/api/x/web-interface/search;'),
      },
      '/bilivideo': {
        target: 'https://placehold.com', // This is placehold
        changeOrigin: true,
        rewrite: path => path.replace(/^\/bilivideo\/.*?\//, ''),
        configure,
      },
    },
  },
})

function configure(proxy: HttpProxy.Server, options: ProxyOptions, pathReplace?: string) {
  options.headers = {
    referer: 'https://www.bilibili.com',
    oringin: '',
  }
  proxy.on('proxyReq', (proxyReq) => {
    if (proxyReq.path.includes('/bilivideo')) {
      const target = proxyReq.path.match(/\/bilivideo\/(.*?)\//)![1]
      if (target)
        options.target = `https://${target}/`
    }
  })
  proxy.on('proxyRes', (proxyRes) => {
    proxyRes.headers['set-cookie']
      = proxyRes.headers['set-cookie']
        ?.map((cookie) => {
          cookie = cookie.replace(/[D|d]omain=.*?bilibili.com(;)*/, '')
            .replace('HttpOnly; Secure', '')
          if (pathReplace)
            cookie = cookie.replace('path=/;', pathReplace)

          return cookie
        })
  })
}
