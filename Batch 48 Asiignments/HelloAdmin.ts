let Users:string[]= ["User1", "King Kong","admin"];
for(let i =0;i<Users.length;i++){
    if (Users[i]=="admin"){
        console.log("Hello admin would you like to see the status report?");
    }
    else{
        console.log("Hello "+Users[i]);
    }
}
// Remove all usernames from the array
Users = [];

if (Users.length === 0) {
  console.log("We need to find some users!");
}
