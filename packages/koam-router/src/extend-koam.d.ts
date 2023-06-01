import '@mutoe/koam'

import type Route from './route'
import Router from './router'

declare module '@mutoe/koam' {
  interface Context {
    /** Alias for context.request.params */
    params?: Record<string, string>
    /** captured named route names */
    captures?: string[]
    router?: Router
    /** Only path matched routes */
    routes?: Route[]
  }

  interface Request {
    params?: Record<string, string>
  }
}

declare global {
  namespace Koa {
    export interface Middleware {
      router?: Router
    }
  }
}

export {}
