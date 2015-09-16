//+ dasherize :: String → String
export default (x) =>
  x.replace(/[A-Z]/g, (m) => `-${ m.toLowerCase() }`);
