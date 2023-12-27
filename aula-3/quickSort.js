const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita) {
    //temos que ir diminuindo o array até ele ter 1 elemento
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        //caso da esquerda
        if (esquerda < indiceAtual - 1) {
           quickSort(array, esquerda, indiceAtual - 1); 
        }
        //cado da direita
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
    return array;
}

function particiona(array, esquerda, direita) {
    console.log('array', array);
    console.log('esquerda', 'direita', esquerda, direita);
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda; //0
    let atualDireita = direita; //10

    while (atualEsquerda <= atualDireita) {
        //iteração da esquerda para direita
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++
        }

        //iteração da direita para esquerda
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    //função vai retornar o indice que vamos usar como marcador de término do próximo array
    return atualEsquerda;
}


console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
