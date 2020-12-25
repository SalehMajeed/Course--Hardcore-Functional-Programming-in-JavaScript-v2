const box = x => ({
    map: f => box(f(x)),
    fold: f => f(x),
    to_string: `box(${x})`
})

var next_char_for_numbering = str => {
         box(str)
        .map(x => x.trim())
        .map(trimmed => parseInt(trimmed, 10))
        .map(number => new Number(number + 1))
        .fold(String.fromCharCode)
}

var result = next_char_for_numbering('     87')
console.log(result)
