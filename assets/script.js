let valor1 = Number(prompt('Digite o primeiro numero:'));
let valor2 = Number(prompt('Digite mais um numero:'));
let soma = valor1 + valor2

while (isNaN(valor1) || isNaN(valor2)){
    if (isNaN(valor1)){
        valor1 = Number(prompt('Digite novamente o primeiro numero:'));
    }

    if (isNaN(valor2)){
        valor2 = Number(prompt('Digite novamente o primeiro numero:'));
    }
}


if (soma >= 100){
    alert(`O resultado da soma foi ${soma}`);
}