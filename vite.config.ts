import { URL, fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ElementPlusResolver, HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

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
        configure: (proxy, options) => {
          options.headers = {
            referer: '',
            oringin: '',
          }

          proxy.on('proxyRes', (proxyRes, _req, _res) => {
            proxyRes.headers['set-cookie']
              = proxyRes.headers['set-cookie']
                ?.map(cookie =>
                  cookie.replace(/Domain=.*?bilibili.com;/, '')
                    .replace('HttpOnly; Secure', ''))
          })
        },
      },
      '/api': {
        target: 'https://api.bilibili.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          options.headers = {
            referer: '',
            oringin: '',
          }

          proxy.on('proxyRes', (proxyRes, _req, _res) => {
            proxyRes.headers['set-cookie']
              = proxyRes.headers['set-cookie']
                ?.map(cookie =>
                  cookie.replace(/Domain=.*?bilibili.com;/, '')
                    .replace('HttpOnly; Secure', ''))
          })
        },
      },
    },
  },
})
