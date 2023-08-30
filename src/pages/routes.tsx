import React from 'react'
import { useRoutes } from 'react-router-dom'
import { getPublicRoutes } from './public/routes'

export const RootNavigator = () => {
  return useRoutes([...getPublicRoutes()])
}
