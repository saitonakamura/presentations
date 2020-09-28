import { CodeSurferSlide } from './CodeSurferSlide'
import { vsDark } from '@code-surfer/themes'
import React from 'react'

export const TypeDirectedEmitCodeSlides = [
  <CodeSurferSlide
    key="type_directed_emit_1"
    steps={[
      {
        code: `type Task = { title: string; id: number }

const getTask = () => fetch('/task')
  .then(r => r.json())`,
        lang: 'ts',
      },
      {
        code: `import { validate } from 'superstruct-ts-transfomer'

type Task = { title: string; id: number }

const getTask = () => fetch('/task')
  .then(r => r.json())`,
      },
      {
        code: `import { validate } from 'superstruct-ts-transfomer'

type Task = { title: string; id: number }

const getTask = () => fetch('/task')
  .then(r => r.json())
  .then(json => validate<Task>(json))`,
      },
      {
        code: `import * as superstruct from 'superstruct'

type Task = { title: string; id: number }

const getTask = () => fetch('/task')
  .then(r => r.json())
  .then(json => validate<Task>(json))`,
      },
      {
        code: `import * as superstruct from 'superstruct'

type Task = { title: string; id: number }

const getTask = () => fetch('/task')
  .then(r => r.json())
  .then(json => validate_Task(json))`,
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
    ]}
    theme={vsDark}
  />,
]
