function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is located in " + country);
}
describe_city('Multan');
describe_city('Sialkot');
describe_city('New York', 'USA');
