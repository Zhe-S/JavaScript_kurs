"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")
  const ulElement = document.querySelector("#students-list")

  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()

    if(nameInput.value === ""){
      return
    }
    const liElement = document.createElement("li")
    liElement.classList.add("list-group-item")

    const strongElement = document.createElement("strong")
    strongElement.appendChild(document.createTextNode(nameInput.value))
    
    liElement.appendChild(strongElement)
    ulElement.appendChild(liElement)

    console.log(nameInput.value)
    nameInput.value = ""
  })

  nameInput.addEventListener("change", (event) => {
    console.log("change:", nameInput.value)
  })

  nameInput.addEventListener("keyup", (event) => {
    console.log("keyup:", nameInput.value)
  })
}) 