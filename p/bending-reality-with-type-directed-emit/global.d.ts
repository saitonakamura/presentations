declare module '*.png' {
  const url: string
  export = url
}

declare module '*.jpg' {
  const url: string
  export = url
}

declare module '*.svg' {
  const url: string
  export = url
}

type ExtractProps<
  TComponentOrTProps
> = TComponentOrTProps extends React.ComponentType<infer TProps>
  ? TProps
  : TComponentOrTProps
