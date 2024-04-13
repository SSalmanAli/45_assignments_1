let Magicians = ["Roger Lapin" , "David Copperfield" , "Paul Daniels" , "Harry Houdini"];

function show_magicians( Magicians: string[]) {
    Magicians.forEach(y => console.log(y))
};

show_magicians(Magicians)
console.log(`-------------------------------------------------------------`)
function make_great( Magicians: string[]) {
    Magicians.forEach(x => console.log(`The Great ${x}`))
};

make_great(Magicians);
