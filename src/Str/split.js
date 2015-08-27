import curry from '../Func/curry';

//+ split :: String -> String -> String[]
export default curry((x, y) => x.split(y));
