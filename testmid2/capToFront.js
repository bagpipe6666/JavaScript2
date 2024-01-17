function capToFront(words) {

    var capitalLetters = "";
    var lowercaseLetters = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i] >= 'A' && words[i] <= 'Z') {
            capitalLetters += words[i];
        } else {
            lowercaseLetters += words[i];
        }
    }
    var result = capitalLetters + lowercaseLetters;
    return result;
}

console.log(capToFront("hApPy")); // APhpy
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
