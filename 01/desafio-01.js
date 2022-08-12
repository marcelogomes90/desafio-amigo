const arrayNumeros = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];
var newArrayNumeros = [];

function novoArray(item) {
    if (typeof item == 'number') {
        if ((item+(item-1)) % 2 !== 0) {
            newArrayNumeros.push(item + (item-1) + 0.5);
        }
        newArrayNumeros.push(item + (item-1));
    }
}

arrayNumeros.forEach(novoArray);

console.log(newArrayNumeros);
