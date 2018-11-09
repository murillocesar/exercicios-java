let valor = [];
let valorPouI= [];

for(let i=0; i<10; i++){
    valor.push (Number(prompt('Digite seu valor')));
}
for(let i = 0; i<valores.length; i++){
    let valorAtual = valor[i];
    if(valor % 2== 0){
        valorPouI.splice(i,0,valorAtual);
        console.log(`${valor} é par!`);
    }
    else{ 
        console.log(`${valor} é impar!`);
    }
}
