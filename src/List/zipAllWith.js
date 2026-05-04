import curry from '../Func/curry.js'

export default curry((fn, xs, ys) => {
  const length = Math.max(xs.length, ys.length)

  return Array.from({ length }, (_, index) => fn(xs[index], ys[index]))
})
