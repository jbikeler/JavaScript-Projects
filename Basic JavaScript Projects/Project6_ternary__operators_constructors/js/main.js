function Ride_Function() { //tests a ternary operation
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function outterFunc() { //nested function
    var a = 8;
    function nestedFunc() {a++; a += 5;}
    nestedFunc();
    return a
}

function nestTest() { //use our nested function to print a result to doc
    document.getElementById("Nested_Function").innerHTML = outterFunc()
}

function Vehicle(Make, Model, Year, Color) { //use a funtion to create a class Vehicle
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //create a class Jack
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //create a class Emily
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //create a class Erik
function myFunction () { //call func to see what car Erik drives
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year
}