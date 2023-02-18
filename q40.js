function make_c(artist, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var album_dic = {
        'artist': artist,
        'title': title
    };
    if (tracks)
        album_dic['tracks'] = tracks;
    return album_dic;
}
var album = make_c('ED Sherran', 'Shape of You');
console.log(album + "\n");
album = make_c('harnoor', 'Moonlight');
console.log(album + "\n");
album = make_c('Sidhu Mossewala', 'Dollar', 20);
console.log(album + "\n");
