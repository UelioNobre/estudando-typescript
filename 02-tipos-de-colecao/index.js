// Arrays tipagem explicita
var names = ['uelio', 'nobre'];
var years = [1963, 5, 11, 0x79];
console.log({
    names: names,
    type: typeof names,
    length: names.length
});
console.log({
    years: years,
    type: typeof years,
    length: years.length
});
console.log();
names.map(function (name) { return console.log(name); });
years.map(function (year) { return console.log(year); });
console.log();
// Tuplas - Obect.entries(), mas com tipagem em sua estrutura
var fullName = ["Jane", "Doe"];
var person = ["Jane Doe", 35];
var car = ["Ford", "F400", 10];
console.log();
console.log({ fullName: fullName });
fullName.map(function (name) { return console.log(name); });
// Mix
console.log();
var mixJS = ['String', 1942, true, {}];
var mixTS = ['String', 1942, true, {}];
console.log({ mixJS: mixJS });
console.log({ mixTS: mixTS });
