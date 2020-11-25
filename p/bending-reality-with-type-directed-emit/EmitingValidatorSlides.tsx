import { CodeSurferSlide } from './CodeSurferSlide'
import { vsDark } from '@code-surfer/themes'
import React from 'react'
import { IframeFullSlide } from './IframeFullSlide'

export const EmittingValidatorSlides = [
  <CodeSurferSlide
    key='emitting_validator_1'
    steps={[
      {
        code: `const createSuperStructValidatorForm = (
  typeModel: TypeModel,
  optional: boolean,
  strictNullChecks: boolean
): ts.Expression => {
  switch (typeModel.kind) {
    case "string":
      return wrapOptionalOrNonStrictNullCheck({
        exp: createSuperstructLiteral({ type: "string" }),
        optional,
        strictNullChecks
      });

    case "number":
      return wrapOptionalOrNonStrictNullCheck({
        exp: createSuperstructLiteral({ type: "number" }),
        optional,
        strictNullChecks
      });
      
    // ...
  }
}`,
        lang: 'ts',
      },
    ]}
    theme={vsDark}
  />,
  <IframeFullSlide url='https://ts-ast-viewer.com/#code/JYWwDg9gTgLgBAKjgQwM51QVzAUyqmKTAY3gDMoIQ4ByLXfQkmGgKFeIgDsC4BzHDAAqaANZwAvHAAUASkkA+OGUHEAFtJoB6GGJqzWcOADoYanF2lRFcKMYBWqbnINHT5y4+42AbsgA2wAAmyDA4APoiqKLSXlyyrnCsZJhcpMDefoEhYZFisU7xcADehhjYeAREpMZoqHgw0vSVTDUQAEb2OKTSpUZGMMAw-jgAXOUMVczGVcBcfHIANGVGwePNjNUwxlyYIO14S2UAvgllUIKYUFxwcazHQA' />,
]
