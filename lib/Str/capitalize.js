//+ capitalize :: String -> string
export default (x: string): string => x.charAt(0).toUpperCase() + x.slice(1);
