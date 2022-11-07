import http from 'node:http'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS'

export class Context {
  req: http.IncomingMessage
  res: http.ServerResponse

  constructor (req: http.IncomingMessage, res: http.ServerResponse) {
    this.req = req
    this.res = res
  }

  get method (): HttpMethod {
    return this.req.method?.toUpperCase() as HttpMethod
  }

  get url (): string | undefined {
    return this.req.url
  }
}
