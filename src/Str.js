export const capitalize = (x) => x.charAt(0).toUpperCase() + x.slice(1);

export const dasherize = (x) =>
  x.replace(/[A-Z]/g, (m) => `-${ m.toLowerCase() }`);
