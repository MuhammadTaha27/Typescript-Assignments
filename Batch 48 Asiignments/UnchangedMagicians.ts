let magicians:string[]=["Doctor Strange","Jhon Constantine","Zatana"];
let copiedMagicians: string[] = [...magicians];
function show_magicians(){
    for(let i = 0;i<magicians.length;i++){
        console.log(magicians[i]); 
    }
    for(let i = 0;i<copiedMagicians.length;i++){
        console.log(copiedMagicians[i]); 
    }
    
}
show_magicians();
function greatMagicians(){
    for(let i = 0;i<copiedMagicians.length;i++){
        copiedMagicians[i]= "Great "+ copiedMagicians[i];
    }
    
}
greatMagicians();
show_magicians();