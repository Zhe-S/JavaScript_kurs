"use strict"

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    continue
  } // 1234568  

  if (i === 9) {
    break
  }

  console.log("i:", i)
}



