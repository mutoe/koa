import * as http from 'node:http'
import Application from './application'
import Context from './context'

export * from './enums'
export * from './middlewares'
export * from './utils'

export { default as AppError } from './app-error'
export { default as Application } from './application'
export { default as Context } from './context'
export { default as Request } from './request'
export { default as Response } from './response'

declare global {
  type JsonValue =
    | string | number | boolean
    | { [x: string]: JsonValue }
    | JsonValue[]
    | null

  type QueryObject = Record<string, string | number | boolean | (string | number | boolean)[]>

  namespace Koa {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface State {}

    export type ErrorHandler = (error: Error, context: Context) => void | Promise<void>

    export interface Config {
      /**
       * Env config
       * @description If not set env, will read `process.env.NODE_ENV`.
       * @default 'development'
       */
      env: string

      /**
       * @description You can log, send request, write file, trigger event and do anything you want.
       */
      onError: ErrorHandler

      /**
       * @description Whether print the logs.
       * @default false
       */
      silent: boolean

      /**
       * @description Whether there is a proxy such as nginx before application
       * @default false
       */
      proxy: boolean

      /**
       * @description If you have proxy, specify the header of the forwarding IPs.
       * @default x-forwarded-for
       */
      proxyIpHeader: string

      /**
       * @description If you have proxy, specify how many proxy server you have.
       * @default 0 (unlimited)
       */
      maxIpsCount: number
    }

    export type HeaderKey = keyof http.IncomingHttpHeaders | string
    export type HeaderValue = http.OutgoingHttpHeader

    export interface Middleware {
      (ctx: Context, next: () => Promise<void>): Promise<void> | void
    }
    export type MiddlewareGenerator = (...args: any[]) => Middleware
  }
}

const Koa = Application
export default Koa
