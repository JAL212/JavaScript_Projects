function displayType(character) {
    var characterType = character.getAttribute("data-player-lineup");
    alert(characterType + " is the ideal lineup for a " + character.innerHTML + " situation!");
    
}