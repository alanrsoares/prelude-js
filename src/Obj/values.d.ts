declare const values: <T extends object>(obj: T) => Array<T[keyof T]>
export default values
