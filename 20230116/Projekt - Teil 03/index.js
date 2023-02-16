"use strict"

document.addEventListener("DOMContentLoaded",()=>{
  const plusButton = document.getElementById("button-increment")
  const resetButton = document.getElementById("button-reset")
  const counterNum = document.getElementById("counter-number")

  plusButton.addEventListener("click",()=>{
    
    const correntCounter = parseInt(counterNum.innerText,10)
    counterNum.innerText = correntCounter +1
    console.log("counterNum.innerText", typeof counterNum.innerText)
  })

  resetButton.addEventListener("click",()=>{
    counterNum.innerText = "0"
    console.log("counterNum.innerText",counterNum.attributes)
  }) 
})  