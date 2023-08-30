import { Caption } from './Caption'
import { Label } from './Label'

type TypographyExtensions = {
  Caption: typeof Caption
  Label: typeof Label
}

export const Typography: TypographyExtensions = {
  Caption: Caption,
  Label: Label,
}
