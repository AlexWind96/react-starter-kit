import React from 'react'
import { MantineProvider as Provider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { useAppSelector } from '@shared/hooks'
import { DEFAULT_THEME, Fonts, GlobalStyles, selectThemeSlice } from '@entities/theme'

export function MantineProvider({ children }) {
  const { theme } = useAppSelector(selectThemeSlice)
  return (
    <Provider theme={DEFAULT_THEME} withNormalizeCSS withCSSVariables>
      <Notifications position="top-right" />
      <GlobalStyles />
      <Fonts />
      <ModalsProvider>{children}</ModalsProvider>
    </Provider>
  )
}
