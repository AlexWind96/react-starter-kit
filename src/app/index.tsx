import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RootNavigator } from '@pages/routes'
import { ErrorBoundary, MantineProvider, StoreProvider } from './providers'
import './styles/index.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <StoreProvider>
          <MantineProvider>
            <RootNavigator />
          </MantineProvider>
        </StoreProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
