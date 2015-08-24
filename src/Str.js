//:: String → String
export const capitalize = (x) => x.charAt(0).toUpperCase() + x.slice(1);

//:: String → String
export const dasherize = (x) =>
  x.replace(/[A-Z]/g, (m) => `-${ m.toLowerCase() }`);

//:: String → String
export const camelize = (x) =>
  x.replace(/-(\w)/g, (m) => m[1].toUpperCase());
