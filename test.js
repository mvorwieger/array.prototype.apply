const {apply, flatMap, flat} = require("./index.js")

test("Array.prototype.flat() ::", () => {
    expect(flat([1, [2], 3])).toEqual([1, 2, 3])
})

test("Array.prototype.flatMap() ::", () => {
    expect(flatMap(a => a + 1, [1, 2, 3])).toEqual([2, 3, 4])
})

test("Array.prototype.apply() ::", () => {
    expect(
        apply(
            [
                a => a + 1,
                a => a + 2,
                a => a + 3
            ], 
            [1, 2, 3]
        )
    ).toEqual([2, 3, 4, 3, 4, 5, 4, 5, 6])
})
