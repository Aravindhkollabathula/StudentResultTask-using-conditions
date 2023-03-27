function getmarks(){
    var Telugu = parseInt(document.getElementById("telmarks").value)
    var English = parseInt(document.getElementById("engmarks").value)
    var Hindi = parseInt(document.getElementById("hindimarks").value)
    var Maths = parseInt(document.getElementById("mathsmarks").value)
    var Science = parseInt(document.getElementById("sciencemarks").value)
    var Social = parseInt(document.getElementById("socmarks").value)

    
    // console.log("telugu marks=",Telugu,"English marks=",English,"hindi marks=",Hindi,"maths marks=",Maths,"Science marks =",Science,"social marks=",Social)
    var totalMarks = Telugu + English + Hindi + Maths + Science + Social;
    
    
    if(Telugu >= 35 && English >= 35 && Hindi >= 35 && Maths >= 35 && Science >= 35 && Social >= 35){
        // console.log("pass")
        document.getElementById("pass or fail").innerHTML = "pass"
    } else {
        // console.log("fail")
        document.getElementById("pass or fail").innerHTML = "fail"
    }
    
    // console.log(totalMarks,"total marks")
    var percentage = (totalMarks/6)
    document.getElementById("studentmarks").innerHTML = totalMarks
    // console.log(percentage)
    document.getElementById("percentage").innerHTML = percentage.toFixed(2)
    

if(percentage == 100){
    // console.log("grade = O")
    document.getElementById("grade").innerHTML = "O"
}else if(percentage >= 91 && percentage <= 99){
// console.log("grade = A")
document.getElementById("grade").innerHTML = "A"
}else if(percentage >= 81 && percentage <= 90){
    // console.log("grade = B")
    document.getElementById("grade").innerHTML = "B"
}else if(percentage >= 71 && percentage <= 80){
    // console.log("grade = C")
    document.getElementById("grade").innerHTML = "C"
}else if(percentage >= 61 && percentage <=70){
    // console.log("grade = D")
    document.getElementById("grade").innerHTML = "D"
}else if(percentage >= 0 && percentage <=60){
    // console.log("fail-No grade obtained")
}else {
    // console.log("please enter valid percentage")
}

 }

 