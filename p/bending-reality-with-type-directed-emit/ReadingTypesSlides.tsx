import { CodeSurferSlide } from './CodeSurferSlide'
import { vsDark } from '@code-surfer/themes'
import React from 'react'

export const ReadingTypesSlides = [
  <CodeSurferSlide
    key="reading_types_1"
    steps={[
      {
        code: `const type = checker.
  getTypeFromTypeNode(node.typeArguments[0]);`,
        lang: 'ts'
      }
    ]}
    theme={vsDark}
  />,
  <CodeSurferSlide
    key="reading_types_2"
    steps={[
      {
        lang: 'ts',
        code: `export const typeVisitor = (checker: TypeChecker, type: Type): TypeModel => {
  if (type.flags & TypeFlags.Any) {
    return {
      kind: "any"
    };
  }

  if (type.flags & TypeFlags.Unknown) {
    return {
      kind: "unknown"
    };
  }

  if (type.isStringLiteral()) {
    return {
      kind: "stringLiteral",
      value: type.value
    };
  }
  
  // ...
}`
      }
    ]}
    theme={vsDark}
  />,
  <CodeSurferSlide
    key="reading_types_3"
    steps={[
      {
        code: `export interface TypeModelAny {
  readonly kind: "any";
}

export interface TypeModelUnknown {
  readonly kind: "unknown";
}

export interface TypeModelString {
  readonly kind: "string";
}

// ...

export type TypeModel =
  | TypeModelAny
  | TypeModelUnknown
  | TypeModelString
  | // ...`,
        lang: 'ts'
      }
    ]}
    theme={vsDark}
  />

]
