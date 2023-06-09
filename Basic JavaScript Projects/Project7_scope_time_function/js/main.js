var GlobalVar = "global";


function localFunc () {
    var LocalVar = "local";
    document.getElementById("printLocal").innerHTML = LocalVar; //if we can find the local then print
}

function errorLocal () {
    document.getElementById("error").innerHTML = "Error found in the F12 console: LocalVar is not defined";
    document.getElementById("error").innerHTML = LocalVar; //if we can find the local then print but we should not find local
}

function globalFunc() {
    document.getElementById("printGlobal").innerHTML = GlobalVar; //if we can find the global then print
}

function getTime () {
    var myDate = new Date(); //make new date object (we need a updated date)
    document.getElementById("time").innerHTML = String(myDate.getHours()) + ":" + (myDate.getMinutes() < 9 ? "0" + String(myDate.getMinutes()) : String(myDate.getMinutes())) //Get current time. If minutes is < 9 then add a 0 in front so it reads like time
}

function Time_function() { //assingment for finding time of day
    var myDate = new Date(); //make new date object (we need a updated date)
    var Time = myDate.getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function checkTime() { //checks person's availability from user input
    var input = document.getElementById("check-time").value;

    if (!isNaN(input)) { //did they enter a number?
        document.getElementById("availability").innerHTML = "true";
        if (input <= 24 && input >= 1) { //is the number between 1-24?
            if (input < 18) { //is the time before 6?
                document.getElementById("availability").innerHTML = "I'm available then!"; //yes, we are available
            }
            else { //no, we are off the clock
                document.getElementById("availability").innerHTML = "Sorry, I'm off the clock:)";
            }
        }
        else { //tell user to enter a # between 1-24
            document.getElementById("availability").innerHTML = "Please Enter A Number Between 1-24";
        }
    }
    else { //tell user to enter a # with no other characters
        document.getElementById("availability").innerHTML = "Please Enter A Number";
    }
}