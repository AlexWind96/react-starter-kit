import { MantineThemeOverride } from '@mantine/core'

type CreateThemeFn = (themeOverride: MantineThemeOverride) => MantineThemeOverride

export const createTheme: CreateThemeFn = (themeOverride) => {
  return themeOverride
}
