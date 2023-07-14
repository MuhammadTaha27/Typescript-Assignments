var transportationModes = ["car", "motorcycle", "bicycle", "scooter"];
for (var i = 0; i < transportationModes.length; i++) {
    var mode = transportationModes[i];
    if (mode === "car") {
        console.log("I would like to own a luxurious " + mode + ".");
    }
    else if (mode === "motorcycle") {
        console.log("I dream of riding a powerful " + mode + ".");
    }
    else if (mode === "bicycle") {
        console.log("I enjoy cycling around on a sleek " + mode + ".");
    }
    else if (mode === "scooter") {
        console.log("I find joy in zipping through the city on a convenient " + mode + ".");
    }
}
