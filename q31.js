var My_ages = [10, 11, 78, 26];
if (My_ages.length > 0) {
    for (var i = 0; i < My_ages.length; i++) {
        if (My_ages[i] < 2) {
            console.log("you is baby");
        }
        if (My_ages[i] >= 2 && My_ages[i] < 4) {
            console.log("you are toddler");
        }
        if (My_ages[i] >= 4 && My_ages[i] < 13) {
            console.log("you are My_ages kid");
        }
        if (My_ages[i] >= 13 && My_ages[i] < 20) {
            console.log("you are teenager");
        }
        if (My_ages[i] >= 20 && My_ages[i] < 65) {
            console.log("you are an adult");
        }
        if (My_ages[i] >= 65) {
            console.log("you are an elder person");
        }
    }
}
else {
    console.log("no user is registered to check the age");
}
