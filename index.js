
// Apply is function that takes a value wrapped in a Box e.g [1] and a function wrapped in a box [a => a + 1] and applys those to eachother
// For example:
// [1].apply([a => a + 1])
// returns: [2]
// [1].apply([a => a + 1, a => a + 2])
// returns: [2, 3]
// It gets interesting when there are multiple values inside a Box and multiple Functions inside the other Box
// It now gives you the Cartesian Product
// [1, 2].apply([a => a + 1, a => a + 2])
// returns [2, 3, 3, 4]
//

const flat = (arr) => arr.reduce((acc, val) => acc.concat(val), [])
const flatMap = (fn, arr) => flat(arr.map(fn))
const apply = (fnArr, arr) => flat(arr.map(value => fnArr.map(f => f (value))))

Array.prototype.flat = function() {
    let arrayValues = this;
    return flat(arrayValues) 
}

Array.prototype.flatMap = function(fn) {
    let arrayValues = this;
    return flatMap(fn, arrayValues) 
}

Array.prototype.apply = function(applyArray) {
    let arrayValues = this;
    return apply(applyArray, arrayValues) 
}

module.exports = {flat, flatMap, apply}
