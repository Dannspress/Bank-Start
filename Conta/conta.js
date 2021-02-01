export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente (classe abstrata)");
        }
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    saque(valor) {
        throw new Error('O método Saque da conta é abstrato');
    }

    _saque(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    deposito(valor) {
        if(valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    transferencia(valor, conta) {
        const valorSacado = this.saque(valor);
        conta.deposito(valorSacado);
    }
}