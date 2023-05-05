function logPessoa(pessoa) {
  const entries = Object.keys(pessoa);

  for (const entrie of entries) {
    let output = `${entrie}: ${pessoa[entrie]}`;
    console.log(output);
  }

  console.log('\n');
}

let pessoa1 = { name: 'Uélio Nobre', country: 'Brazil' }
let pessoa2 = { name: 'Uélio Nobre', country: 'Brazil', age: 35 };
let naoEhUmaPessoa = { title: 'Hello Word JS', descricao: 'Um erro aconteceu tarde demais!'};

logPessoa(pessoa1);
logPessoa(pessoa2);
logPessoa(naoEhUmaPessoa);

