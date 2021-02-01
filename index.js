import { Cliente } from './cliente.js';
import { Gerente } from './Funcionarios/gerente.js';
import { Diretor } from './Funcionarios/diretor.js';
import { SistemaAutenticacao } from './sistemaAutenticacao.js';

const diretor = new Diretor('Luke', 12345678900, 1750);
diretor.cadastrarSenha('123456')
const gerente = new Gerente('Han Solo', 98765432100, 1300);
gerente.cadastrarSenha('654321')
const cliente = new Cliente('Deise', 12345678900, '456132')

const gerenteLogado = SistemaAutenticacao.login(gerente, '654321');
const diretorLogado = SistemaAutenticacao.login(diretor, '123456');
const clienteLogado = SistemaAutenticacao.login(cliente, '456132');

console.log(diretorLogado);
console.log(gerenteLogado);
console.log(clienteLogado);