export type GuardType = 'AuthGuard'

export interface Guard {
  type: string
  canRedirect: (arg: any) => boolean
  redirectPath: string
}

export class AuthGuard implements Guard {
  type: string
  redirectPath: string
  constructor() {
    this.type = 'AuthGuard'
    this.redirectPath = '/'
  }
  canRedirect(isLoggedIn: boolean) {
    return !isLoggedIn
  }
}
