import curry from '../Func/curry';

//+ split :: String -> String -> String[]
export default curry((sep, str) => str.split(sep));
