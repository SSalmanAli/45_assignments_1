"use strict";
let places = ["Japan", "India", "China", "Paris", "Dubai"];
console.log(places);
console.log("Alphabetical Order 1 =" + [places].sort()); // Alphabetical order
console.log(places);
console.log("Reverse Alphabetical Order 1 =" + [places].sort().reverse()); // Reverse Alphabetical Order
console.log(places);
places.reverse();
console.log("Reversed order 2 :", places);
places.reverse();
console.log("Original order 2 :", places);
places.sort();
console.log("Alphabetical order 2 :", places);
places.reverse();
console.log("Reverse alphabetical order 2 :", places);
