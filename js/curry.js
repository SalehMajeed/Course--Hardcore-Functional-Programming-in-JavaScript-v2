const {curry} = R

let add = (x, y) => x + y
let pair = f => ([x, y]) => f(x, y)
let from_pair = f => (x, y) => f([x, y])
let result = from_pair(pair(add))(1,1)

console.log(result)
console.log('')

// let curry = f => x => y => f(x, y)
let curried_add = curry(add)(2)(3)
console.log(curried_add)
console.log('')

let modulo = curry((x, y) => x % y)(3)(3)
console.log(modulo)
console.log('')

let filter = curry((f, xs) => xs.filter(f))
modulo = curry((x, y) => x % y) // x => y => f(x, y)
let is_odd = modulo(2) // y => f(x, y)
let filters_odds = filter(is_odd) // y => f(x, y)
result = filters_odds([1,2,3,4,5])
console.log(result)
console.log('')

