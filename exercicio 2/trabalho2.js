let valor1 = prompt('Digite o valor a ser multiplicado.');

if(querMultiplicacaoEspecifica){
    let valor2 = prompt('Digite o segundo valor da multiplicaçao:');

    alert (`O resultado foi ${valor1 * valor2}`);
}
else{
    let i = 0;
    let textoDoAlert = ''
    
    while(i <= 10){
        textoDoAlert += `${valor1} * ${i} = ${Number(valor1) * Number(i)} \n` ;
        i++;
    }

    alert(textoDoAlert)
}