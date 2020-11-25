import { CodeSurferSlide } from './CodeSurferSlide'
import { vsDark } from '@code-surfer/themes'
import React from 'react'

export const ReadingTypesSlides = [
  <CodeSurferSlide
    key='reading_types_1'
    steps={[
      {
        code: `import { validate } from 'superstruct-transfomer'
        
validate<Task>(json)`,
        lang: 'ts',
      },
      {
        code: `import { validate } from 'superstruct-transfomer'

validate<Task>(json)

// =================================== //

if (ts.isCallExpression(node)
) {
  // Do stuff
}`,
        lang: 'ts',
      },
      {
        code: `import { validate } from 'superstruct-transfomer'

validate<Task>(json)

// =================================== //

if (ts.isCallExpression(node)
  && typeChecker.getSymbolAtLocation(node.expression)
) {
  // Do stuff
}`,
        lang: 'ts',
      },
      {
        code: `import { validate } from 'superstruct-transfomer'

validate<Task>(json)

// =================================== //

if (ts.isCallExpression(node)
  && typeChecker.getSymbolAtLocation(node.expression)
    ?.declarations.some(decl =>
      (ts.isNamedImport(decl) || ts.isNamespaceImport(decl)) &&
      decl.parent.parent.parent.moduleSpecifier === 'superstruct-ts-transfomer'
    )
) {
  // Do stuff
}`,
        lang: 'ts',
      },
      {
        code: `import { validate } from 'superstruct-transfomer'

validate<Task>(json)

// =================================== //

if (ts.isCallExpression(node)
  && typeChecker.getSymbolAtLocation(node.expression)
    ?.declarations.some(decl =>
      (ts.isNamedImport(decl) || ts.isNamespaceImport(decl)) &&
      decl.parent.parent.parent.moduleSpecifier === 'superstruct-ts-transfomer'
    )
    && node.typeArguments?.length > 0
) {
  // Do stuff
}`,
        lang: 'ts',
      },
      {
        code: `import { validate } from 'superstruct-transfomer'

validate<Task>(json)

// =================================== //

if (ts.isCallExpression(node)
  && typeChecker.getSymbolAtLocation(node.expression)
    ?.declarations.some(decl =>
      (ts.isNamedImport(decl) || ts.isNamespaceImport(decl)) &&
      decl.parent.parent.parent.moduleSpecifier === 'superstruct-ts-transfomer'
    )
    && node.typeArguments?.length > 0
    && node.arguments.length > 0
) {
  // Do stuff
}`,
        lang: 'ts',
      },
      {
        code: `import { validate } from 'superstruct-transfomer'

validate<Task>(json)

// =================================== //

if (ts.isCallExpression(node)
  && typeChecker.getSymbolAtLocation(node.expression)
    ?.declarations.some(decl =>
      (ts.isNamedImport(decl) || ts.isNamespaceImport(decl)) &&
      decl.parent.parent.parent.moduleSpecifier === 'superstruct-ts-transfomer'
    )
    && node.typeArguments?.length > 0
    && node.arguments.length > 0
) {
  // https://github.com/ts-type-makeup/ts-type-visitor
  const typeModel = typeVisitor(typeChecker, node.typeArguments[0])
  // Do stuff
}`,
        lang: 'ts',
      },
    ]}
    theme={vsDark}
  />,
  <CodeSurferSlide
    key='reading_types_2'
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
}`,
      },
    ]}
    theme={vsDark}
  />,
  <CodeSurferSlide
    key='reading_types_3'
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
        lang: 'ts',
      },
    ]}
    theme={vsDark}
  />,
]
