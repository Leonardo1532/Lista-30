// 1. Crie um algoritmo onde você deve criar um array que receba 5 números positivos
// ou negativos, depois de popular esse array você deve substituir os valores
// POSITIVOS pelo número 1 e os negativos por -1.
// let numeros: number[] = []
// for (let index = 0; index < 5; index++) {
//     let numero = parseInt(prompt("Insira um número positivo ou negativo"))
//     numeros.push(numero)
//     if (numeros[index] > 0) {
//         numeros[index] = 1
//     } else if (numeros[index] < 0) {
//         numeros[index] = -1
//     }
// }
// console.log(numeros)
// 2. Faça um algoritmo que peça para o usuário digitar 5 números e salve em um array,
// porém, se o usuário digitar um número que já foi inserido, o seu programa deve
// pedir para ele digitar outro número.
var numeros2 = [];
var valido = false;
for (var index = 0; index < 5; index++) {
    while (valido == false) {
        var numero2 = parseInt(prompt("Digite um número"));
        if (numeros2.includes(numero2)) {
            alert("Número ja existente");
        }
        else {
            numeros2.push(numero2);
            valido = true;
        }
    }
    valido = false;
}
console.log(numeros2);
// 3. Crie um algoritmo com dois vetores e os preencha com números inteiros e
// positivos, o usuário deve dizer quando não quer mais inserir valores mas os vetores
// devem ter a mesma quantidade de números. Depois crie um terceiro vetor que irá
// receber apenas os números que estão em ambos os vetores anteriores ou forem
// ímpar.
// Ex.: entrada - arrayA[2,3,4,8,1] arrayB[7,4,1,6,8]
// saída - arrayC[3,4,8,1]
// 4. Faça um algoritmo que leia um array, e o preencha com números inteiros, se esse
// array tiver alguma posição com valor zero você deve eliminar essa posição.
// Ex.: entrada - array[2,6,8,0,6,4,3,2,0,7]
// saída - array[2,6,8,6,4,3,2,7]
// let arrayA = []
// let arrayB = []
// let arrayC = []
// let continuar = true
// while (continuar == true) {
//     let numeroA = parseInt(prompt("Insira um número para o Array A"))
//     arrayA.push(numeroA)
//     let numeroB = parseInt(prompt("Insira um número para o Array B"))
//     arrayB.push(numeroB)
//     let desejaContinuar = prompt("Deseja continuar inserindo valores nos vetores? s ou n")
//     if (desejaContinuar != "s") {
//         continuar = false
//     }
// }
// for (let index = 0; index < arrayA.length; index++) {
//     if (arrayA[index] == arrayB[index]) {
//         arrayC.push(arrayA[index])
//     }
//     if (arrayA[index] % 2 != 0) {
//         arrayC.push(arrayA[index])
//     }
//     if (arrayB[index] % 2 != 0) {
//         arrayC.push(arrayB[index])
//     }
// }
// console.log(arrayA)
// console.log(arrayB)
// console.log(arrayC)
