let guestList:string[] = ["J.P Morgan", "Nikola Tesla", "qin shi huang"];
guestList.push("Julius Cesar", "Al Khwarizmi", "Bruce Wayne");



/*for (let i=0;i < guestList.length;i++){
    if (guestList[i]=="Nikola Tesla"){
        console.log("Hi Thomas edison You are invited for dinner");
    }
    else {console.log("Hi "+ guestList[i]+ " You are invited for dinner"); 
    }
}*/


for (let i=0;i<5;i++){
    if (guestList.length < 3){
        for (let i=0;i < guestList.length ;i++){
        
            console.log("Hi "+ guestList[i]+ " You are invited for dinner"); 
        }
    }
    else {
        const poppedValue: string = guestList.pop();
        console.log("Sorry Mr "+ poppedValue + " You are not invited for dinner"); 
    }
}
console.log("Number of people invited :" +guestList.length );