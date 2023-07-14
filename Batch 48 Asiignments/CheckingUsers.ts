let currentUsers:string[]=["user1","user2","user3","user4","user5"];
let newUsers:string[]=["user1","USER2","user5","user7","user6"];
let a:number = 0;
for(let i=0;i<newUsers.length;i++){
    for(let j=0;j<currentUsers.length;j++){
        if(newUsers[i].toLowerCase() === currentUsers[j].toLowerCase()){
            a = 1;
            break;
        }
        
        else{
            a = 2;
            
        }
        
    }
    if(a==1){
        console.log("Username "+newUsers[i]+ " is not available");
  
    }
    else if (a==2){
        console.log("Username "+newUsers[i]+ " is available");

    }
}