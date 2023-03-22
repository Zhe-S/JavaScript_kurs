'use strict';

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded",() => {
    const clearElement = document.querySelector(".clear-completed")
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

        // footer的统计功能 
        let todoCounter = 0
        for (const todoListItem of todoListElement.children){
            if(!todoListItem.classList.contains("completed")){
                todoCounter++
            }
        }
        todoCountElement.innerText = todoCounter      
    }
    refreshFooter()

    const addCallbacksForLi = (liElement) => {
        const checkboxElement = liElement.querySelector(".toggle")
        const destroyButtonElement = liElement.querySelector(".destroy")

        checkboxElement.addEventListener("change", ()=>{
            if(checkboxElement.checked) {
                liElement.classList.add("completed")
            }else {
                liElement.classList.remove("completed")
            }

            refreshFooter()
        })

        destroyButtonElement.addEventListener("click", ()=>{
            liElement.remove()

            refreshFooter()
        })

    }
        // 左边👈🏻 41  完成  
        // 
        // 基本输入 
        // x 功能 
        // checkbox 功能 
        // 
        // ! 全部删除需要加上
        // ! 输入 input 有重复的不能进入 
        // ! 上面有一个无用的 input 框  把他处理掉
        // 空格不能加入 










    clearElement.addEventListener("click", ()=>{
        console.log("button funktioniert")
        console.log("newTodoElement",newTodoElement)
        console.log("todolistEle",todoListElement.children )
        console.log(todoListElement.children.length)

        // todoListElement.removeChild()

        refreshFooter()
    })

    newTodoElement.addEventListener("keypress", (event)=>{
        // console.log("newTodoElement werden hinzufügen",event.which)
        if(event.which === KEY_ENTER && newTodoElement.value !== ""){
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

            addCallbacksForLi(newLiElement)   // 把上面的回调函数调用 当加入新的 Item 时候 调用这个函数 

            todoListElement.prepend(newLiElement)   // 放在前面 appendchild 加在后面 

            newTodoElement.value = ""
            refreshFooter()
        }
    })

})