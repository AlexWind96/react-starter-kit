import React, { PropsWithChildren } from 'react'
import { ErrorBoundary as Error } from 'react-error-boundary'

const ErrorFallback = () => {
  return <div>Error</div>
}
export function ErrorBoundary({ children }: PropsWithChildren) {
  return <Error FallbackComponent={ErrorFallback}>{children}</Error>
}
