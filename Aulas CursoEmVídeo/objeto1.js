// Compreensão OBJETO
let amigo = {nome:'Mateus',
sexo: 'M',
peso: 77.3,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(5) //add kg
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
