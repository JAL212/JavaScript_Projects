function Vote_Function() { //Testing an input, with a can/can't element based on the user input//
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 17) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //Using "this" and "new" keywords to define and create classes and outputs //
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Joe = new Vehicle("Toyota", "Camry", 1988, "Navy, with some rust");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Joe drives a " + Joe.Vehicle_Color + "-colored " + Joe.Vehicle_Model + " manufactured in " + Joe.Vehicle_Year;
}

function count_Function() { //This is a counting function, counting 
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point
    }
}
