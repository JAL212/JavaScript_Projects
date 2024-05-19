function my_Dictionary() {  //This is practice setting up a dictionary of KVPs. Also, Go Celtics! //
    var NBA = {
        Team: "Boston Celtics",
        Color: "Green",
        Coach: "Joe Mazulla",
        Starting_five: "Tatum, Brown, White, Holiday, Porzingis",
        Stadium: "TD Garden",
        Championships_won: "17",
    };
    document.getElementById("Dictionary").innerHTML = NBA.Team;
}

function deleted_Dictionary() { //This is practice deleting a key an returning an undefined value//
    var NBA = {
        Team: "Boston Celtics",
        Color: "Green",
        Coach: "Joe Mazulla",
        Starting_five: "Tatum, Brown, White, Holiday, Porzingis",
        Stadium: "TD Garden",
        Championships_won: "17",
    };
    delete NBA.Coach;
    document.getElementById("Deleted_Dictionary").innerHTML = NBA.Coach;
}