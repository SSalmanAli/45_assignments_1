"use strict";
let magicians = ["Roger Lapin", "David Copperfield", "Paul Daniels", "Harry Houdini"];
function make_great(magicians) {
    return magicians.map((magician) => `${magician} the Great`);
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let greatMagicians = make_great([...magicians]); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log(`-------------------------------------------------------------------`);
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
