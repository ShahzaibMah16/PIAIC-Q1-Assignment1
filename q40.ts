function make_c(artist,title,tracks=0){

 let album_dic={
  'artist':artist,
  'title':title,
 }
 if (tracks)
  album_dic['tracks']=tracks
 return album_dic
}

let album=make_c('ED Sherran','Shape of You');
console.log(album+"\n");
album=make_c('harnoor','Moonlight');
console.log(album+"\n");
album=make_c('Sidhu Mossewala','Dollar',20);
console.log(album+"\n");
