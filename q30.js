var Emp = ['Abdul', 'ALi', 'Waleed', 'admin', 'ayan'];
for (var i = 0; i < Emp.length; i++) {
    if (Emp[i] == 'admin') {
        console.log("Hello, admin would you like to see status reports");
        console.log("\n");
    }
    else {
        console.log("Hello, " + Emp[i] + " Thankyou for logging in");
        console.log("\n");
    }
}
