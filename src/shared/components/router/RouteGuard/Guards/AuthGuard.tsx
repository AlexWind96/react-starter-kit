import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface IAuthGuardProps {
  isLoggedIn: boolean
}

export const AuthGuard: React.FC<IAuthGuardProps> = ({ isLoggedIn }) => {
  const location = useLocation()

  if (isLoggedIn) {
    return <Navigate to={'/'} state={{ from: location }} />
  }

  return <Outlet />
}
