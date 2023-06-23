const path = require('node:path')
const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use(cors())

app.use(
  createProxyMiddleware(
    '/passport',
    {
      target: 'https://passport.bilibili.com',
      changeOrigin: true,
      pathRewrite: path => path.replace(/^\/passport/, ''),
      headers: {
        referer: '',
        oringin: '',
      },
      onProxyReq: (proxyReq, _req, _res) => {
        proxyReq.setHeader('referer', '')
        proxyReq.setHeader('origin', '')
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
app.use('/', express.static(path.resolve(__dirname, './dist')))

app.listen(4000)
