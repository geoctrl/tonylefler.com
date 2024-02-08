export function inlineSwitch<
  Expression extends string | number | symbol,
  Value,
>(
  expression: Expression,
  map: Partial<Record<Expression, Value>>,
  fallback?: Value,
): Value | undefined {
  if (map[expression]) {
    return map[expression];
  }
  return fallback;
}
