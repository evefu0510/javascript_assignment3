function invoice() {
    var size = document.querySelector('input[name="size"]:checked').value;
    var cheese = document.querySelector('input[name="cheese"]:checked').value;
    var crust = document.querySelector('input[name="crust"]:checked').value;
    var sauce = document.querySelector('input[name="sauce"]:checked').value;
    var meat = document.querySelectorAll('input[name="meat"]:checked');
    var veg = document.querySelectorAll('input[name="veg"]:checked');

    var sizePrice = 0;
    var cheesePrice = 0;
    var crustPrice = 0;
    var saucePrice = 0;
    var meatPrice = 0;
    var vegPrice = 0;

    //------------------- pizza size ----------------------

    switch (size) {
        case "Small":
            sizePrice = 6;
            break;
        case "Medium":
            sizePrice = 10;
            break;
        case "Large":
            sizePrice = 14;
            break;
        case "Extra-Large":
            sizePrice = 16;
            break;
    }

    //------------------- pizza cheese ----------------------
    if (cheese === "Extra") {
        cheesePrice = 2;
    } else {
        cheesePrice = 1;
    }

    //------------------- pizza crust ----------------------
    switch (crust) {
        case "Hand Tossed":
            crustPrice = 3;
            break;
        case "Thin Crust":
            crustPrice = 2;
            break;
        case "Brooklyn Style":
            crustPrice = 3;
            break;
        case "Gluten Free":
            crustPrice = 3;
            break;
    }

    //------------------- pizza meat ----------------------
    var meatSelect = [];
    var meatDisplay = '';

    for (var i = 0; i < meat.length; i++) {
        meatSelect.push(meat[i].value);
    }

    meatPrice = meatSelect.length * 2;

    //------------------- pizza veg ----------------------
    var vegSelect = [];
    var vegDisplay = '';

    for (var i = 0; i < veg.length; i++) {
        vegSelect.push(veg[i].value);
    }

    if (vegSelect.length > 4) {
        vegPrice = (vegSelect.length - 4) * 2;
    }

    var totalPrice = sizePrice + cheesePrice + crustPrice + saucePrice + meatPrice + vegPrice;

    // Enter values into the invoice table
    document.getElementById("size").textContent = size + " Pizza";
    document.getElementById("sizePrice").textContent = "$" + sizePrice + ".00";
    document.getElementById("crust").textContent = crust + " Crust";
    document.getElementById("crustPrice").textContent = "$" + crustPrice + ".00";
    document.getElementById("cheese").textContent = cheese + " Cheese";
    document.getElementById("cheesePrice").textContent = "$" + cheesePrice + ".00";
    document.getElementById("sauce").textContent = sauce + " Sauce";
    document.getElementById("saucePrice").textContent = "$" + saucePrice + ".00";
    document.getElementById("meat").textContent = meatSelect.join(", ");
    document.getElementById("meatPrice").textContent = "$" + meatPrice + ".00";
    document.getElementById("veg").textContent = vegSelect.join(", ");
    document.getElementById("vegPrice").textContent = "$" + vegPrice + ".00";
    document.getElementById("totalPrice").textContent = "$" + totalPrice + ".00";
}
