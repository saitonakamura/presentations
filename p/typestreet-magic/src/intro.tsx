import { BaseSlideStyled } from 'base-lib'

let i = 0
const uniq = (prefix: string) => `${prefix}${i++}`

export const intro = [
  <BaseSlideStyled key={uniq('intro_')}>Intro</BaseSlideStyled>,
]
