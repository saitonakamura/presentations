import { CodeSurferSlide } from './CodeSurferSlide'
import { vsDark } from '@code-surfer/themes'
import React from 'react'

export const WrappingValidatorCodeSlides = [
  <CodeSurferSlide
    key="wrapping_validator_1"
    steps={[
      {
        code: `import { validate } from 'superstruct-ts-transfomer'

type Task = { title: string; id: number }

const getTask = () => fetch('/task')
  .then(r => r.json())
  .then(json => validate<Task>(json))`,

        lang: 'ts',
      },
      {
        code: `import * as superstruct from 'superstruct'

type Task = { title: string; id: number }

const getTask = () => fetch('/task')
  .then(r => r.json())
  .then(json => validate_Task(json))
  
function validate_Task(json) {
  superstruct.assert(superstruct.object({
    title: superstruct.string(),
    id: superstruct.number(),
  }))
  return json
}`,
      },
      {
        code: `import { validate } from 'superstruct-ts-transfomer'

type Task = { title: string; id: number }

const validateResponse = <T>(response: Promise) =>
  response.then(r => {
    const json = r.json()
    return validate<T>(json)
  })

const getTask = () => fetch('/task')
  .then(r => validateResponse<Task>(r))`,
      },
      {
        code: `import { validate } from 'superstruct-ts-transfomer'

type Task = { title: string; id: number }

const validateResponse = <T>(response: Promise) =>
  response.then(r => {
    const json = r.json()
    return validate<T>(json)
  })

const getTask = () => fetch('/task')
  .then(r => validateResponse<Task>(r))`,
        focus: '8',
      },
      {
        code: `import { validate } from 'superstruct-ts-transfomer'

type Task = { title: string; id: number }

const validateResponse_Task(response: Promise) =>
  response.then(r => {
    const json = r.json()
    return validate_Task(json)
  })

const getTask = () => fetch('/task')
  .then(r => validateResponse_Task(r))
  
function validate_Task(json) {
  superstruct.assert(superstruct.object({
    title: superstruct.string(),
    id: superstruct.number(),
  }))
  return json
}`,
      },
    ]}
    theme={vsDark}
  />,
]
