export type CharMap = Record<string, string>;
export type DecoratorFn = (text: string) => string;

export function transform(text: string, map: CharMap, decorator?: DecoratorFn): string {
  const mapped = [...text].map(char => map[char] ?? char).join('');
  return decorator ? decorator(mapped) : mapped;
}

export function transformAll(text: string, styles: Array<{ map: CharMap; decorator?: DecoratorFn }>): string[] {
  return styles.map(s => transform(text, s.map, s.decorator));
}
