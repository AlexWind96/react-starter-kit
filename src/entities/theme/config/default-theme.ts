import { MantineThemeOverride } from '@mantine/core'
import { APP_COLORS } from './colors'

export const DEFAULT_THEME: MantineThemeOverride = {
  dir: 'ltr',
  transitionTimingFunction: 'ease',
  respectReducedMotion: true,
  cursorType: 'pointer',
  datesLocale: 'en',

  //COLORS
  colors: APP_COLORS,
  primaryShade: { light: 5, dark: 5 },
  primaryColor: 'brand',
  black: '#333333',
  white: '#ffffff',
  colorScheme: 'light',
  focusRing: 'auto',

  //FONTS
  fontFamily:
    'Neufile Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace:
    'Neufile Grotesk, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  lineHeight: 1.55,
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', //18px
    xl: '1.25rem', // 20 px
  },
  shadows: {
    xs: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)',
    sm: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem',
    md: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem',
    lg: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem',
    xl: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem',
  },

  radius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem',
  },
  spacing: {
    xs: '0.625rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  defaultRadius: 'md',

  breakpoints: {
    xs: '36em', //576px
    sm: '48em', //768px
    md: '62em', //992px
    lg: '75em', //1200px
    xl: '88em', //1408px
  },

  components: {
    Container: {
      defaultProps: {
        size: 'xl',
        sizes: {
          xs: '36em',
          sm: '48em',
          md: '62em',
          lg: '75em',
          xl: '88em',
        },
      },
    },
    Modal: {
      // defaultProps: {
      //   size: 'xl',
      //   radius: 'md',
      //   closeButtonProps: {
      //     size: 'lg',
      //   },
      // },
      // styles: (theme, _, { variant, size }) => ({
      //   header: {
      //     padding: '2rem',
      //     paddingBottom: '1.5rem',
      //     borderBottom:
      //       variant === 'withoutBorder' ? undefined : `1px solid ${theme.colors.gray[3]}`,
      //   },
      //   title: {
      //     fontSize: rem(25),
      //     fontWeight: 500,
      //   },
      //   body: {
      //     padding: 0,
      //   },
      //   content: {
      //     flex: size === 'xxl' ? '0 0 80vw' : undefined,
      //   },
      // }),
    },
  },
}
