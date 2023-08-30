import { Global } from '@mantine/core'

export function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        html: {
          position: 'relative',
          height: '100%',
        },

        body: {
          backgroundColor: theme.white,
        },
      })}
    />
  )
}
