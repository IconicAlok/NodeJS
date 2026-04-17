// You should already know:
// HTML CSS and JavaScript
// Possiblly experience with other libraries and frameworks

// How node JS differ from Vanilla Js
// 1) Nodes run on a server - not in browser (backend not frontend)
// 2) Console in the terminal window
console.log('Hello world')
// 3) Global object insted of window object
//console.log(global);
// 4) Has common core module that we will explore
// 5) Common Js module insted of ES6 modules
// 6) Missing some APIs like fetch

const os = require('os')
const path = require('path')
const { add, subtract, multiply, divide } = require('./math')

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))
/* 
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
 */