import React, { useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { RouterTypes } from '@shared/types'

interface RouteGuardProps<T extends { role: string }> {
  children: React.ReactNode
  //With role can go to rout
  guards: RouterTypes.Guard[]
  //Provide args to guard
  [arg: string]: any
}

export const RouteGuard = <T extends { role: string }>({
  children,
  guards,
  ...args
}: RouteGuardProps<T>) => {
  const location = useLocation()

  const from = useMemo(() => {
    const state = location.state as { from: string }

    if (state && state.from) {
      return state.from
    }

    return undefined
  }, [location])

  guards.forEach((guard) => {
    if (guard.canRedirect(args.isLoggedIn)) {
      return <Navigate to={guard.redirectPath} state={{ from }} />
    }
  })

  return children
}
