//+ fix :: Function -> Function
export default (f) =>
  ((g) => (...args) => f(g(g)).apply(null, args))(
    (g) => (...args) => f(g(g)).apply(null, args)
  );
