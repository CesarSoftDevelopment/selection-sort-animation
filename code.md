## Selection sort

**Selection Sort** é a ideia de selecionar o próximo valor mais baixo e acompanhá-lo até chegarmos ao final da matriz, depois trocá-lo com o limite direito do classificado seção do array.

1 - Variáveis para pegar os elementos do html

```
btn = document.querySelector("#btn");
btnSelectionSort = document.querySelector("#btnSelectionSort");
line = document.querySelector(".line");
btnDelete = document.querySelector("#btnDelete");
```

2 - Um array de números para sortear
```
let array = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];
```

3 - Função para sortear os números do array 

```
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
   var numero_gerado = shuffle(array);
```

4 - Função para remover elemento html

```
function removeItem() {
    let td = document.querySelectorAll('li');

    for(let i = 0; i <  td.length; i++){
        line.removeChild(td[i]);
    }
}
```
```
5 - Função para adicionar número na página html

btn.onclick = function() {
       const td = document.createElement('li');
       td.innerHTML = numero_gerado;
       line.appendChild(td);
    }
```

6 - Função para o algoritmo "Selection Sort" de forma declementar

```
btnSelectionSort.onclick = function() {
    removeItem();
    function selectionSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
      
          let minIndex = i;
          for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
              minIndex = j;
            }     
          }
          [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
       return array;
      }
       const td = document.createElement('li');
        td.innerHTML = selectionSort(numero_gerado);
        line.appendChild(td);
    }

```

##### Explicação da função 

1 - Criar um loop para implementar toda a lógica da aplicação e retornar o array.

Vamos parar o loop inicial antes do comprimento total do array

```

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {

  }
  return array;
}
```
2 - Em seguida, declararemos a variável que conterá o índice do nosso menor elemento atual, minIndex e o segundo loop que fará nosso trabalho de comparação:

```
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {

    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {

    }

  }
  return array;
}
```

3 - Se array[j] < array[minIndex]. Se for, isso significa que j deve ser trocado para o final de nossa seção ordenada (a menos que um valor ainda mais baixo seja encontrado). Fazemos isso configurando minIndex = j.


```
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {

    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }     
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
```

