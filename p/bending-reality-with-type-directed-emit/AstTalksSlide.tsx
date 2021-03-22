import { animated } from 'react-spring'
import { AnimatedSlide } from '@saitonakamura/presa-animated-steps'
import { BaseSlideStyled } from 'base-lib'

export const AstTalksSlide = (
  <AnimatedSlide<{
    card1: { left: string; top: string; opacity: number; transform: string }
    card2: { left: string; top: string; opacity: number; transform: string }
    card3: { left: string; top: string; opacity: number; transform: string }
  }>
    slide={BaseSlideStyled}
    steps={[
      {
        card1: {
          left: '50%',
          top: '50%',
          opacity: 0,
          transform: 'scale(0.5) translate(-50%, -100%)',
        },
        card2: {
          left: '50%',
          top: '50%',
          opacity: 0,
          transform: 'scale(0.5) translate(-50%, -100%)',
        },
        card3: {
          left: '50%',
          top: '50%',
          opacity: 0,
          transform: 'scale(0.5) translate(-50%, -100%)',
        },
      },
      {
        card1: {
          opacity: 1,
          transform: 'scale(1) translate(-50%, -50%)',
        },
      },
      {
        card1: {
          left: '8%',
          transform: 'scale(0.5) translate(-50%, -100%)',
        },
      },
      {
        card2: {
          opacity: 1,
          transform: 'scale(1) translate(-50%, -50%)',
        },
      },
      {
        card2: {
          left: '39%',
          transform: 'scale(0.5) translate(-50%, -100%)',
        },
      },
      {
        card3: {
          opacity: 1,
          transform: 'scale(1) translate(-50%, -50%)',
        },
      },
      {
        card3: {
          left: '70%',
          transform: 'scale(0.5) translate(-50%, -100%)',
        },
      },
    ]}
  >
    {(styles) => (
      <>
        <animated.iframe
          style={{ ...styles.card1, position: 'absolute' }}
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/ILSpvViUlPU"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <animated.iframe
          style={{ ...styles.card2, position: 'absolute' }}
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/UeVq_U5obnE"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <animated.iframe
          style={{
            ...styles.card3,
            position: 'absolute',
            backgroundColor: 'white',
          }}
          width="560"
          height="315"
          src="https://holyjs-moscow.ru/en/2020/msk/talks/2tglbvawgaf9k7goi7pc5n"
          frameBorder={0}
          allowFullScreen
        />
      </>
    )}
  </AnimatedSlide>
)
