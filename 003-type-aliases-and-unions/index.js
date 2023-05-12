// Exercício Type Aliases
// 1 - Crie um type para um objeto que represente um pássaro.
function showBirds(bird) {
    console.log('cor', bird.cor);
    console.log('peso', bird.peso);
    console.log('voa', bird.voa);
    console.log();
}
showBirds({ cor: 'cinza', peso: 0.120, voa: true });
showBirds({ cor: 'azul escuro', peso: 0.06, voa: true });
//
// 2 - Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
console.log();
var somar = function (n1, n2) { return n1 + n2; };
var showSomar = function (result) {
    console.log('Resultado da soma:', result);
};
showSomar(somar(1, 2));
var logAddress = function (address) {
    console.log('street', address.street);
    console.log('city', address.city);
    console.log('number', address.number);
    console.log('state', address.state);
    console.log('country', address.country);
};
logAddress({
    street: 'no name',
    city: 'Old Mission',
    number: 0,
    state: 'Ceará',
    country: 'Brazil'
});
