import { CodeSurferSlide } from './CodeSurferSlide'
import { vsDark } from '@code-surfer/themes'
import React from 'react'

export const EmittingValidatorSlides = [
  <CodeSurferSlide
    key="emitting_validator_1"
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
]
