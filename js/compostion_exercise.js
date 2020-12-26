// Setup
//==============
const _ = R;

// Example Data
const CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

const isLastInStock = _.compose(_.prop('in_stock'),_.last)

console.log(isLastInStock(CARS), false)



// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

const nameOfFirstCar = _.compose(_.prop('name'),_.head)

console.log(nameOfFirstCar(CARS), "Ferrari FF")

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

const _average = (xs) => { return _.reduce(_.add, 0, xs) / xs.length; }; // <- leave be

const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));

console.log(averageDollarValue(CARS), 790700);


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

const _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

const sanitizeNames = _.map(_.compose(_.toLower,_underscore,_.prop('name')))

console.log(sanitizeNames(CARS), ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']);



// Bonus 2:
// ============
// Refactor to pointfree.
let append = _.flip(_.concat)
const fastestCar = _.compose(
    append(' is the fastest'),
    _.prop('name'),
    _.last,
    _.sortBy(_.prop('horsepower'))
)
    
console.log(fastestCar(CARS), 'Aston Martin One-77 is the fastest');

    // Bonus 1:
    // ============
    // Refactor availablePrices with compose.
    
    const { formatMoney } = accounting;
    
    const format_dollar_value = _.compose(formatMoney,_.prop('dollar_value'))
    
    const availablePrices = _.compose(_.join(', '),_.map(format_dollar_value),_.filter(_.prop('in_stock')))
    
    console.log(availablePrices(CARS), '$700,000.00, $1,850,000.00');