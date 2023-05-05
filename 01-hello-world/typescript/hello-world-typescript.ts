interface Pessoa {
  name: string,
  country: string,
  age?: number,
}

function logPessoaTS(pessoa: Pessoa): void {
    const entries = Object.keys(pessoa);

  for (const entrie of entries) {
    let output = `${entrie}: ${pessoa[entrie]}`;

    console.log(output);
  }

  console.log('\n');
}

let pessoaTS1: Pessoa = { name: 'Uélio Nobre', country: 'Brazil' }
let pessoaTS2: Pessoa = { name: 'Uélio Nobre', country: 'Brazil', age: 35 };

// Só imprime pessoas, Djow!
let naoEhUmaPessoaTS = { title: 'Hello Word JS', descricao: 'O erro aconteceu tarde demais!' };

logPessoaTS(pessoaTS1);
logPessoaTS(pessoaTS2);
logPessoaTS(naoEhUmaPessoaTS);
