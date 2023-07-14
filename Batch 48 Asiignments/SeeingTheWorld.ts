// Store the locations in an array
const placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Sydney", "Cairo"];

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
const sortedAlphabetically: string[] = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedAlphabetically);

// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the original list
const reverseSorted: string[] = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSorted);

// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", placesToVisit);
