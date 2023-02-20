'use strict';

const KEY_ENTER = 13

/*
<li>
	<div class="view">
		<input class="toggle" type="checkbox">
		<label>Buy a unicorn</label>
		<button class="destroy"></button>
	</div>
</li>
	*/

document.addEventListener("DOMContentLoaded", () => {
	const newTodoElement = document.querySelector(".new-todo")
	const todoListElement = document.querySelector(".todo-list")
	const footerElement = document.querySelector(".footer")
	const todoCountElement = document.querySelector(".todo-count strong")


	const refreshFooter = () => {
		if(todoListElement.children.length === 0){
			footerElement.style.display = "none"
		} else {
			footerElement.style.display = ""
		}

/* 		let count = 0 
		for(const liElementItem of todoListElement.children){
			if(!liElementItem.classList.contains("completed")){
				count++
			}
		} */

		let count = todoListElement.querySelectorAll("li:not(.completed)").length
		todoCountElement.innerText = count


	}
	refreshFooter()

	const addCallbacksForLi = (liElement)=> {
		
		const checkboxElement = liElement.querySelector(".toggle")
		const destroyButtonElement = liElement.querySelector(".destroy")

		checkboxElement.addEventListener("change", ()=>{
			if(checkboxElement.checked){
				liElement.classList.add("completed")
			} else {
				liElement.classList.remove("completed")
			}

			refreshFooter()
		})
		  
		
		destroyButtonElement.addEventListener("click", ()=>{
			liElement.remove()
			refreshFooter()
		})
	}

	newTodoElement.addEventListener("keypress", (event) => {
		if (event.which === KEY_ENTER && newTodoElement.value !== "") {

			const newButtonElement = document.createElement("button")
			newButtonElement.classList.add("destroy")
			
			const newLabelElement = document.createElement("label")
			newLabelElement.appendChild(
				document.createTextNode(newTodoElement.value)   // ? 
			)

			const newInputCheckbox = document.createElement("input")
			newInputCheckbox.type = "checkbox"
			newInputCheckbox.classList.add("toggle")

			// newInputCheckbox.addEventListener("change",)



			const newDivElement = document.createElement("div")
			newDivElement.classList.add("view")
			newDivElement.appendChild(newInputCheckbox)
			newDivElement.appendChild(newLabelElement)
			newDivElement.appendChild(newButtonElement)

			const newLiElement = document.createElement("li")
			newLiElement.appendChild(newDivElement)
			
			addCallbacksForLi(newLiElement)

			todoListElement.prepend(newLiElement)  // prepend()方法 把元素添加到开头的位置  它和 appendchild（）添加到末尾，两者相反 
			
			newTodoElement.value = ""

			refreshFooter()
		}
	})
});
