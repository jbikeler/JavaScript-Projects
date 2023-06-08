var a = 10

document.write("The type of \"4\" is a " + typeof "4");
document.getElementById("1").innerHTML = "This is a coersion expression result: " + (4 + "4"); //coersion example
document.getElementById("2").innerHTML = "This is the result of 4 == 4 AND 3 > 4: " + (4 == 4 && 3 > 4); //==, AND, > example
document.getElementById("3").innerHTML = "This is the result of 0 === false OR 5 < 6: " + (0 === false || 5 < 6); //===, OR, < example
document.getElementById("4").innerHTML = "This is the result of NOT 4 == 4: " + (!(4 == 4)); // NOT example

// vV DOCUMENT.WRITE TESTS COMMENTED OUT Vv

//document.write(isNaN("string"));
//document.write(isNaN(4));
//document.write(2E311);
//document.write(-2E311);
//document.write(12>5);s
//console.log(isNaN(4));
//document.write(2==5);
//document.write(0 === "false");
//document.write(2<5 && 5<3);
//document.write(!(a == 10));