import chars from './chars.js'

/**
 * Reverses the characters of a string.
 *
 * @example
 * ```ts
 * reverse('abc') //=> 'cba'
 * ```
 */
const reverse = (value: string): string => chars(value).reverse().join('')

export default reverse
