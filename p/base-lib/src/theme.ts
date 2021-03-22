import { Theme, SlideThemeType } from '@saitonakamura/presa'

const red = '#C50101'
const black = '#000000'
const white = '#ffffff'

export const baseTheme: Partial<Theme> & {
  colors: Record<'black' | 'white' | 'red', string>
} = {
  baseFont: `Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  // primaryColor: red,
  slide: {
    baseFont: `Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    // textColor: '#FFFFFF',
    // background: `url('${BackImg}') center center / cover no-repeat, linear-gradient(to bottom, #000000, #404040)`,
  } as SlideThemeType,
  colors: {
    black,
    white,
    red,
  },
}
