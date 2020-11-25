import React from 'react'
import { Slide, SlideProps } from '@saitonakamura/presa'
import styled, { css } from 'styled-components'
import HolyJsImg from './assets/holyjs.svg'

export const Absolute = styled.div<{
  top?: string
  left?: string
  right?: string
  bottom?: string
  center?: boolean
  raise?: boolean
}>`
  position: absolute;
  ${(p) =>
    p.raise
      ? css`
          z-index: 10;
        `
      : ''};
  ${(p) =>
    p.top
      ? css`
          top: ${p.top};
        `
      : ''};
  ${(p) =>
    p.left
      ? css`
          left: ${p.left};
        `
      : ''};
  ${(p) =>
    p.right
      ? css`
          right: ${p.right};
        `
      : ''};
  ${(p) =>
    p.bottom
      ? css`
          bottom: ${p.bottom};
        `
      : ''};
  ${(p) =>
    p.center
      ? css`
          transform: translate(-50%, -50%);
        `
      : ''};
`

export type Typography = {
  fontSize?: string
  fontWeight?: 'bold' | 400 | 500 | 700
  fontFamily?: string
  color?: string
}

export const typography = (t: Typography) => css`
  color: ${t.color ?? 'inherit'};
  font-size: ${t.fontSize ?? 'inherit'};
  font-weight: ${t.fontWeight ?? 'inherit'};
  font-family: ${t.fontFamily ?? 'inherit'};
`

export const Typography = styled.div<Typography>`
  ${typography};
`

export const A = styled.a<Typography>`
  ${typography};
  transition: all 0.15s ease-in-out;
  display: inline-block;

  &:link,
  &:visited {
    color: ${(p) => p.color ?? p.theme.colors.white};
  }

  &:hover {
    color: ${(p) => p.theme.colors.red};
    text-decoration: underline;
    transform: scale(1.05);
  }
`

export const OuterA = styled(A).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``

const ConferenceLogo = styled.img.attrs({
  alt: 'HolyJS Conference logo',
  src: HolyJsImg,
})`
  height: 50px;
`

export const TwitterLink = ({
  href,
  children,
  ...rest
}: ExtractProps<typeof OuterA>) => (
  <OuterA {...rest} href={href ?? 'https://twitter.com/SaitoNakamura'}>
    {children ?? '🐦 @saitonakamura'}
  </OuterA>
)

export const BaseSlideStyled = ({
  layout,
  children,
  disableLogo,
  disableSocial,
  ...rest
}: SlideProps & { disableLogo?: boolean; disableSocial?: boolean }) => (
  <Slide {...rest} layout={layout ?? 'centered'}>
    {!disableLogo && (
      <Absolute
        bottom='0%'
        left='0%'
        raise
        style={{
          padding: '25px 25px 20px 25px',
        }}
      >
        <TwitterLink color='#4D9EEB' fontSize="17px" fontWeight="bold" />
      </Absolute>
    )}
    {!disableLogo && (
      <Absolute
        bottom='0%'
        right='0%'
        raise
        style={{
          padding: '25px 15px 15px 25px',
        }}
      >
        <ConferenceLogo />
      </Absolute>
    )}
    {children}
  </Slide>
)
