import { Presentation, Slide } from '@saitonakamura/presa'
import { BaseSlideStyled } from 'base-lib'
import ReactDOM from 'react-dom'
import { baseTheme } from 'base-lib/lib/src/theme'
import { intro } from './intro'

const Deck = () => (
  <>
    <Presentation name="Typestreet magic" theme={baseTheme}>
      <Slide>123</Slide>
      <BaseSlideStyled>123</BaseSlideStyled>
      {...intro}
    </Presentation>
  </>
)

ReactDOM.render(<Deck />, document.querySelector('#root'))
