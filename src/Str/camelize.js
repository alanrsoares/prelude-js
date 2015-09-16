//+ camelize :: String → String
export default (x) =>
  x.replace(/-(\w)/g, (m) => m[1].toUpperCase());
