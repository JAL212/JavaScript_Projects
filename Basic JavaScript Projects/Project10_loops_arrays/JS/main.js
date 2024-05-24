var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Use a for loop to populate a list of Instruments - instead of listing all as getById//
var Content = "";
var Y; 
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
}

function count_To_Ten() { //Count to ten using a while loop, adding to original variable of X = 1//
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function array_Function() { //Using an array to pull together options as part of a response//
    var Celtics_Starter = [];
    Celtics_Starter[0] = "Derrick White";
    Celtics_Starter[1] = "Jrue Holiday";
    Celtics_Starter[2] = "Jaylen Brown";
    Celtics_Starter[3] = "Jayson Tatum";
    Celtics_Starter[4] = "Kristaps Porzingis";
    document.getElementById("Array") .innerHTML = "The key to the Celtics winning the NBA Championship is " + Celtics_Starter[2] + ".";
}

function constant_Function() { //Constant function to prevent changes caused by other variables //
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function let_keyword() { //Use Let keyword that cannot be accessed outside its block//
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}

