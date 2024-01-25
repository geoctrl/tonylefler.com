export const css = (...args: (string | undefined)[]): string => {
  return args.filter(Boolean).join(" ");
};

export const always = (...args: string[]): string => {
  return args.filter(Boolean).join(" ");
};

export const maybe = (enabled: boolean, ...className: string[]): string => {
  return enabled ? className.join(" ") : "";
};

export const toggle = (
  className1: string,
  className2: string,
  enabled: boolean,
): string => {
  return enabled ? className1 : className2;
};

export { css as c, always as a, maybe as m, toggle as t };
