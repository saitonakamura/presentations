import React from 'react'
import { render } from 'react-dom'
import { Slide, Presentation, Fragment } from '@saitonakamura/presa'
import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
  SlideTheme,
} from 'styled-components'
import BackImg from './assets/back.png'
import BackJokerImg from './assets/back-joker.png'
import AnnImg from './assets/ann.png'
import JokerImg from './assets/joker.png'
import MorganaImg from './assets/morgana.png'
import RyuijiImg from './assets/ryuiji.png'
import YusukeImg from './assets/yusuke.png'
import HaruImg from './assets/haru.png'
import TwinsImg from './assets/twins.png'
import FutabaImg from './assets/futaba.png'
import AvatarImg from './assets/avatar.jpg'
import JasonStathamImg from './assets/jason-statham.jpg'
import VinDieselImg from './assets/vin-diesel.jpg'
import JohnnySinsImg from './assets/johnny-sins.jpg'
import { AnimatedSlide } from './useAnimatedSteps'
import { animated } from 'react-spring'
import { CenteredLayout } from '@saitonakamura/presa'
import { JsonManualValidationSlide } from './jsonManualValidation'
import { JsLibrariesSlide } from './JsLibrariesSlide'
import { IoTsSlide } from './ioTsSlide'
import { ClassValidatorCodeSlide } from './ClassValidatorCodeSlide'
import { SlideProps } from '@saitonakamura/presa'
import { CodeSurferSlide } from './CodeSurferSlide'
import { vsDark } from '@code-surfer/themes'
import { ReadingTypesSlides } from './ReadingTypesSlides'
import { EmittingValidatorSlides } from './EmitingValidatorSlides'
import { TypeDirectedEmitCodeSlides } from './TypeDirectedEmitCodeSlides'
import { WrappingValidatorCodeSlides } from './WrappingValidatorCodeSlides'
import { AstTalksSlide } from './AstTalksSlide'
import {
  A,
  Absolute,
  BaseSlideStyled,
  OuterA,
  Typography,
  typography,
  TwitterLink,
} from './lib'
import { IframeFullSlide } from './IframeFullSlide'
import { CustomValidatorSlides } from './CustomValidatorSlides'

const red = '#C50101'
const black = '#000000'
const white = '#ffffff'

const Avatar = styled.img.attrs({
  src: AvatarImg,
})`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid ${(p) => p.theme.colors.white};
  /* 
  &::after {
    content: '';
    width: inherit;
    height: inherit;
    border-radius: inherit;
    border: 3px solid ${(p) => p.theme.colors.black};
  } */
`

const AboutMeSlideStyled = styled(BaseSlideStyled)``

const CenteredLayoutHorizontal = styled(CenteredLayout)`
  flex-direction: row;
`

const VerticalList = styled.ul<{ gapSize?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  > * + * {
    margin-top: ${(p) => p.gapSize ?? '40px'};
  }
`

const Title = styled.h1<Typography>`
  ${(p) =>
    typography({
      fontSize: '65px',
      fontFamily: "'Bebas Neue', cursive",
      ...p,
    })};
`

const Subtitle = styled.h2`
  font-size: 50px;
  font-weight: 500;
`

const BackImgToBlend = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  // z-index: -1;
`

const GradientOfBackImgToBlend = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  // z-index: -1;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.1)
  );
`

const TitleBack = styled(Title)`
  background-color: ${(p) => p.theme.colors.black};
  border: 10px solid ${(p) => p.theme.colors.white};
  padding: 25px;
  // transform: rotate(3deg) scale(1.1);
`

const Block = styled.div`
  background-color: ${(p) => p.theme.colors.black};
`

const SubtitleBack = styled(Subtitle)`
  background-color: ${(p) => p.theme.colors.black};
  border: 10px solid ${(p) => p.theme.colors.white};
  padding: 25px;
`

// const TitleStyled = styled(Title)`
//   &::after {
//     content: '';
//   }
// `

const TitleSlide = styled(
  ({
    title,
    subtitle,
    children,
    ...rest
  }: { title?: string; subtitle?: React.ReactNode } & SlideProps) => (
    <BaseSlideStyled background='none' {...rest}>
      <BackImgToBlend src={BackJokerImg} />
      {/*<GradientOfBackImgToBlend />*/}

      <Absolute top='52%' right='15%' style={{ zIndex: 1 }}>
        {subtitle && <SubtitleBack>{subtitle}</SubtitleBack>}
      </Absolute>
      <Typography fontSize='100px'>
        {/*<Absolute top="25%" left="23%">*/}
        {/*  <Title noSize style={{ mixBlendMode: 'overlay', zIndex: -1 }}>*/}
        {/*    {title}*/}
        {/*  </Title>*/}
        {/*</Absolute>*/}
        <Absolute top='25%' left='13%' style={{ zIndex: 1 }}>
          {title && (
            <TitleBack fontSize='inherit' style={{ whiteSpace: 'nowrap' }}>
              {title}
            </TitleBack>
          )}
        </Absolute>
      </Typography>
      {children}
    </BaseSlideStyled>
  ),
)``

const AboutMeSlide = (
  <AboutMeSlideStyled layout={CenteredLayoutHorizontal}>
    <Avatar style={{ marginRight: '30px' }} />
    <Typography fontSize='35px'>
      <VerticalList>
        <Title>Michael Bashurov</Title>
        <Fragment>
          🧑🏻‍💻 React, Typescript,
          <br /> ReScript
        </Fragment>
        <Fragment>💼 Wisebits</Fragment>
      </VerticalList>
    </Typography>
  </AboutMeSlideStyled>
)

const CardStyled = styled.img`
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
`

const AnimatedCard = animated(CardStyled)

const CardSlide: React.FC<{ cardImg: string }> = ({
  cardImg,
  children,
  ...rest
}) => {
  return (
    <AnimatedSlide<{
      card: { top: string; left: string; transform: string; opacity: number }
      content: { opacity: number }
    }>
      {...rest}
      slide={BaseSlideStyled}
      steps={[
        {
          card: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
          },
          content: { opacity: 0 },
        },
        {
          card: { opacity: 1 },
          content: {},
        },
        {
          card: { left: '20%', transform: 'translate(-50%, -50%)' },
          content: { opacity: 1 },
        },
      ]}
    >
      {(styles) => (
        <>
          <AnimatedCard src={cardImg} style={styles.card} />
          <animated.div style={styles.content}>{children}</animated.div>
        </>
      )}
    </AnimatedSlide>
  )
}

const QuestionsSlide = (
  <TitleSlide>
    <Absolute top='10%' left='15%' style={{ zIndex: 0 }}>
      <SubtitleBack>
        <VerticalList>
          <li>
            <OuterA href='https://github.com/ts-type-makeup/superstruct-ts-transformer'>
              💚 superstruct-ts-transformer
            </OuterA>
          </li>
          <li>
            <OuterA href='https://github.com/ts-type-makeup/ts-type-visitor'>
              💚 ts-type-visitor
            </OuterA>
          </li>
          <li>
            <TwitterLink />
          </li>
          <li>
            <OuterA href='https://bending-reality.netlify.app'>
              🖥 bit.ly/bending-reality
            </OuterA>
          </li>
        </VerticalList>
      </SubtitleBack>
    </Absolute>
  </TitleSlide>
)

const theme: Partial<DefaultTheme> = {
  baseFont: `Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  primaryColor: red,
  slide: {
    baseFont: `Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    textColor: '#FFFFFF',
    background: `url('${BackImg}') center center / cover no-repeat, linear-gradient(to bottom, #000000, #404040)`,
  } as SlideTheme,
  colors: {
    black,
    white,
    red,
  },
}

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

li {
  list-style: none;
}
`

const Deck = () => (
  <>
    <Presentation name='Bending reality with type-directed emit' theme={theme}>
      <TitleSlide title='Bending reality' subtitle='with type-directed emit' />
      {AboutMeSlide}
      <BaseSlideStyled>
        <Title>JSON Validation</Title>
      </BaseSlideStyled>
      <BaseSlideStyled background={JasonStathamImg}>
        <Typography fontSize='290px'>
          <Fragment>
            <Absolute top='10%' left='15%'>
              {'{'}
            </Absolute>
            <Absolute top='10%' right='25%'>
              {'}'}
            </Absolute>
          </Fragment>
        </Typography>
      </BaseSlideStyled>
      <BaseSlideStyled background={VinDieselImg}>
        <Typography fontSize='290px'>
          <Fragment>
            <Absolute top='10%' left='15%'>
              {'{'}
            </Absolute>
            <Absolute top='10%' right='25%'>
              {'}'}
            </Absolute>
          </Fragment>
        </Typography>
      </BaseSlideStyled>
      <BaseSlideStyled background={JohnnySinsImg} />
      {JsonManualValidationSlide}
      <BaseSlideStyled layout={CenteredLayoutHorizontal}>
        <Typography>
          <Fragment>
            <Title>JS libraries</Title>
          </Fragment>
          <Fragment>
            <Title>io-ts</Title>
          </Fragment>
          <Fragment>
            <Title>class-validator</Title>
          </Fragment>
          <Fragment>
            <Title>❓</Title>
          </Fragment>
        </Typography>
      </BaseSlideStyled>
      <BaseSlideStyled>
        <VerticalList>
          <Title>JS Libraries</Title>
          <Typography fontSize='30px'>
            <VerticalList gapSize='10px'>
              <Fragment>💚 Simple!</Fragment>
              <Fragment>💔 Need to keep types and schemes in sync</Fragment>
            </VerticalList>
          </Typography>
        </VerticalList>
      </BaseSlideStyled>
      {JsLibrariesSlide}
      <BaseSlideStyled>
        <VerticalList>
          <Title>io-ts/runtypes/typed-contracts</Title>
          <Typography fontSize='30px'>
            <VerticalList gapSize='10px'>
              <Fragment>💚 Everything in sync with type inference</Fragment>
              <Fragment>💔 Hard to integrate with existing types</Fragment>
            </VerticalList>
          </Typography>
        </VerticalList>
      </BaseSlideStyled>
      {IoTsSlide}
      <BaseSlideStyled>
        <VerticalList>
          <Title>class-validator</Title>
          <Typography fontSize='30px'>
            <VerticalList gapSize='10px'>
              <Fragment>💚 Sync with classes</Fragment>
              <Fragment>💔 Everything need to be class</Fragment>
              <Fragment>💔 Experimental decorators</Fragment>
              <Fragment>💔 Field type and decorator aren't in sync</Fragment>
            </VerticalList>
          </Typography>
        </VerticalList>
      </BaseSlideStyled>
      {ClassValidatorCodeSlide}
      <TitleSlide
        title='Type-directed emit'
        subtitle='with custom transformers'
      />
      {TypeDirectedEmitCodeSlides}
      <CardSlide cardImg={JokerImg}>
        <Absolute top='38%' right='11%'>
          <TitleBack fontSize='100px'>Reading AST</TitleBack>
        </Absolute>
      </CardSlide>
      <IframeFullSlide url='https://ts-ast-viewer.com/#code/JYWwDg9gTgLgBAbzgNwIYBtgBNUwKZwC+cAZlBCAFBxwDkAzgK5h5T0xSMDGMAtDPX5RUAO3oloIVrUqUYATxZwAKqnoBrOAF5E1ODGAx0eAFxx2UYCIDmlQrLwAPSLDhcIY+BABGAK20oGNi4eAA8qhoAfHoAFABSAMoA8gByAHRgqGx4MbRIAEQGRnj5ZvkAQozycHjW1vT5RLQAlM1AA' />
      {AstTalksSlide}
      <CardSlide cardImg={RyuijiImg}>
        <Absolute top='38%' right='8%'>
          <TitleBack fontSize='100px'>Reading types</TitleBack>
        </Absolute>
      </CardSlide>
      {ReadingTypesSlides}
      {/*<CardSlide cardImg={MorganaImg}>*/}
      {/*  <Absolute top="38%" right="8%">*/}
      {/*    <TitleBack fontSize="100px">Emitting types</TitleBack>*/}
      {/*  </Absolute>*/}
      {/*</CardSlide>*/}
      <CardSlide cardImg={YusukeImg}>
        <Absolute top='38%' right='3%'>
          <TitleBack fontSize='90px'>Emitting validator</TitleBack>
        </Absolute>
      </CardSlide>
      {EmittingValidatorSlides}
      <CardSlide cardImg={AnnImg}>
        <Absolute top="38%" right="3%">
          <TitleBack fontSize="90px">Custom validation</TitleBack>
        </Absolute>
      </CardSlide>
      {CustomValidatorSlides}
      <CardSlide cardImg={HaruImg}>
        <Absolute top='25%' right='8%'>
          <TitleBack fontSize='80px' style={{ width: '500px' }}>
            💔 Wrapping validator problem
          </TitleBack>
        </Absolute>
      </CardSlide>
      {WrappingValidatorCodeSlides}
      <CardSlide cardImg={TwinsImg}>
        <Absolute top='38%' right='8%'>
          <TitleBack fontSize='80px'>💔 Hard to debug</TitleBack>
        </Absolute>
      </CardSlide>
      <CardSlide cardImg={FutabaImg}>
        <Absolute top='38%' right='8%'>
          <TitleBack fontSize='80px'>💔 No .babelrc</TitleBack>
        </Absolute>
      </CardSlide>
      <BaseSlideStyled>
        <VerticalList>
          <Title>Other applications</Title>
          <Typography fontSize='30px'>
            <VerticalList gapSize='10px'>
              <Fragment>💚 prop-types generation</Fragment>
              <Fragment>💚 data stubs generation</Fragment>
              <Fragment>💚 property-based testing</Fragment>
            </VerticalList>
          </Typography>
        </VerticalList>
      </BaseSlideStyled>
      {QuestionsSlide}
    </Presentation>
    <GlobalStyle />
  </>
)

render(<Deck />, document.querySelector('#root'))
