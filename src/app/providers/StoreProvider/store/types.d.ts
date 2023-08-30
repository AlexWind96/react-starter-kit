export {}
declare global {
  type RootState = ReturnType<typeof import('./store').store.getState>
  type AppDispatch = typeof import('./store').store.dispatch

  interface Window {
    store: ReturnType<typeof import('./store').store>
  }
}
