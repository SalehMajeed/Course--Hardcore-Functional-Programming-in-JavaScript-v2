var add = (x, y) => x + y

var to_pair = f =>
    ([x, y]) => f(x, y)

var result = to_pair(add)([1,2])

console.log(result)

var add = (x, y) => x + y

var curry = f => x => y => f(x, y)
var curried_add = curry(add)
var increment = curried_add(1)
var result = increment(1)

console.log(result)

var modulo = curry((x,y) => x % y)
var is_odd = modulo(1)
var result = is_odd(2)

console.log(result)

var modulo = curry((x, y) => x % y)
var is_odd = modulo(2)
var filter = curry((f, array) => array.filter((f)))
var get_odd = filter(is_odd)
var result = get_odd([1, 2, 3, 4, 5])

console.log(result)

// var replace = curry((regex, replacement, str) => str.replace(regex, replacement))
// var replace_vowels = replace(/aeiou/gi, '!')
// var result = replace_vowels('hello')
// console.log(result) // require ramda