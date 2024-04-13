"use strict";
function make_album(artist_name = "Ali Zafar", album_title = "Larsha Peshawar", tracks = 0) {
    let album = { artist_name, album_title, tracks };
    return album;
}
console.log(make_album("Atif aslam", "Adat"));
console.log(make_album());
console.log(make_album("Young Stunners", "Why not meri Jan"));
// function make_album(artist: string, title: string, tracks: number = 0) {
//     let album = { artist, title, tracks };
//     return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));
