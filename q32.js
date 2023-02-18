var current_u = ['shahzaib', 'ALi', 'Usman', 'Hadi', 'wasiq'];
var new_u = ['wasiq', 'waleed', 'Hadi', 'ayan', 'shayan'];
for (var i = 0; i < new_u.length; i++) {
    if (new_u[i].toLowerCase == current_u[0].toLowerCase || new_u[i].toLowerCase == current_u[1].toLowerCase || new_u[i].toLowerCase == current_u[2].toLowerCase || new_u[i].toLowerCase == current_u[3].toLowerCase || new_u[i].toLowerCase == current_u[4].toLowerCase) {
        console.log("User name (" + new_u[i] + ") not available");
        console.log("choose different username\n");
    }
    else
        console.log("user name (" + new_u[i] + ") is available\n");
}
