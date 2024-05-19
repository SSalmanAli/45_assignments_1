function make_album (artist_name : string , album_title :string)
: string;
function make_album (artist_name : string , album_title :string)
: string;
function make_album (artist_name : string , album_title :string)
: string;
function make_album (artist_name : string , album_title :string , noOfTracks : number)
: string;

function make_album(artist_name : string , album_title : string , noOfTracks? : number) : any {
    if (noOfTracks !== undefined){
    return { artist_name , album_title , noOfTracks}
    }
    else{
        return { artist_name , album_title }
    }
}

console.log(make_album('Atif aslam', 'Adat' , 13)); // Without tracks
console.log(make_album('ali zafar', 'larsha peshawar')); // With tracks
