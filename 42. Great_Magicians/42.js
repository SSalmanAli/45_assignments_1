"use strict";
let Magicians = ["Roger Lapin", "David Copperfield", "Paul Daniels", "Harry Houdini"];
function show_magicians(Magicians) {
    Magicians.forEach(y => console.log(y));
}
;
show_magicians(Magicians);
console.log(`-------------------------------------------------------------`);
function make_great(Magicians) {
    Magicians.forEach(x => console.log(`The Great ${x}`));
}
;
make_great(Magicians);
