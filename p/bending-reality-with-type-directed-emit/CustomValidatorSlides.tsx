import { vsDark } from '@code-surfer/themes'
import React from 'react'
import { CodeSurferSlide } from './CodeSurferSlide'
import { IframeFullSlide } from './IframeFullSlide'

export const CustomValidatorSlides = [
  <CodeSurferSlide
    key='custom_validator_1'
    steps={[
      {
        code: `import { validate } from "superstruct-ts-transformer";

type Uuid = string & { readonly __brand: unique symbol };

const uuidRegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const isUuid = (value: unknown): value is Uuid =>
  typeof value === "string" && !!value && uuidRegExp.test(value);

type TestType = Uuid;

export const obj = validate<TestType>(
  JSON.parse('"a4e1b0cf-2a08-4297-83f3-4db896d7e0fb"'),
  [isUuid]
);`,
        lang: 'ts',
      },
    ]}
    theme={vsDark}
  />,
  <IframeFullSlide
    url='https://www.youtube-nocookie.com/embed/m0uRxCCno00?start=1242'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
  />,
]
