import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'

type IStoreProviderProps = {
  children: ReactNode
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
