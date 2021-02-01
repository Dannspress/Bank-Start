import {Conta} from "./conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, agencia, cliente);
        ContaCorrente.numeroDeContas += 1;
    }

    saque(valor) {
        let taxa = 1.1;
        return this._saque(valor, taxa);
    }
}