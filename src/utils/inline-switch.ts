export function inlineSwitch<T, R>(expression: T, fallback?: R) {
  return (...args: [T, R][]) => {
    let result: R | undefined;
    args.find(([test, value]) => {
      if (expression === test) {
        result = value;
        return true;
      }
    });

    return result !== undefined ? result : fallback;
  };
}

export function switchMap<Expression extends string | number | symbol, Value>(
  expression: Expression,
  map: Partial<Record<Expression, Value>>,
  fallback?: Value,
): Value | undefined {
  if (map[expression]) {
    return map[expression];
  }
  return fallback;
}
