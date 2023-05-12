// Exercício Type Aliases
// 1 - Crie um type para um objeto que represente um pássaro.

type birdTypes = {
  cor: string,
  peso: number,
  voa: boolean,
}

function showBirds(bird: birdTypes) {
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
type typeShowSomar = (number: number) => void;
type typeSomar = (n1: number, n2: number) => number;

const somar: typeSomar = (n1, n2) => n1 + n2;
const showSomar: typeShowSomar = (result: number) => {
  console.log('Resultado da soma:', result)
};

showSomar(somar(1, 2));
console.log();

// 3 - Crie um type para um objeto que represente um endereço.
// Type Aliases para passaros
type typeAddress = {
  street: string,
  city: string,
  number: number,
  state: string,
  country: string,
};

type loggerAddress = (address: typeAddress) => void;

const logAddress: loggerAddress = (address: typeAddress) => {
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
})