let Invit=["Waleed","Abdul_hadi","Ayan"];
for(let i=0;i<3;i++){
 console.log("Greetings "+Invit[i]+" i am Inviting you to dinner");}
console.log("sorry "+Invit[0]+"couldn't reach");
Invit[2]="Shahmir";
for(let i=0;i<3;i++){
 console.log("Greeting again "+Invit[i]+"we are Inviting you to dinner");
};
console.log("We have table for more person")
Invit.push("Usama");
Invit.splice(2,0,"Rayan")
Invit.unshift("Ahmed");
for(let i=0;i<Invit.length;i++){
 console.log(Invit[i]+"we did some changes we would like to invite to.");
}