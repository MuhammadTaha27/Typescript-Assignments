type album = {
    title: string;
    artistName: string;
  };

function makealbum(artistname:string,Title:string){
    const Album:album ={
        title : Title,
        artistName : artistname
    }
    console.log(Album);
}
makealbum("Honey Singh","Desikalakar");