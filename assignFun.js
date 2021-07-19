let EvaluateGrade = function(currentNum,totalNum){
    let MyPercentage = ((currentNum/totalNum)*100)
    let MyGrade = ''
    if (MyPercentage >= 90 ){
        MyGrade = 'A'
    }
    else if (MyPercentage >= 80){
        MyGrade = 'B'
    }
    else if (MyPercentage >= 70){
        MyGrade = 'C'
    }
    else if (MyPercentage >= 60){
        MyGrade = 'D'
    }
    else if (MyPercentage >= 50){
        MyGrade = 'E'
    }
    else {
        MyGrade = 'F'
    }
    return `your grade is ${MyGrade} and your percentage is ${MyPercentage}`
}

let result =EvaluateGrade(500,600)
console.log(result)