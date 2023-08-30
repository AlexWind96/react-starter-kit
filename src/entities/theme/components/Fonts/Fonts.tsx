import { Global } from '@mantine/core'
import bold from './NeufileGrotesk/NeufileGrotesk-Bold.ttf'
import light from './NeufileGrotesk/NeufileGrotesk-Light.ttf'
import medium from './NeufileGrotesk/NeufileGrotesk-Medium.ttf'
import regular from './NeufileGrotesk/NeufileGrotesk-Regular.ttf'
import semiBold from './NeufileGrotesk/NeufileGrotesk-SemiBold.ttf'

export function Fonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Neufile Grotesk',
            src: `url('${light}')`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Neufile Grotesk',
            src: `url('${regular}')`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Neufile Grotesk',
            src: `url('${medium}')`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Neufile Grotesk',
            src: `url('${semiBold}')`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Neufile Grotesk',
            src: `url('${bold}')`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  )
}
