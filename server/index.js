import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'

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

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)
app.use('/', express.static(resolve(__dirname, './dist')))

export default app
