const { curry, compose } = R
let to_upper = str => str.toUpperCase()
let exclaim = str => str + '!'
let first = xs => xs[0]
// let compose = (f, g) => x => f(g(x))
let shout = compose(exclaim, to_upper)
console.log(shout('Tears'))

shout = compose(first, exclaim, to_upper)
console.log(shout('Break'))