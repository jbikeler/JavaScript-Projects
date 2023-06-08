var myDictionary = {
    Name: "Ben",
    Color: "Blue",
    Food: "Gyro",
    Animal: "An otter.... or maybe a bear.... wait raccoons are pretty cool...uuuuummmm" //this will be undefined, like my opinion
}

function printColor() { // get user's favorite color
    document.getElementById("color").innerHTML = myDictionary.Color;
}

function printAnimal() { // get user's favorite animal
    delete myDictionary.Animal;
    document.getElementById("animal").innerHTML = myDictionary.Animal;
}