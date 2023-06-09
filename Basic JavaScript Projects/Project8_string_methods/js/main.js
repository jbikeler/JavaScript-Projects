var string1 = "My name is ";
var string2 = "Ben ";
var string3 = "Ikeler ";

function ConcatFunc() {
    var sentence = string1.concat(string2, string3); //make a sentence from the string vars
    document.getElementById("name").innerHTML = sentence;
    document.getElementById("slice").innerHTML = sentence.slice(5, 15).toUpperCase(); //translate to caveman by slicing off useless english sounds
    document.getElementById("search").innerHTML = sentence.search(/ben/i).toString();
    var myNumber = 16.491285 
    document.getElementById("precision").innerHTML = myNumber.toPrecision(6) //round to 6 places
    document.getElementById("fixed").innerHTML = myNumber.toFixed(2) //only show 2 decimal places
    document.getElementById("value").innerHTML = sentence.valueOf()
}