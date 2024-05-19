function My_addition_function() { //This is an addition function //
    var addition = 12 + 12;
    document.getElementById("Addition").innerHTML = "12 + 12 = " + addition;
}

function My_subtraction_function() { //This is a subtraction fuction//
    var subtraction = 24 - 12;
    document.getElementById("Subtraction").innerHTML = "24 - 12 = " + subtraction;
}

function My_multiplication_function() { //This is a multiplication fucntion//
    var multiplication = 4 * 3;
    document.getElementById("Multiplication").innerHTML = "4 * 3 = " + multiplication;
}

function My_division_function() { //This is a division function//
    var division = 36 / 3;
    document.getElementById("Division").innerHTML = "36 / 3 = " + division;
}

function My_math_function() { //This is mulitple operator function//
    var simple_math = (1 + 5) * 12 - 24 / 4;
    document.getElementById("Math").innerHTML = "1 plus 5, multiplied by 12, minus 24 and then divided by 4 equals " + simple_math;
}

function My_modulus_operator() { //This remainder function provide the remainder of the math problem of 25 divided by 6//
    var remainder = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

function negation_Operator() { //This negation operator gives the negative of X//
    var x = 12;
    document.getElementById("Negation").innerHTML = -x;
}

function decrement_Operator() { //This decrement operator reduces by a whole number//
    var X = 5.25;
    X--;
    document.write(X);
}

function increment_Operator() { //This increment operator increases by a whole number//
    var Z = 10.5;
    Z++;
    document.write(Z);
}

window.alert(Math.random() * 100); //This MATH operator returns a random number between 0-100, in a window pop-up //


