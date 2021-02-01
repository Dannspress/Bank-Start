import {Conta} from "./conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, this.cliente, 100);
    }

    saque(valor){
        const taxa = 1.01;
        return this._saque(valor, taxa);
    }
}