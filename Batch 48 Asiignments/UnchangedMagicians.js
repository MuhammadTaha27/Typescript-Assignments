var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Doctor Strange", "Jhon Constantine", "Zatana"];
var copiedMagicians = __spreadArray([], magicians, true);
function show_magicians() {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
    for (var i = 0; i < copiedMagicians.length; i++) {
        console.log(copiedMagicians[i]);
    }
}
show_magicians();
function greatMagicians() {
    for (var i = 0; i < copiedMagicians.length; i++) {
        copiedMagicians[i] = "Great " + copiedMagicians[i];
    }
}
greatMagicians();
show_magicians();
