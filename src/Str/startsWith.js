import curry from '../Func/curry';

//+ startsWith :: String -> String -> Bool
export default curry((search, target) => target && target.indexOf(search) === 0);
