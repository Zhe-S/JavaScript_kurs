"use strict"

// https://github.com/r-spacex/SpaceX-API
// rockets.json: https://api.spacexdata.com/v3/rockets

const fs = require("fs")
const rocketsAsString = fs.readFileSync("spacex/rockets.json", {encoding: "utf-8"})

const rockets = JSON.parse(rocketsAsString)
console.log("rockets:", rockets)

console.log(rockets[3].rocket_name)
console.log(rockets[3].height.feet)


for(const rocket of rockets){

  console.log("rocket.id", rockets.length)
}