var my = "shahzaib";
var a = my.toLowerCase();
console.log(a);
a = my.toUpperCase();
console.log(a);
a = my.replace(/(^|\s)\S/g, function (upper) { return upper.toUpperCase(); });
console.log(a);
