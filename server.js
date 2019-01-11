// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { parse } = require('url')
const { join } = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { createServer } = require('http')

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath)
    } else if (pathname.indexOf('/robots.txt') > -1) {
      const filePath = join(__dirname, 'static', pathname)
      app.serveStatic(req, res, filePath)
    } else if (pathname.indexOf('/sitemap.xml') > -1) {
      const filePath = join(__dirname, 'static', pathname)
      app.serveStatic(req, res, filePath)
    } else if (pathname.indexOf('dashboard/articles/') > -1) {
      app.render(req, res, '/dashboard/articles/article', query)
    } else if (pathname.indexOf('articles/') > -1) {
      app.render(req, res, '/articles/article', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
