const path = require('path');

const f = (i) => `Value: ${i}`
const g = (i) => `Example: ${f(i)}`
const h = (i) => `Code edit: ${g(i)}`

console.log(f("my world"))
