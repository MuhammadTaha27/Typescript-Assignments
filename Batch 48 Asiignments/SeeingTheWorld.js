var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in an array
var placesToVisit = ["Paris", "Tokyo", "New York", "Sydney", "Cairo"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
var sortedAlphabetically = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedAlphabetically);
// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
var reverseSorted = __spreadArray([], placesToVisit, true).sort().reverse();
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", placesToVisit);
