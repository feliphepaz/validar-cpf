import handleCPF from './handle-cpf.js'

const cpf = document.querySelector('.cpf')

const handle = new handleCPF(cpf);
handle.validar