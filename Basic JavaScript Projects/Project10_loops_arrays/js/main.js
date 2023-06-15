let myString = "This is my string.";
let items = ["map", "compass", "torch"];
let x = 6;
var character = {
    health: 100,
    addHealth: function(amount) {
        this.health += amount;
        }
    }

function Call_Loop() { //add 'Loop' for each while iteration
    let text = ""
    let i = 0
    while (i < 5) {
        text += "Loop "
        i++
    }
    document.getElementById("While").innerHTML = text;
}

function for_Loop() {
    let n = 12;
    let i;
    for (i = 0; i < 5; i++){ //run 5 times and add index to n
        n += i;
    }
    document.getElementById("For").innerHTML = n;
}

function array_Function() {
    document.getElementById("Array").innerHTML = items[1]; // zero based array should return second item
}

function constant_Function() {
    const myConst = ["guitar", "mandolin", "bass"];
    myConst[3] = "ukelele";
    document.getElementById("Constant").innerHTML = myConst[3]; //added to value 
    myConst = ["floor tom", "snare"];
    document.getElementById("Constant2").innerHTML = myConst[1]; //should cause error because we tried to change const the type
}

function letFunc() {
    let x = 10;
    document.getElementById("Let").innerHTML = x; //let x=6 is also 'global' but this code blokc overrides x as 10
}

function callReturn() { //use function to return data withing a function
    document.getElementById("Return").innerHTML = myReturn(3, 15);
}

function myReturn(x, y) { //add 2 given numbers together
   return x + y;
} 

function callMethod() {
    character.addHealth(10);
    document.getElementById("Method").innerHTML = character.health;
}

function breakFunc() { //count from 0-7 skipping 4
    let nums = "";
    for (let i = 0; i < 10; i++) {
        if (i === 7) { break; }
        if (i === 4) { continue; }
        nums += i + "<br>";
    }
    document.getElementById("Break").innerHTML = nums;
}