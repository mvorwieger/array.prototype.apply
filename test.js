require("index.js")

test("Array.prototype.flat() ::", () => {
    expect([1, [2], 3].flat()).toBe([1, 2, 3])
})

test("Array.prototype.flatMap() ::", () => {
    expect([1, 2, 3]).flatMap(a => [a + 1])).toBe([2, 3, 4])
})

test("Array.prototype.apply() ::", () => {
    expect([1, 2, 3]).apply([
        a => a + 1,
        a => a + 2
    ])).toBe([2, 3, 4, 3, 4, 5, 4, 5, 6])
})
