let magicians: string[] = ["Roger Lapin" , "David Copperfield" , "Paul Daniels" , "Harry Houdini"];

function make_great(magicians: string[]): string[] {
return magicians.map((magician) => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void {
magicians.forEach((magician) => {
    console.log(magician);
});
}

let greatMagicians: string[] = make_great([...magicians]); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log(`-------------------------------------------------------------------`)
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names

