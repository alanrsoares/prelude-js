export default function get<T extends Record<PropertyKey, unknown>, K extends keyof T>(
  obj: T,
  key: K,
): T[K]
