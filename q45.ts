console.log(manufactur_car('Audi','A7',['AC','Yes'],['Sunroof','Yes']));

function manufactur_car(Manufacturers,Models,...options){
 let object_car={
  'Manufacturer':Manufacturers,
  'Model':Models,
 }
 options.forEach((option)=>{
  let [key,value]=option;
  object_car[key]=value;
 });
 return object_car
}
