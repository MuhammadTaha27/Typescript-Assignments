function describe_city(nameOfCity, nameOfCountry) {
    if (nameOfCountry === void 0) { nameOfCountry = "Pakistan"; }
    console.log("Name of City is " + nameOfCity + " and is located in " + nameOfCountry);
}
describe_city("Karachi");
describe_city("Islamabad", "Pakistan");
describe_city("Mumbai", "India");
