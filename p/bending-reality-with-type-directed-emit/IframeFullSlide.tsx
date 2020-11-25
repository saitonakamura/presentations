import { SlideProps } from '@saitonakamura/presa'
import React from 'react'
import { Absolute, BaseSlideStyled } from './lib'

export const IframeFullSlide: React.FC<SlideProps & { url: string }> = ({
  url,
  ...rest
}) => (
  <BaseSlideStyled {...rest}>
    <Absolute
      top='0%'
      left='0%'
      right='100%'
      bottom='100%'
      style={{ width: '100%', height: '100%', padding: '10px' }}
    >
      <iframe style={{ width: '100%', height: '100%' }} src={url} />
    </Absolute>
  </BaseSlideStyled>
)
