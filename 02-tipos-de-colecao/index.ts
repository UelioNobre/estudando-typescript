// Arrays tipagem explicita
const names: string[] = ['uelio', 'nobre'];
const years: number[] = [1963, 5, 11, 0x79];

console.log({
  names,
  type: typeof names,
  length: names.length,
});

console.log({
  years,
  type: typeof years,
  length: years.length,
});
console.log();

names.map((name) => console.log(name));
years.map((year) => console.log(year));
console.log();

// Tuplas - Obect.entries(), mas com tipagem em sua estrutura
let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

console.log();
console.log({fullName});
fullName.map((name) => console.log(name));


// Mix
console.log();
const mixJS = ['String', 1942, true, {}];
const mixTS: any[] = ['String', 1942, true, {}];

console.log({ mixJS })
console.log({ mixTS })


