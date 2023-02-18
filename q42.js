var mag_lists = ['Harry', 'Usman', 'Jadugar', 'Hasnain'];
function show_mag(mags) {
    for (var i = 0; i < mags.length; i++) {
        console.log(mags[i]);
    }
    console.log("\n\n");
}
show_mag(mag_lists);
function great_magician(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + ' the great magician';
    }
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
great_magician(mag_lists);
