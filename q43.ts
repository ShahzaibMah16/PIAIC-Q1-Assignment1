let mag_number=['Harry','Usman','Jadugar','Hasnain'];

function show_magi(mag_number){
 for(let i=0;i<mag_number.length;i++){
  console.log(mag_number[i]);
 }
 console.log("\n\n");
}


let Arrays=[""];
function make_great(mag_number){
 for(let i=0;i<mag_number.length;i++){
  Arrays[i]=mag_number[i]+' the great magician';
 }
 for(let i=0;i<mag_number.length;i++){
  console.log(mag_number[i]);
 }

}


show_magi(mag_number);
show_magi(Arrays);