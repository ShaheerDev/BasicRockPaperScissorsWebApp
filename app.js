//You can make it into a dice by replacing 3 with 6 in: Math.floor( Math.random() * 3 ) +1;

var calcrps = Math.floor( Math.random() * 3 ) +1;
var calcrpscomp = Math.floor( Math.random() * 3 ) +1;

function action() {
    if(calcrps == 1){
        alert("You have got Rock")
    }else if(calcrps == 2){
        alert("You have got Paper")
    }else{
        alert("You have got Scissors")
    }
    console.log(calcrps)
}

function actioncomp() {
    if(calcrpscomp == 1){
        alert("The Computer have got Rock")
    }else if(calcrpscomp == 2){
        alert("The Computer have got Paper")
    }else{
        alert("The computer have got Scissors")
    }
    console.log(calcrpscomp)
}

//It's the Result function you can enable it if you want to... Just replace the button line in html with:
// <button onclick="action();actioncomp();">Chose!</button>


//function result() {
//    if(calcrps == calcrpscomp){
//        alert("It's a DRAW!")
//    }else if(calcrps == 1 || calcrpscomp == 2){
//        alert("You LOSE!")
//    }else if(calcrps == 2 || calcrpscomp == 1){
//        alert("YOU WIN!")
//    }else if(calcrps == 3 || calcrpscomp == 2){
//        alert("YOU WIN!")
//    }else if(calcrps == 2 || calcrpscomp == 3){
//        alert("YOU LOSE!")
//    }else if(calcrps == 1 || calcrpscomp == 3){
//        alert("YOU WIN!")
//    }else if(calcrps == 3 || calcrpscomp == 1){
//        alert("YOU LOSE!")
//   }
//}