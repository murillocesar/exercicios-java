let valores = [];
let valoresOrdenados = [];
// let i = 0;
// while(i < 10){
//     valores.push(prompt('Digite um numero:'));
//     i++;
// }

for( let i =0; i < 10; i++){
    valores.push(prompt('Digite um numero:'));
}

for( let i =0; i < valores.length; i ++){
    let valorAtual = valores[i];
    let j = i -1; 
    let indice = i;
    
    if(j >=0) {
    while (j >=0) {
        let valorAnterior = valoresOrdenados[j];

            if (valorAtual < valorAnterior){
            indice = j;
            }
        }
    }
    valoresOrdenados.splice(indice, 0, valorAtual);
}

console.log(valores);
console.log(valoresOrdenados);