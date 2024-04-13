"use strict";
let guests = ["Barack Obama", "Waqar Zaka", "Shelby Shelby"];
let unableToAttend = "Waqar Zaka";
console.log(`Mr.${unableToAttend} can\'t make it to dinner.`);
let newGuest = "Mukesh Ambani";
guests[guests.indexOf(unableToAttend)] = newGuest;
// guests.forEach(x => console.log(`Mr.${x} you are invited to dinner`));
console.log('Good News everyone I have found a bigger table');
guests.unshift("Kayne West"); // to add item in the beginning 
guests.splice(guests.length / 2, 0, "Albert Einstein"); // to add item in middle
guests.push("Elon Musk"); // to add item in the last of array
guests.forEach(y => console.log(`Mr.${y} you are invited to dinner.`));
