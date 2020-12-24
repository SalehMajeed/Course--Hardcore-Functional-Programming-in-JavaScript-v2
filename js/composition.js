var exclaim = str => str + '!';
var to_upper = str => str.toUpperCase();
var compose = (f, g) => x =>f(g(x))
var shout = compose(exclaim, to_upper)
console.log(shout('tears'))