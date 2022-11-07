import Koa from '../src'

describe('# middleware', () => {
  let app: Koa
  let testAddress: any = {}
  const baseUrl = () => `http://localhost:${testAddress.port || 33_000}`
  const cb = jest.fn()

  beforeEach(() => { testAddress = 33_000; app = new Koa() })
  afterEach(() => app.close())

  it('should can get request basic information', async () => {
    testAddress = app.use(cb).listen(0).address()

    const path = '/path'
    const query = '?foo=1&bar=true&baz=baz'
    await fetch(`${baseUrl()}${path}${query}`, { method: 'GET' })

    expect(cb).toBeCalledTimes(1)
    const ctx = cb.mock.calls[0][0]
    expect(ctx).toMatchObject({
      method: 'GET',
      url: path + query,
      path,
      query: { foo: 1, bar: true, baz: 'baz' },
    })
  })

  it('should implement onion model (order for executing middleware)', async () => {
    app.use(async (ctx, next) => { cb(1); await next(); cb(2) })
      .use(async (ctx, next) => { cb(3); await next(); cb(4) })
      .use(async (ctx, next) => { cb(5); await next(); cb(6) })
    testAddress = app.listen(0).address()

    await fetch(`${baseUrl()}/path?foo=1&bar=true#hash`, { method: 'GET' })

    expect(cb).toBeCalledTimes(6)
    expect(cb.mock.calls.map(it => it[0])).toEqual([1, 3, 5, 6, 4, 2])
  })

  describe('parse request body', () => {
    it('should parse json response correctly', async () => {
      testAddress = app.use(cb).listen(0).address()

      await fetch(baseUrl(), {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ foo: 'bar', count: 1 }),
      })

      expect(cb).toBeCalledTimes(1)
      const ctx = cb.mock.calls[0][0]
      expect(ctx.method).toEqual('POST')
      expect(ctx.body).toEqual({ foo: 'bar', count: 1 })
    })
  })
})
