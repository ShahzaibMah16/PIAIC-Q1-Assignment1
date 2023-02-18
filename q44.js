make_s("letuce", "Tomato", "Olives", "cheese", "fries");
make_s("Grilled chicken", "letuce", "Onion", "Olives", "fries");
make_s("Olives", "Mayoneese", "fries", "Onion", "bbq chicken");
function make_s() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("i will make you a yummy sandwich\n");
    for (var i = 0; i < items.length; i++) {
        console.log("adding " + items[i] + " to your sandwich");
    }
    ;
    console.log("your sandwich is ready");
}
