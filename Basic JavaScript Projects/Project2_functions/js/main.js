var a = 0, b = 0

function myFunc () {
    a = 3;
    b = 6;
    a += b; //After setting the values we will add them together
    document.getElementById("myID").innerHTML = "We make a = 3 and b = 6 then add b to a and we get " + a; //print what we did to the html doc
}