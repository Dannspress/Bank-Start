import {Conta} from "./conta.js";
 
export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    saque(valor) {
        const taxa = 1.02;
        return this._saque(valor, taxa);
    }
}