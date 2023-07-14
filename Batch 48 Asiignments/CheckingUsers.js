var currentUsers = ["user1", "user2", "user3", "user4", "user5"];
var newUsers = ["user1", "USER2", "user5", "user7", "user6"];
var a = 0;
for (var i = 0; i < newUsers.length; i++) {
    for (var j = 0; j < currentUsers.length; j++) {
        if (newUsers[i].toLowerCase() === currentUsers[j].toLowerCase()) {
            a = 1;
            break;
        }
        else {
            a = 2;
        }
    }
    if (a == 1) {
        console.log("Username " + newUsers[i] + " is not available");
    }
    else if (a == 2) {
        console.log("Username " + newUsers[i] + " is available");
    }
}
