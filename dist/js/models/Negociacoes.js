export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionarNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listaNegociacoes() {
        return this.negociacoes;
    }
}
// Obs
// o tipo ReadonlyArray só permite leitura no método
// const  negociacoes = new Negociacoes();
// negociacoes.listaNegociacoes().forEach(n => {
//     n.data,
//     n.quantidade,
//     n.valor
// });
