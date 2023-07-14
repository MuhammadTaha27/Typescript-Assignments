let magicians:string[]=["Doctor Strange","Jhon Constantine","Zatana"];
function show_magicians(){
    for(let i = 0;i<magicians.length;i++){
        console.log(magicians[i]); 
    }
    
}
show_magicians();
function greatMagicians(){
    for(let i = 0;i<magicians.length;i++){
        magicians[i]= "Great "+ magicians[i];
    }
    
}
greatMagicians();
show_magicians();