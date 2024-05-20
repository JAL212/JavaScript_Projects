document.write("10" + 5); //Mixing data types//

function Not_Number_Function() { //Return not a number//
    document.getElementById("Test").innerHTML = 0/0;
}

function True_Function() { //Returning True//
    document.getElementById("True").innerHTML = isNaN('This is a string');
}

function False_Function() { //Returning False//
    document.getElementById("False").innerHTML = isNaN('007');
}

function Infinity_Function() {  //Get the function to retun infinity//
    document.write(3E310);
}

function Neg_Infinity_Function() { //Get the function to return negative infinity//
    document.write(-3E310);
}

function Boolean_True_Function() { //Returning a boolean true result//
    document.write(10 > 2);
}

function Boolean_False_Function(){ //Returning a boolean false result//
    document.write(10 < 2);
}

console.log(2+2); //Getting "4" to show up in console//

console.log(17<17); //Getting "false" to shww up in console//

function Comparison_True_Function() { //Making a comparison to result in "true"//
    document.write(10 == 10);
}

function Comparison_False_Function(){ //Making a comparison to result in "false"//
    document.write(10 == 2);
}

function Triple_True_Function() { //Making a triple-equal comparison to result in "true"//
    var Celtics = 0
    var Champs = 0
    document.write(Celtics === Champs);
}

function Triple_False_Function(){ //Making a triple-equal comparison to result in "false"//
    var Pacers = 1
    var Champs = 2
    document.write(Pacers === Champs);
}

function And_True_Function() { //An And comparison//
    document.write(5 > 2 && 100 > 99);
}

function Or_False_Function() { //An Or comparison//
    document.write(2 > 3 || 99> 100);
}

function Not_False_Function() { //A Not comparison//
    document.getElementById("Not").innerHTML = ! (20 > 10);
}
