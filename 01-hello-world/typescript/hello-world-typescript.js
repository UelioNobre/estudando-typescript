function logPessoaTS(pessoa) {
    var entries = Object.keys(pessoa);
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entrie = entries_1[_i];
        var output = entrie + ": " + pessoa[entrie];
        console.log(output);
    }
    console.log('\n');
}
var pessoaTS1 = { name: 'Uélio Nobre', country: 'Brazil' };
var pessoaTS2 = { name: 'Uélio Nobre', country: 'Brazil', age: 35 };
// Só imprime pessoas, Djow!
var naoEhUmaPessoaTS = { title: 'Hello Word JS', descricao: 'O erro aconteceu tarde demais!' };
logPessoaTS(pessoaTS1);
logPessoaTS(pessoaTS2);
logPessoaTS(naoEhUmaPessoaTS);
