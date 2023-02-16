const courses = [
    ["Christian", "Annika"],                                // 0
    ["Julian", "Lisa", "Tobias"],                           // 1
    ["Julian", "Lisa", "Tobias","Lisa", "Tobias"],          // 2
    ["sun", "s"],                                                 // 3
    ["Julian", "Lisa", "Tobias"], 
    ["Julian"], 

  ]
  function getSmallestCourse() {
  
    let indexLeastStudents = -1;  // 位置
    let smallestCourse = -1       // Anzahl 
    for (let i in courses) {

      let course = courses[i]   
      console.log("course", course)
  
      if(indexLeastStudents === -1  || course.length < smallestCourse) {  
        // true                      2 < -1

        indexLeastStudents = i                //  3
        smallestCourse = course.length        //  1 
      }
    }
    return indexLeastStudents   
  }
  console.log("getSmallestCourse", getSmallestCourse())