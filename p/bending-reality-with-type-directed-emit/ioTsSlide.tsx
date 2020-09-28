import { CodeSurferSlide } from './CodeSurferSlide'
import React from 'react'
import { vsDark } from '@code-surfer/themes'

export const IoTsSlide = (
  <CodeSurferSlide
    theme={vsDark}
    steps={[
      {
        code: `import * as t from 'io-ts'

const Task = new t.Type({
  title: t.string,
  id: t.number,
})

const getTask = () => {
  const json = get('/task')
  return Task.decode(json)
}
  
const taskEither = getTask()`,
        lang: 'ts',
      },
      {
        code: `import * as t from 'io-ts'

const Task = new t.Type({
  title: t.string,
  id: t.number,
  authorId: t.number,
})

const getTask = () => {
  const json = get('/task')
  return Task.decode(json)
}
  
const taskEither = getTask()`,
      },
      {
        code: `import * as t from 'io-ts'

const Task = new t.Type({
  title: t.string,
  id: t.number,
  authorId: t.number,
})

type Task = t.TypeOf<typeof Task>

const getTask = () => {
  const json = get('/task')
  return Task.decode(json)
}
  
const taskEither = getTask()`,
      },
    ]}
  />
)
