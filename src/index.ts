type AddPrefix<P extends string, T extends string> = T extends '' ? '' : `${P}${T}`;

type SlashSeparatedNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${AddPrefix<'/', SlashSeparatedNestedKeys<T[K]>>}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

export type ApiEndpoints<T> = `/${SlashSeparatedNestedKeys<T>}`;
