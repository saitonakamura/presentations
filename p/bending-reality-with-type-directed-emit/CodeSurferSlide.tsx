import React, { useState, useEffect, useRef } from 'react'
import { ControlledFragment, Slide } from '@saitonakamura/presa'
import { CodeSurfer } from '@code-surfer/standalone'
import {
  ALL_FRAGMENTS,
  NO_FRAGMENTS,
} from '@saitonakamura/presa'
import { SlideProps } from '@saitonakamura/presa'
import { useSpring } from 'use-spring'
import { useFragments } from '@saitonakamura/presa'
import { PlainLayout } from '@saitonakamura/presa'
import { BaseSlideStyled } from './lib'
// import { InputStep } from 'code-surfer-types'

type Maybe<T> = T | null | undefined

interface Flavoring<FlavorT> {
  _type?: FlavorT
}

type Flavor<T, FlavorT> = T & Flavoring<FlavorT>

// declare module 'code-surfer-types' {
export interface InputCodeStep {
  code: string
  focus?: string
  title?: string
  subtitle?: string
  lang?: string
  showNumbers?: boolean
}

type LineKey = Flavor<number, 'LineKey'>
type LineIndex = Flavor<number, 'LineIndex'>
type StepIndex = Flavor<number, 'StepIndex'>

export interface CodeStep {
  lines: LineKey[]
  longestLineIndex: LineIndex
  focus: Record<LineIndex, true | StepIndex[]>
  focusCenter: number
  focusCount: number
  title?: string
  subtitle?: string
  dimensions?: {
    paddingTop: number
    paddingBottom: number
  }
}

export interface Dimensions {
  lineHeight: number
  containerHeight: number
  containerWidth: number
  contentHeight?: number
  contentWidth: number
}

// type Partial<T> = {
//   [P in keyof T]?: T[P]
// }
// }

const steps: InputCodeStep[] = [
  {
    code: `var x1 = 1
debugger`,
    focus: '1',
    lang: 'js',
  },
  {
    code: `var x0 = 3
var x1 = 1
var x0 = 3`,
    lang: 'js',
  },
]

const mapIndex = (index: number, steps: any[]) => {
  if (index === NO_FRAGMENTS) {
    return 0
  } else if (index === ALL_FRAGMENTS) {
    return steps.length
  } else {
    return index + 1
  }
}

const CodeSurferInner: React.FC<{
  steps: InputCodeStep[]
  theme?: any
  nonblocking?: boolean
}> = ({ steps, ...rest }) => {
  const [progress] = useFragments(steps.length - 1)

  const [p] = useSpring(mapIndex(progress, steps), {
    decimals: 3,
    // stiffness: 80,
    damping: 28,
    // mass: 8,
  })

  return <CodeSurfer {...rest} progress={p} steps={steps} />
}

export const CodeSurferSlide: React.FC<{
  steps: InputCodeStep[]
  slide?: React.ComponentType<SlideProps>
  theme?: any
  nonblocking?: boolean
}> = ({ steps, slide: BaseSlide = BaseSlideStyled, theme, nonblocking, ...rest }) => {
  return (
    <BaseSlide layout={PlainLayout} {...rest}>
      <CodeSurferInner theme={theme} nonblocking={nonblocking} steps={steps} />
    </BaseSlide>
  )
}

export const ExampleCodeSurferSlide = <CodeSurferSlide steps={steps} />
