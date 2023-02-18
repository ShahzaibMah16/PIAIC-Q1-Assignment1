let invite=["Waleed","Abdul_hadi","Ayan"];
for(let i=0;i<3;i++){
 console.log("Greetings "+invite[i]+" i am Inviting you to dinner");}
console.log("sorry "+invite[0]+"couldn't reach");
invite[2]="Shahmir";
for(let i=0;i<3;i++){
 console.log("Greeting again "+invite[i]+"we are Inviting you to dinner");
};
console.log("We have table for more person")
invite.push("Usama");
invite.splice(2,0,"Rayan")
invite.unshift("Ahmed");
for(let i=0;i<invite.length;i++){
 console.log(invite[i]+"we did some changes we would like to invite to.");
}

console.log("\n")
console.log("Sorry we cant find bigger table")

console.log(invite[0]+" sorry we cant invite you")
invite.splice(0,1)

console.log(invite[0]+" sorry we cant invite you")
invite.splice(0,1)
console.log(invite[0]+" sorry we cant invite you")
invite.splice(0,1)
console.log(invite[0]+" sorry we cant invite you")
invite.splice(0,1)
console.log("\n\n")
for(let i=0;i<invite.length;i++){
 console.log("you are invited you to dinner "+invite[i])} 
 invite.splice(0,1)
 invite.splice(0,1)
 for (var i = 0; i < invite.length; i++) {
  console.log(invite[i])
 }