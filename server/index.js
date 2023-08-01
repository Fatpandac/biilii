import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'
import historyApiFallback from 'connect-history-api-fallback'

const app = express()

app.use(cors())

app.use(
  createProxyMiddleware(
    '/passport',
    {
      target: 'https://passport.bilibili.com',
      changeOrigin: true,
      pathRewrite: path => path.replace(/^\/passport/, ''),
      onProxyReq: (proxyReq, _req, _res) => {
        proxyReq.setHeader('referer', '')
        proxyReq.setHeader('origin', '')
        proxyReq.setHeader('Accept-Encoding', '*/*')
      },
      onProxyRes(proxyRes, req, res) {
        if (proxyRes.headers['set-cookie']) {
          proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie'].map((cookie) => {
            return cookie.replace(/Domain=.*?bilibili\.com;/, '').replace('HttpOnly; Secure', '')
          })

          res.setHeader('set-cookie', proxyRes.headers['set-cookie'])
        }
      },
    },
  ),
)
app.use(
  createProxyMiddleware(
    '/api',
    {
      target: 'https://api.bilibili.com',
      changeOrigin: true,
      pathRewrite: path => path.replace(/^\/api/, ''),
      onProxyReq: (proxyReq, _req, _res) => {
        proxyReq.setHeader('referer', '')
        proxyReq.setHeader('origin', '')
        proxyReq.setHeader('Accept-Encoding', '*/*')
      },
      onProxyRes(proxyRes, req, res) {
        if (proxyRes.headers['set-cookie']) {
          proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie'].map((cookie) => {
            return cookie.replace(/Domain=.*?bilibili\.com;/, '').replace('HttpOnly; Secure', '')
          })

          res.setHeader('set-cookie', proxyRes.headers['set-cookie'])
        }
      },
    },
  ),
)
app.use(
  createProxyMiddleware(
    '/biilii',
    {
      target: 'https://www.bilibili.com',
      changeOrigin: true,
      pathRewrite: path => path.replace(/^\/biilii/, ''),
      onProxyReq: (proxyReq, _req, _res) => {
        proxyReq.setHeader('referer', '')
        proxyReq.setHeader('origin', '')
        proxyReq.setHeader('Accept-Encoding', '*/*')
      },
      onProxyRes(proxyRes, req, res) {
        if (proxyRes.headers['set-cookie']) {
          proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie'].map((cookie) => {
            cookie = cookie.replace(/[D|d]omain=.*?bilibili.com(;)*/, '')
              .replace('HttpOnly; Secure', '')
            cookie = cookie.replace('path=/;', 'path=/api/x/web-interface/search;')

            return cookie
          })

          res.setHeader('set-cookie', proxyRes.headers['set-cookie'])
        }
      },
    },
  ),
)

app.use(
  createProxyMiddleware(
    '/bilivideo',
    {
      target: 'https://cn-sxxa-cm-01-04.bilivideo.com',
      changeOrigin: true,
      pathRewrite: path => path.replace(/^\/bilivideo\/.*?\//, ''),
      router: (req) => {
        const target = req.path.match(/\/bilivideo\/(.*?)\//)[1]
        return `https://${target}/`
      },
      headers: {
        referer: 'https://www.bilibili.com',
        origin: '',
      },
    },
  ),
)

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)
app.use(historyApiFallback())
app.use(express.static(resolve(__dirname, './dist')))

app.listen(8080)
