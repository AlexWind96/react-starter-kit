import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

type RouteSwitchProps = {
  to: string
}

export const RouteSwitch: FC<RouteSwitchProps> = ({ to }) => {
  const location = useLocation()

  return <Navigate to={to} state={{ from: location }} />
}
