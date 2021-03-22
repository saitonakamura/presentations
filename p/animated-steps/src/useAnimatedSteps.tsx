import { useSpring, AnimatedValue, ForwardedProps } from 'react-spring'
import React, { useMemo } from 'react'

import { ControlledFragment, Slide } from '@saitonakamura/presa'
import { PlainLayout } from '@saitonakamura/presa'
import { SlideProps } from '@saitonakamura/presa'
import { ALL_FRAGMENTS, NO_FRAGMENTS } from '@saitonakamura/presa'

const processSteps = <T extends Record<string, {}>>(steps: Steps<T>) => {
  const keys = Object.keys(steps[0])

  const states = new Map<keyof T, T>()

  return steps.map((step) => {
    const newStep = {} as T

    keys.forEach((key: keyof T) => {
      if (states.has(key)) {
        const state = states.get(key)
        // @ts-ignore
        const newState = { ...state, ...step[key] }
        // @ts-ignore
        states.set(key, newState)
        // @ts-ignore
        newStep[key] = newState
      } else if (key in step) {
        const newState = step[key]
        // @ts-ignore
        states.set(key, newState)
        // @ts-ignore
        newStep[key] = newState
      } else {
        const newState = {} as T
        states.set(key, newState)
        // @ts-ignore
        newStep[key] = newState
      }
    })

    return newStep
  })
}

type OverwriteKeys<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] }

type AnimatedStyle<DS extends object> = AnimatedValue<
  ForwardedProps<OverwriteKeys<DS, React.CSSProperties>>
>

type AnimatedStyles<T> = Record<keyof T, AnimatedStyle<{}>>

export const useAnimatedSteps = <T extends Record<string, {}>>(
  steps: Steps<T>
): ((step: number) => AnimatedStyles<T>) => {
  const processedSteps = useMemo(() => processSteps(steps), [steps])

  return (step: number) => {
    const springs = {} as AnimatedStyles<T>

    Object.keys(processedSteps[step]).forEach((key: keyof T) => {
      /* eslint-disable react-hooks/rules-of-hooks, @typescript-eslint/ban-ts-ignore */
      // @ts-ignore
      springs[key] = useSpring({
        from: processedSteps[step > 0 ? step - 1 : 0][key],
        to: processedSteps[step][key],
      })
      /* eslint-enable react-hooks/rules-of-hooks, @typescript-eslint/ban-ts-ignore */
    })

    return springs
  }
}

type PartialL2<T> = {
  [P in keyof T]: Partial<T[P]>
}

type Partial2<T> = {
  [P in keyof T]?: Partial<T[P]>
}

type Steps<T extends Record<string, {}>> = Array<Partial2<T>> & { 0: T }

function AnimatedPart<T extends Record<string, {}>>({
  step,
  steps,
  children,
}: {
  step: number
  steps: Steps<T>
  children: (
    steps: AnimatedStyles<T>,
    step: number
  ) => React.ReactElement<any, any> | null
}) {
  if (step === NO_FRAGMENTS) {
    step = 0
  } else if (step === ALL_FRAGMENTS) {
    step = steps.length
  } else {
    step = step + 1
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const getStyle = useAnimatedSteps(steps)
  const styles = getStyle(step)

  return children(styles, step)
}

export function AnimatedSlide<T extends Record<string, {}>>({
  children,
  steps,
  slide: BaseSlide,
  ...rest
}: {
  steps: Steps<T>
  children: (
    steps: AnimatedStyles<T>,
    step: number
  ) => React.ReactElement<any, any> | null
  slide: React.ComponentType<SlideProps>
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memedSteps = useMemo(() => steps, [])

  return (
    <BaseSlide layout={PlainLayout} {...rest}>
      <ControlledFragment numberOfSteps={steps.length - 1}>
        {(index) => (
          <AnimatedPart step={index} steps={memedSteps} children={children} />
        )}
      </ControlledFragment>
    </BaseSlide>
  )
}
