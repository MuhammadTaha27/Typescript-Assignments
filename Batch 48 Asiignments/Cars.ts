function storeCarInformation(manufacturer:string, modelName:string, ...otherInfo: any) {
    const car: any = {
      manufacturer: manufacturer,
      modelName: modelName
    };
  
    // Store additional keyword arguments
    for (let i = 0; i < otherInfo.length; i += 2) {
      const key = otherInfo[i];
      const value = otherInfo[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with required and additional information
  const carInfo = storeCarInformation("Toyota", "Camry", "color", "Silver", "year", 2022, "optionalFeature", "Sunroof");
  
  // Print the returned object
  console.log(carInfo);
  