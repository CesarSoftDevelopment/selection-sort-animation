
btn = document.querySelector("#btn");
btnSelectionSort = document.querySelector("#btnSelectionSort");
line = document.querySelector(".line");
btnDelete = document.querySelector("#btnDelete");

let array = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

    var numero_gerado = shuffle(array);

btnDelete.onclick = function() {
    removeItem();
}

function removeItem() {
    let td = document.querySelectorAll('li');

    for(let i = 0; i <  td.length; i++){
        line.removeChild(td[i]);
    }
}

btn.onclick = function() {
       const td = document.createElement('li');
       td.innerHTML = numero_gerado;
       line.appendChild(td);
    }


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



