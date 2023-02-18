console.log(manufactur_car('Audi', 'A7', ['AC', 'Yes'], ['Sunroof', 'Yes']));
function manufactur_car(Manufacturers, Models) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var object_car = {
        'Manufacturer': Manufacturers,
        'Model': Models
    };
    options.forEach(function (option) {
        var key = option[0], value = option[1];
        object_car[key] = value;
    });
    return object_car;
}
