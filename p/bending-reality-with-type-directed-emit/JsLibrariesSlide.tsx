import { CodeSurferSlide } from './CodeSurferSlide'
import React from 'react'
import { vsDark } from '@code-surfer/themes'

export const JsLibrariesSlide = (
  <CodeSurferSlide
    theme={vsDark}
    steps={[
      {
        code: `type Task = { title: string; id: number }
        
const getTask = () => get('/task')

const task = getTask()
console.log(task.title)`,
        lang: 'ts',
      },
      {
        code: `type Task = { title: string; id: number; authorId: number }
        
const getTask = () => get('/task')

const task = getTask()
console.log(task.authorId)`,
      },
      {
        code: `import * as superstruct from 'superstruct'
        
type Task = { title: string; id: number }

const Task = superstruct.object({
  title: superstruct.string(),
  id: superstruct.number(),
})

const getTask = () => {
  const t = get('/task')
  superstruct.assert(t)
}

const task = getTask()
console.log(task.title)`,
      },
      {
        code: `import * as superstruct from 'superstruct'
        
type Task = { title: string; id: number; authorId: number }

const Task = superstruct.object({
  title: superstruct.string(),
  id: superstruct.number(),
  authorId: superstruct.number(),
})

const getTask = () => {
  const t = get('/task')
  superstruct.assert(t)
}

const task = getTask()
console.log(task.authorId)`,
      },
    ]}
  />
)
