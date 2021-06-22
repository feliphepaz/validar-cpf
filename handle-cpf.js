export default class handleCPF {
  constructor(cpf) {
    this.cpf = cpf
  }
  get limpar() {
    cpf.addEventListener('change', function () {
      cpf.value = cpf.value.replace(/\D/g, '')
    })
  }
  get formatar() {
    cpf.addEventListener('change', function () {
      cpf.value = cpf.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    })
  }
  get validar() {
    const regex = /(\d{3}[\s.-]?){3}\d{2}/g
    cpf.addEventListener('keyup', function () {
      const resultado = cpf.value.match(regex)
      if (resultado && resultado[0] === cpf.value) {
        cpf.classList.remove('error')
        cpf.classList.add('success')
      } else {
        cpf.classList.add('error')
        cpf.classList.remove('success')
      }
    })
  }
}