import { Slide } from '@saitonakamura/presa'
import styled, { css } from 'styled-components'

export const BaseSlideStyled = styled(Slide).attrs(({ layout }) => ({
  layout: layout ?? 'centered',
}))``

export const Absolute = styled.div<{
  top?: string
  left?: string
  right?: string
  bottom?: string
  center?: boolean
}>`
  position: absolute;
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
