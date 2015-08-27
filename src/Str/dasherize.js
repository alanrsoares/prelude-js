//+ dasherize :: String → String
export default (x: string): string =>
  x.replace(/[A-Z]/g, (m) => `-${ m.toLowerCase() }`);
