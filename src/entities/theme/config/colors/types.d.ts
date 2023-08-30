import { DefaultMantineColor, Tuple } from '@mantine/core'

export type ExtendedCustomColors = 'brand' | 'brandGray' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}
