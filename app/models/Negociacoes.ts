import { Negociacao } from "./Negociacao.js";

export class Negociacoes{
    private  negociacoes: Negociacao[] = [];

    adicionarNegociacao(negociacao:  Negociacao){
        this.negociacoes.push(negociacao);
    }

    listaNegociacoes():  readonly Negociacao[] {
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