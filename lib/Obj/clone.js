import compose from '../Func/compose';

//+ clone :: a -> a'
export default compose(JSON.parse, JSON.stringify);
