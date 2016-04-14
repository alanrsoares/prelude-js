//+ compose :: (b -> c) -> (a -> b) -> a -> c
export default (...fs) => (...args) =>
  (([g, ...gs]) => 
    gs.reduce((acc, h) => h(acc), g(...args)))(fs.reverse());
