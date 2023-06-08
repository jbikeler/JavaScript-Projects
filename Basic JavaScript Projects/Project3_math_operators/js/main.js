var inventory = 10;
var itemAmount = 5;

function addItem() { //add 1 to items
    itemAmount += 1;
    updateItems();
}

function subItem() { //remove 1 from items
    itemAmount -= 1;
    updateItems();
}

function addSlot() { //add 1 to inventory
    inventory++;
    updateInv();
}

function subSlot() { //remove 1 from inventory
    inventory--;
    updateInv();
}

function updateInv() { // update inv visuals
    document.getElementById("inventory").innerHTML = "Inventory Slots: " + inventory;
}

function updateItems() { // update item visuals
    document.getElementById("items").innerHTML = "Item Amount: " + itemAmount;
}

function getDamage () { // roll rand damage values
    document.getElementById("damage").innerHTML ="Attack damage is: " + Math.random() * 100;
}

function modForFun () {
    var leftOver = inventory % 5;
    document.getElementById("mod").innerHTML = "Inventory Mod 5 = " + leftOver;
}