function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You have ordered a sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments
orderSandwich("Ham", "Cheese"); // Sandwich with 2 items
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo"); // Sandwich with 4 items
orderSandwich("Chicken"); // Sandwich with 1 item
