import compose from '../Func/compose';

//+ clone :: a -> a'
export default x => JSON.parse(JSON.stringify(x));
