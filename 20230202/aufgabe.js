"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("spacex/launches.json", {encoding: "utf-8"})
)

console.log("typeof launches", typeof launches)  // obj
console.log("Anzahl launches:", launches.length)

// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
// 
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 
//
console.log("---AUFGABE1---")

let counter2018 = 0
for(const launch of launches){
  if(launch.launch_year === "2018"){
    counter2018 = counter2018+1
  }
}
console.log("Wie viele Raketen hat SpaceX im Jahr 2018 gestartet? ",counter2018)

let counter2018Success = 0
for(const launch of launches){
  if(launch.launch_year === "2018" && launch.launch_success === true){
    counter2018Success = counter2018Success + 1
  }
}
console.log("Wie viele davon erfolgreich ",counter2018Success)

const failcounter2018 = counter2018 - counter2018Success
console.log("1b) Wie viele davon nicht erfolgreich? ",failcounter2018)


// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payloadå, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

console.log("---AUFGABE2---")
let Nutzlast = 0

for(const launch of launches){
  if(launch.launch_year === "2018" && launch.rocket.second_stage.payloads.payload_mass_kg !== null){
    console.log(launch.rocket.second_stage.payloads.payload_mass_kg)
  }
}
console.log("Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall gestartet? ",Nutzlast)