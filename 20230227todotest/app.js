'use strict';

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded",() => {
    const clearElement = document.querySelector(".clear-completed")
    const newTodoElement = document.querySelector(".new-todo")
    const todoListElement = document.querySelector(".todo-list")

    clearElement.addEventListener("click", ()=>{
        console.log("button funktioniert")
        console.log("newTodoElement",newTodoElement)
    })

    newTodoElement.addEventListener("keypress", (event)=>{
        // console.log("newTodoElement werden hinzufügen",event.which)
        if(event.which === KEY_ENTER){
            console.log("KEY_ENTER funktioniert")
            const newButtonElement = document.createElement("button")
            newButtonElement.classList.add("destroy")

            const newLabelElement = document.createElement("label")
            newLabelElement.appendChild(
                document.createTextNode(newTodoElement.value)
            )

			const newInputCheckbox = document.createElement("input")
			newInputCheckbox.type = "checkbox"
			newInputCheckbox.classList.add("toggle")
           

            const newDivElement = document.createElement("div")
            newDivElement.classList.add("view")
            newDivElement.appendChild(newInputCheckbox)
            newDivElement.appendChild(newLabelElement)
            newDivElement.appendChild(newButtonElement)

            const newLiElement = document.createElement("li")
            newLiElement.appendChild(newDivElement)

            todoListElement.prepend(newLiElement)
        }
    })

})