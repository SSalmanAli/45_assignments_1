function make_great (index : string[] = ["Roger Lapin" , "David Copperfield" , "Paul Daniels" , "Harry Houdini"]
){
    index.forEach(y => console.log(`The Great ${y}`))
}

make_great()
console.log('----------------------------------')
make_great(["baka" , "moiz" , "salman"])
