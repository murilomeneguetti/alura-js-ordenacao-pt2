const listaLivros = require('./array');

function encontraMenores(pivo, array) {
    let menores = 0;
    //menores -> qtd de itens menores que o pivo
    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }
    
    trocaLugar(array, array.indexOf(pivo), menores);
    
    return array;
}

function trocaLugar(array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}

function divideNoPivo(array) {
    //considerando como pivo o elemento do meio
    let pivo = array[Math.floor(array.length/2)];
    //console.log(pivo);
    //encontraMenores -> função q encontra o pivo e coloca ele no lugar certo
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    //passando os elementos que forem menores que o pivo para a esquerda do pivo
    for(let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo) {
            //console.log(array[analisando]);
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array;
}

//console.log(divideNoPivo(listaLivros));
// console.log(encontraMenores(listaLivros[2], listaLivros));

module.exports = trocaLugar;
