"use strict"

const data = [
  {firstname: "Max", age: 21, enrolled: true},
  {firstname: "Laura", age: 35, enrolled: false}
]
console.log("typeof data", typeof data);  // object
const dataAsJson = JSON.stringify(data)   // object to JSON

console.log("dataAsJson:", dataAsJson)    // [{"firstname":"Max","age":21,"enrolled":true},{"firstname":"Laura","age":35,"enrolled":false}]
console.log("typeof dataAsJson:", typeof dataAsJson)  // string 

// Antipattern! fs.writeFileSync() ist langsam!
const fs = require("fs")
fs.writeFileSync("ausgeben.json", dataAsJson)      // schreib auf 