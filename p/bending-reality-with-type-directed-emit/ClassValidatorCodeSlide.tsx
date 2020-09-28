import { CodeSurferSlide } from './CodeSurferSlide'
import React from 'react'
import { vsDark } from '@code-surfer/themes'

export const ClassValidatorCodeSlide = (
  <CodeSurferSlide
    theme={vsDark}
    steps={[
      {
        code: `import { validate, IsString, IsInt } from 'class-validator'

class Task {
  constructor(title: string, id: number) {
    this.title = title
    this.id = id
  }
  
  @IsString()
  title: string
  
  @IsInt()
  id: number
}

const getTask = () => {
  const json = get('/task')
  const task = new Task(json.title, json.id)
  return validate(task)
}`,
        lang: 'ts',
      },
      {
        code: `import { validate, IsString, IsInt } from 'class-validator'

class Task {
  constructor(title: string, id: number, authorId: number) {
    this.title = title
    this.id = id
    this.authorId = authorId
  }
  
  @IsString()
  title: string
  
  @IsInt()
  id: number
  
  @IsInt()
  authorId: number
}

const getTask = () => {
  const json = get('/task')
  const task = new Task(json.title, json.id, json.authorId)
  return validate(task)
}`,
      },
    ]}
  />
)
