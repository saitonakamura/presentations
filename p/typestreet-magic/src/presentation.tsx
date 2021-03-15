import { Presentation, Slide } from '@saitonakamura/presa'
import ReactDOM from 'react-dom'

const Deck = () => (
  <>
    <Presentation name="Typestreet magic">
      <Slide>123</Slide>
    </Presentation>
  </>
)

ReactDOM.render(<Deck />, document.querySelector('#root'))
