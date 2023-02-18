var invite = ["Waleed", "Abdul_hadi", "Ayan"];
for (var i_1 = 0; i_1 < 3; i_1++) {
    console.log("Greetings " + invite[i_1] + " i am Inviting you to dinner");
}
console.log("sorry " + invite[0] + "couldn't reach");
invite[2] = "Shahmir";
for (var i_2 = 0; i_2 < 3; i_2++) {
    console.log("Greeting again " + invite[i_2] + "we are Inviting you to dinner");
}
;
console.log("We have table for more person");
invite.push("Usama");
invite.splice(2, 0, "Rayan");
invite.unshift("Ahmed");
for (var i_3 = 0; i_3 < invite.length; i_3++) {
    console.log(invite[i_3] + "we did some changes we would like to invite to.");
}
console.log("\n");
console.log("Sorry we cant find bigger table");
console.log(invite[0] + " sorry we cant invite you");
invite.splice(0, 1);
console.log(invite[0] + " sorry we cant invite you");
invite.splice(0, 1);
console.log(invite[0] + " sorry we cant invite you");
invite.splice(0, 1);
console.log(invite[0] + " sorry we cant invite you");
invite.splice(0, 1);
console.log("\n\n");
for (var i_4 = 0; i_4 < invite.length; i_4++) {
    console.log("you are invited you to dinner " + invite[i_4]);
}
invite.splice(0, 1);
invite.splice(0, 1);
for (var i = 0; i < invite.length; i++) {
    console.log(invite[i]);
}
