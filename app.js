function add(a, b, c = 100) {
    return a + b + c
}
const add2 = (a, b, c = 100) => a + b + c

let x = 5, y = 10, z;
let result = add(x, y, z)
console.log(result);
