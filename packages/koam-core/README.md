# Koam

Implement a simple Koa-like http server with zero dependencies from scratch.

THIS FRAMEWORK HAVE NOT BEEN STRICTLY TESTED, PLEASE DO NOT USE IT IN PRODUCTION !
许多功能未经严格测试，请勿用于生产目的！

## Advantage

- Lightweight (0 dependency)
- TypeScript friendly
- Built-in body parser middleware
- Built-in response time middleware

## Notes

1. Current only support `application/json` type request and response body
2. `ctx.assert` must explicit declare `Context` type. See [microsoft/Typescript#34523](https://github.com/microsoft/TypeScript/issues/34523)
   ```ts example.ts
   app.use(async (ctx: Context, next) => {
     //                ^^^^^^^
     const val: unknown = 1.2345
     //         ^^^^^^^
     ctx.assert(typeof val === 'number', 500)
     console.log(val.toFixed(2))
     //          ^^^ now val is number type
   })
   ```

## Roadmap

Configuration

- [x] `app.env`
- [x] `app.proxy`
- [ ] ~~`app.keys`~~ see https://github.com/mutoe/koam#3-cookie
- [x] `app.proxyIpHeader`
- [x] `app.maxIpsCount`
- [x] `app.onError(error, ctx)`

Application properties / methods

- [x] `app.use(middleware)`
- [x] `app.callback()`
- [x] `app.listen(...)`
- [x] `app.context`
- [ ] `app.keys=`
- [ ] ~~`app.on('error', error)`~~ using `app.onError` instead
- [x] `app.address`
- [x] `app.port`

Context properties

- [x] `ctx.req`
- [x] `ctx.res`
- [x] `ctx.request`
- [x] `ctx.response`
- [x] `ctx.state`
- [x] `ctx.app`
- [ ] ~~`ctx.app.emit`~~ using `ctx.throw` instead
- [ ] ~~`ctx.cookies`~~ see https://github.com/mutoe/koam#3-cookie
- [x] `ctx.throw([status], [message], [detail])` `ctx.throw(appError)`
- [x] `ctx.assert(value, [status], [message], [detail])`
- [x] `ctx.respond` <!-- TODO: support HEAD request -->

Context request

- [x] `request.headers` `ctx.headers`
  - [ ] ~~`request.header`~~ ~~`ctx.header`~~
- [ ] `request.headers=`
  - [ ] ~~`request.header=`~~
- [x] `request.get(field)` `ctx.get(field)`
- [x] `request.method` `ctx.method`
- [x] `request.method=` `ctx.method=`
- [x] `request.length`
- [x] `request.protocol` `ctx.protocol`
- [x] `request.host` `ctx.host`
- [ ] `request.hostname` `ctx.hostname`
- [x] `request.url` `ctx.url`
- [ ] ~~`request.url=`~~ ~~`ctx.url=`~~
- [x] `request.originalUrl` `ctx.originalUrl`
- [x] `request.origin` `ctx.origin`
- [ ] `request.URL`
- [ ] `request.href` `ctx.href`
- [x] `request.path` `ctx.path`
- [x] `request.path=` `ctx.path=`
- [x] `request.query` `ctx.query`
- [x] `request.query=` `ctx.query=`
- [x] `request.querystring` `ctx.querystring`
  - [x] ~~`request.search`~~
- [x] `request.querystring=` `ctx.querystring=`
  - [x] ~~`request.search=`~~
- [x] `request.type` (get `mime-type` in `Content-Type` header)
- [x] `request.charset` (get `charset` in `Content-Type` header)
- [ ] `request.fresh` `ctx.fresh`
- [x] `request.socket` `ctx.socket`
- [ ] `request.stale` `ctx.stale`
- [ ] `request.secure` `ctx.secure`
- [x] `request.ip` `ctx.ip`
- [x] `request.ips` `ctx.ips`
- [ ] `request.subdomains` `ctx.subdomains`
- [ ] `request.is()` `ctx.is()`
- [ ] `request.accepts()` `ctx.accepts()`
- [ ] `request.acceptsEncodings()` `ctx.acceptsEncodings()`
- [ ] `request.acceptsCharsets()` `ctx.acceptsCharsets()`
- [ ] `request.acceptsLanguages()` `ctx.acceptsLanguages()`
- [ ] `request.idempotent`

Context response

- [x] `response.headers`
  - [ ] ~~`response.header`~~
- [x] `response.headerSent` `ctx.headerSent` <!-- Need tests -->
- [x] `response.flushHeaders()`
- [x] `response.has(header)`
- [x] `response.get(header)`
- [x] `response.set(headers)` `ctx.set(headers)`
- [x] `response.append(header, value)` `ctx.append(header, value)`
- [x] `response.remove(header)` `ctx.remove(header)`
- [x] `response.socket`
- [x] `response.body` `ctx.body`
- [x] `response.body=` `ctx.body=` (currently only finished json body and stream)
- [x] `response.status` `ctx.status`
- [x] `response.status=` `ctx.status=`
- [x] `response.message` `ctx.message`
- [x] `response.message=` `ctx.message=`
- [x] `response.length` `ctx.length`
- [x] `response.length=` `ctx.length=`
- [x] `response.type` `ctx.type`
- [x] `response.type=` `ctx.type=`
- [ ] `response.is(mimeTypes...)`
- [x] `response.redirect(url, [alt])` `ctx.redirect(url, [alt])`
- [x] `response.attachment([filename])` `ctx.attachment([filename])`
- [ ] `response.lastModified=` `ctx.lastModified=`
- [ ] `response.etag=` `ctx.etag=`
- [x] `response.vary(fields)` `ctx.vary(fields)`
