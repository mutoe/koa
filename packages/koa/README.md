# Koa (lite version)

Implement a simple Koa with zero dependencies from scratch.

THIS FRAMEWORK HAVE NOT BEEN STRICTLY TESTED, PLEASE DO NOT USE IT IN PRODUCTION !  
许多功能未经严格测试，请勿用于生产目的！

## Advantage

- Lightweight
- TypeScript

## Roadmap

Configuration

- [ ] `app.env`
- [ ] `app.proxy`
- [ ] `app.keys`
- [ ] `app.proxyIpHeader`
- [ ] `app.maxIpsCount`

Application properties / methods

- [x] `app.use(middleware)`
- [ ] `app.callback()`
- [x] `app.listen(...)`
- [ ] `app.context`
- [ ] `app.keys=`
- [ ] `app.on('error', error)`

Context properties

- [x] `ctx.req`
- [x] `ctx.res`
- [x] `ctx.request`
- [x] `ctx.response`
- [ ] `ctx.state`
- [ ] `ctx.app`
- [ ] `ctx.app.emit`
- [ ] `ctx.cookies.get(name, [options])`
- [ ] `ctx.cookies.set(name, value [,options])`
- [ ] `ctx.throw([status], [msg], [properties])`
- [ ] `ctx.assert(value, [status], [msg], [properties])`
- [ ] `ctx.respond`

Context request

- [ ] `request.headers` `ctx.headers`
    - [ ] `request.header` `ctx.header`
- [ ] `request.headers=`
    - [ ] `request.header=`
- [ ] `request.get(field)` `ctx.get(field)`
- [x] `request.method` `ctx.method`
- [ ] `request.method=` `ctx.method=`
- [ ] `request.length`
- [ ] `request.url` `ctx.url`
- [ ] `request.url=` `ctx.url=`
- [ ] `request.originalUrl` `ctx.originalUrl`
- [ ] `request.origin` `ctx.origin`
- [ ] `request.href` `ctx.href`
- [x] `request.path` `ctx.path`
- [ ] `request.path=` `ctx.path=`
- [x] `request.query` `ctx.query`
- [ ] `request.query=` `ctx.query=`
- [ ] `request.querystring` `ctx.querystring`
    - [ ] `request.search`
- [ ] `request.querystring=` `ctx.querystring=`
    - [ ] `request.search=`
- [ ] `request.host` `ctx.host`
- [ ] `request.hostname` `ctx.hostname`
- [ ] `request.URL`
- [ ] `request.type` (get `mime-type` in `Content-Type` header)
- [ ] `request.charset` (get `charset` in `Content-Type` header)
- [ ] `request.fresh` `ctx.fresh`
- [ ] `request.socket` `ctx.socket`
- [ ] `request.stale` `ctx.stale`
- [ ] `request.protocol` `ctx.protocol`
- [ ] `request.secure` `ctx.secure`
- [ ] `request.ip` `ctx.ip`
- [ ] `request.ips` `ctx.ips`
- [ ] `request.subdomains` `ctx.subdomains`
- [ ] `request.is()` `ctx.is()`
- [ ] `request.accepts()` `ctx.accepts()`
- [ ] `request.acceptsEncodings()` `ctx.acceptsEncodings()`
- [ ] `request.acceptsCharsets()` `ctx.acceptsCharsets()`
- [ ] `request.acceptsLanguages()` `ctx.acceptsLanguages()`
- [ ] `request.idempotent`

Context response

- [ ] `response.header` 
- [ ] `response.headers`
- [ ] `response.socket`
- [x] `response.body` `ctx.body`
- [x] `response.body=` `ctx.body=` (currently only finished json body)
- [x] `response.status` `ctx.status`
- [x] `response.status=` `ctx.status=`
- [ ] `response.message` `ctx.message`
- [ ] `response.message=` `ctx.message=`
- [ ] `response.length` `ctx.length`
- [ ] `response.length=` `ctx.length=`
- [ ] `response.type` `ctx.type`
- [ ] `response.type=` `ctx.type=`
- [ ] `response.is(mimeTypes...)`
- [ ] `response.redirect(url, [alt])` `ctx.redirect(url, [alt])`
- [ ] `response.headerSent` `ctx.headerSent`
- [ ] `response.attachment([filename], [options])` `ctx.attachment([filename], [options])`
- [ ] `response.has(header)`
- [ ] `response.get(header)`
- [ ] `response.set(headers)` `ctx.set(headers)`
- [ ] `response.append(header, value)` `ctx.append(header, value)`
- [ ] `response.remove(header)` `ctx.remove(header)`
- [ ] `response.lastModified=` `ctx.lastModified=`
- [ ] `response.etag=` `ctx.etag=`
- [ ] `response.vary(field)`
- [ ] `response.flushHeaders()`
