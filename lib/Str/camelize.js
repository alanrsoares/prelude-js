//+ camelize :: String → String
export default (x: string): string =>
  x.replace(/-(\w)/g, (m) => m[1].toUpperCase());
