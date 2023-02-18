let Visit=["Dubai","India","Afghanistan","Turkey","Malta"];
console.log('["' +Visit.join('","')+'"]');
let Alpha =Visit.sort();
console.log("------------------alphabetical order");
console.log('["'+Alpha.join('","')+'"]');
console.log("----------------original order");
console.log('["' +Visit.join('","')+'"]');
Alpha=Alpha.reverse()
console.log("---------------reverse alphabetical order");
console.log('["'+Alpha.join('","')+'"]');
console.log("----------------original order");
console.log('["' +Visit.join('","')+'"]');
Visit=Visit.reverse()
console.log("-----------------reverse order");
console.log('["' +Visit.join('","')+'"]');
Visit=Visit.reverse()
console.log("-----------------original order");
console.log('["'+Visit.join('","')+'"]');
Visit=Visit.sort()
console.log("------------------alphabetical order");
console.log('["'+Visit.join('","')+'"]');
Visit=Visit.reverse()
console.log("-------------------reverse alphabetical order");
console.log('["'+Visit.join('","')+'"]');