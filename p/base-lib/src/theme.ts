import { Theme, SlideThemeType } from '@saitonakamura/presa'

const red = '#C50101'
const black = '#000000'
const white = '#ffffff'

export const baseTheme: Partial<Theme> & {
  colors: Record<'black' | 'white' | 'red', string>
} = {
  baseFont: `Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  slide: {
    baseFont: `Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  } as SlideThemeType,
  colors: {
    black,
    white,
    red,
  },
}
