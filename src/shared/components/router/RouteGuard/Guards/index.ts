import { RouterTypes } from '@shared/types'

const AuthGuard: RouterTypes.Guard<'AuthGuard'> = {
  type: 'AuthGuard',
  canRedirect: (isLoggedIn: boolean) => isLoggedIn,
  redirectPath: '/',
}
