const prompt = require('prompt-sync')();
const calc = require('./calculadora');

function mostrarMenu() {
    console.log('\n=== CALCULADORA INTERATIVA ===');
    console.log('1. Soma');
    console.log('2. Subtração');
    console.log('3. Multiplicação');
    console.log('4. Divisão');
    console.log('5. Elevar ao quadrado');
    console.log('6. Raiz quadrada');
    console.log('7. Sair');
    console.log('==============================');
}

function calcular() {
    let opcao;
    
    do {
        mostrarMenu();
        opcao = prompt('Escolha uma opção (1-7): ');
        
        switch (opcao) {
            case '1':
                realizarSoma();
                break;
            case '2':
                realizarSubtracao();
                break;
            case '3':
                realizarMultiplicacao();
                break;
            case '4':
                realizarDivisao();
                break;
            case '5':
                realizarQuadrado();
                break;
            case '6':
                realizarRaizQuadrada();
                break;
            case '7':
                console.log('Obrigado por usar a calculadora! Até logo!');
                break;
            default:
                console.log('Opção inválida! Tente novamente.');
        }
        
        if (opcao !== '7') {
            prompt('Pressione Enter para continuar...');
        }
        
    } while (opcao !== '7');
}

function obterNumero(mensagem) {
    let numero;
    do {
        const input = prompt(mensagem);
        numero = parseFloat(input);
        if (isNaN(numero)) {
            console.log('Por favor, digite um número válido!');
        }
    } while (isNaN(numero));
    return numero;
}

function realizarSoma() {
    console.log('\n--- SOMA ---');
    const a = obterNumero('Digite o primeiro número: ');
    const b = obterNumero('Digite o segundo número: ');
    const resultado = calc.somar(a, b);
    console.log(`${a} + ${b} = ${resultado}`);
}

function realizarSubtracao() {
    console.log('\n--- SUBTRAÇÃO ---');
    const a = obterNumero('Digite o primeiro número: ');
    const b = obterNumero('Digite o segundo número: ');
    const resultado = calc.subtrair(a, b);
    console.log(`${a} - ${b} = ${resultado}`);
}

function realizarMultiplicacao() {
    console.log('\n--- MULTIPLICAÇÃO ---');
    const a = obterNumero('Digite o primeiro número: ');
    const b = obterNumero('Digite o segundo número: ');
    const resultado = calc.multiplicar(a, b);
    console.log(`${a} × ${b} = ${resultado}`);
}

function realizarDivisao() {
    console.log('\n--- DIVISÃO ---');
    const a = obterNumero('Digite o numerador: ');
    let b;
    do {
        b = obterNumero('Digite o denominador: ');
        if (b === 0) {
            console.log('O denominador não pode ser zero!');
        }
    } while (b === 0);
    
    try {
        const resultado = calc.dividir(a, b);
        console.log(`${a} ÷ ${b} = ${resultado}`);
    } catch (error) {
        console.log('Erro:', error.message);
    }
}

function realizarQuadrado() {
    console.log('\n--- ELEVAR AO QUADRADO ---');
    const a = obterNumero('Digite o número: ');
    const resultado = calc.aoQuadrado(a);
    console.log(`${a}² = ${resultado}`);
}

function realizarRaizQuadrada() {
    console.log('\n--- RAIZ QUADRADA ---');
    let a;
    do {
        a = obterNumero('Digite o número: ');
        if (a < 0) {
            console.log('Não é possível calcular raiz quadrada de número negativo!');
        }
    } while (a < 0);
    
    try {
        const resultado = calc.raizQuadrada(a);
        console.log(`√${a} = ${resultado}`);
    } catch (error) {
        console.log('Erro:', error.message);
    }
}

console.log('Bem-vindo à Calculadora Node.js!');
calcular();