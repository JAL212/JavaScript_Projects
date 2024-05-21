var Z = 10; //Global Variable practice//
function Add_numbers_3() {
    document.write(20 + Z + "<br>");
}
function Add_numbers_4() {
    document.write(Z + 100 + "<br>");
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_1() { //Local Variable & Intentional false statement that wont show a result, to use console.log to debug//
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    console.log(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Time_function() { //IF Else Time statement//
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
