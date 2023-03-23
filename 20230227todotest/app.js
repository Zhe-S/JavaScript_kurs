'use strict'; // 'use strict:'

const KEY_ENTER = 13 // const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
    const clearCompletedElement = document.querySelector(".clear-completed") // <button class="clear-completed">清除已完成</button>
    const newTodoElement = document.querySelector(".new-todo") // <input class="new-todo" placeholder="What needs to be done?" autofocus>

    const todoListElement = document.querySelector(".todo-list") // <ul class="todo-list"></ul>
    const footerElement = document.querySelector(".footer")
    const todoCountElement = document.querySelector(".todo-count strong") // <strong>0</strong>

    const refreshFooter = () => {
        if (todoListElement.children.length === 0) {
            footerElement.style.display = "none"
        } else {
            footerElement.style.display = ""
        }

        // footer的统计功能 
        let todoCounter = 0
        for (const todoListItem of todoListElement.children) {
            if (!todoListItem.classList.contains("completed")) {
                todoCounter++
            }
        }
        todoCountElement.innerText = todoCounter

        let completedCounter = todoListElement.querySelectorAll("li.completed").length
        if(completedCounter === 0){
            clearCompletedElement.style.display = "none" // compleded = 0  隐藏了
        } else {
            clearCompletedElement.style.display = "" // compleded = 1 现实出来了 
        }
    }
    refreshFooter()

    const addCallbacksForLi = (liElement) => {
        const checkboxElement = liElement.querySelector(".toggle") // input
        const destroyButtonElement = liElement.querySelector(".destroy")

        /* 
        这部分应该呈现👇的代码样式

        <ul class="todo-list">
            <li class = "completed" >    !! 
                <div class="view">
                    <input type="checkbox" class="toggle"> 
                    <label>5</label>
                    <button class="destroy"></button>
                </div>
            </li>
            <li>
                <div class="view"> 
                    <input type="checkbox" class="toggle">
                    <label>5</label>
                    <button class="destroy"></button>
                </div>
            </li>
        </ul>
        */

        checkboxElement.addEventListener("change", () => {
            if (checkboxElement.checked) {
                liElement.classList.add("completed")
            } else {
                liElement.classList.remove("completed")
            }

            refreshFooter()
        })

        destroyButtonElement.addEventListener("click", () => {
            liElement.remove()

            refreshFooter()
        })
    }
    // 左边👈🏻 41  完成  
    // 
    // 基本输入 
    // x 功能 
    // checkbox 功能 
    // 全部删除需要加上  

    // ! 输入 input 有重复的不能进入 
    // ! 上面有一个无用的 input 框  把他处理掉
    // ! 空格不能加入 

    newTodoElement.addEventListener("keypress", (event) => {
        // console.log("newTodoElement werden hinzufügen",event.which)
        if (event.which === KEY_ENTER && newTodoElement.value !== "") {
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
                
                addCallbacksForLi(newLiElement) // 把上面的回调函数调用 当加入新的 Item 时候 调用这个函数 
                
                todoListElement.prepend(newLiElement) // 放在前面 appendchild 加在后面 
                
                newTodoElement.value = ""
                refreshFooter()
            }
        })

        clearCompletedElement.addEventListener("click", (event) => {
            const completedLiElements = todoListElement.querySelectorAll("li.completed")
            for(const completedLiELement of completedLiElements){
                completedLiELement.remove()
            }
            refreshFooter()
        })     
    })