function orderSandwich(...items: string[]) {
    console.log("You have ordered a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
      console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
  }
  
  // Call the function with different number of arguments
  orderSandwich("Ham", "Cheese"); // Sandwich with 2 items
  orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo"); // Sandwich with 4 items
  orderSandwich("Chicken"); // Sandwich with 1 item
  