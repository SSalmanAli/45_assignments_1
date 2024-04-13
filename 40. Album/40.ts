function make_album(artist_name: string = "Ali Zafar", album_title: string = "Larsha Peshawar" , tracks:number = 0) {
    let album = { artist_name , album_title , tracks}
    return album;
}

console.log(make_album("Atif aslam" , "Adat"));
console.log(make_album());
console.log(make_album("Young Stunners" , "Why not meri Jan"));





