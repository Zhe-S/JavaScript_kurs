"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  for (const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }


  const cardHeaders = document.querySelectorAll(".card-header")

  for (const cardHeader of cardHeaders) {
    const cardBody = cardHeader.nextElementSibling
    // const iconElement = cardHeader.children[0].children[0]
    const iconElement = cardHeader.querySelector(".toggle-icon") // 没有选择对的节点 只选了1个

    cardHeader.style.cursor = "pointer"
    cardBody.classList.add("d-none")
    iconElement.classList.remove("fa-angle-double-down")
    iconElement.classList.add("fa-angle-double-right")

    cardHeader.addEventListener("click", () => {
      // console.log("iconElement.children", iconElement)
      // console.log("cardhead wurde geklickt!", cardBody)
      cardBody.classList.toggle("d-none")    // classList.toggle("d-none")
      // iconElements.classList = "fa fa-angle-double-right"
      // console.log(iconElement)


      if (cardBody.classList.contains("d-none")) {
        iconElement.classList.remove("fa-angle-double-down")
        iconElement.classList.add("fa-angle-double-right")
      } else {
        iconElement.classList.remove("fa-angle-double-right")
        iconElement.classList.add("fa-angle-double-down")
      }


    }
    )

  }

}) 


//  重点是找到节点 
//  把循环作在每一个里面，不要单独的只是一个元素，这个就需要把 cardHeader 和他相关的联系起来 
//  不能是 docunmment。queselector （） 而是 cardheader。querselector（） 
//  因为cardHeader已经在循环里面了 ，所以使用它，让后连到其他的节点上 