console.log("### Calculadora ###")

let prompt = require('prompt-sync')();

let nome = prompt("Qual e o seu nome? ");
console.log("Olá, " + nome)

let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota')

console.log("### Calculando Nota A1 ###")
let exercicioA1 = parseFloat(prompt("Qual foi a nota do exercício? "))
let trabalhoA1 = parseFloat(prompt("Qual foi a nota do trabalho? "))
let provaA1 = parseFloat(prompt("Qual foi a nota da prova? "))
let notaA1 = calcularNotaA1(exercicioA1, trabalhoA1, provaA1)
console.log("Nota A1: " + notaA1)
console.log("### Nota A1 Calculada ###")

console.log("### Calculando Nota A2 ###")
let exercicioA2 = parseFloat(prompt("Qual foi a nota do exercício? "))
let trabalhoA2 = parseFloat(prompt("Qual foi a nota do trabalho? "))
let provaA2 = parseFloat(prompt("Qual foi a nota da prova? "))
let notaA2 = calcularNotaA2(exercicioA2, trabalhoA2, provaA2)
console.log("Nota A2: " + notaA2)
console.log("### Nota A2 Calculada ###")

console.log(" ")

let notaFinal = calcularNotaFinal(notaA1, notaA2)
console.log("Nota final: " + notaFinal)

console.log(" ")

if (notaFinal >= 5){
    console.log("Aprovado, parabens " + nome + "!")
}
else {
    console.log("Recuperação, se prepare " + nome + "!")
}