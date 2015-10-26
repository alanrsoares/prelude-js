import curry from '../Func/curry';

//+ padLeft :: String -> a -> String
export default curry((p = '', s) => p.substring(0, p.length - (s || '').toString().length) + (s || ''));
