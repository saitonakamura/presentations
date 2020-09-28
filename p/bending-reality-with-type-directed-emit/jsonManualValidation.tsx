import React from 'react'
import { CodeSurferSlide } from './CodeSurferSlide'
import { vsDark } from '@code-surfer/themes'

export const JsonManualValidationSlide = (
  <CodeSurferSlide
    theme={vsDark}
    steps={[
      {
        code: `'{ "title": "Buy eggs", "id": 1 }'`,
        lang: 'js',
      },
      {
        code: `const json = JSON.parse('{ "title": "Buy eggs", "id": 1 }')`,
      },
      {
        code: `let json
try {
  json = JSON.parse('{ "title": "Buy eggs", "id": 1 }')
} catch {
  // handle error
}`,
      },
      {
        code: `let json
try {
  json = JSON.parse('{ "title": "Buy eggs", "id": 1 }')
  if (typeof json !== 'object') throw Error()
} catch {
  // handle error
}`,
      },
      {
        code: `let json
try {
  json = JSON.parse('{ "title": "Buy eggs", "id": 1 }')
  if (typeof json !== 'object') throw Error()
  if (!json) throw Error()
} catch {
  // handle error
}`,
      },
      {
        code: `let json
try {
  json = JSON.parse('{ "title": "Buy eggs", "id": 1 }')
  if (typeof json !== 'object') throw Error()
  if (!json) throw Error()
  if (!('title' in json)) throw Error()
} catch {
  // handle error
}`,
      },
      {
        code: `let json
try {
  json = JSON.parse('{ "title": "Buy eggs", "id": 1 }')
  if (typeof json !== 'object') throw Error()
  if (!json) throw Error()
  if (!('title' in json)
    || typeof json.title === 'string') throw Error()
} catch {
  // handle error
}`,
      },
      {
        code: `let json
try {
  json = JSON.parse('{ "title": "Buy eggs", "id": 1 }')
  if (typeof json !== 'object') throw Error()
  if (!json) throw Error()
  if (!('title' in json)
    || typeof json.title === 'string'
    || !json.title) throw Error()
} catch {
  // handle error
}`,
      },
      {
        code: `let json
try {
  json = JSON.parse('{ "title": "Buy eggs", "id": 1 }')
  if (typeof json !== 'object') throw Error()
  if (!json) throw Error()
  if (!('title' in json)
    || typeof json.title === 'string'
    || !json.title) throw Error()
  if (!('id' in json)
    || typeof json.title === 'number'
    || json.id <= 0) throw Error()
} catch {
  // handle error
}`,
      },
    ]}
  />
)
