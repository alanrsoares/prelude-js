//+ typeOf :: Any -> String
export default (x) =>
  ({}).toString
      .call(x)
      .match(/\[object (\w+)\]/)[1];
