function storeCarInformation(manufacturer, modelName) {
    var otherInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Store additional keyword arguments
    for (var i = 0; i < otherInfo.length; i += 2) {
        var key = otherInfo[i];
        var value = otherInfo[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required and additional information
var carInfo = storeCarInformation("Toyota", "Camry", "color", "Silver", "year", 2022, "optionalFeature", "Sunroof");
// Print the returned object
console.log(carInfo);
