import '@saitonakamura/presa/styled'

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      black: string
      white: string
      red: string
    }
  }
}
