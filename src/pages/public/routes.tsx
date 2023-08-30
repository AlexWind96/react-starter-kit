import React from 'react'
import { Navigate } from 'react-router-dom'
import { PublicLayout } from './layout'
import { SandboxPage } from './sandbox'

export const getPublicRoutes = () => {
  return [
    {
      path: '/*',
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={'/sandbox'} />,
        },
        {
          path: `sandbox`,
          element: <SandboxPage />,
        },
      ],
    },
  ]
}
