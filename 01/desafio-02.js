const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArrayPares = [];

function numerosPares(item) {
    if (item % 2 === 0) {
        newArrayPares.push(item);
    };
};

function numerosPares2(item) {
    return item % 2 === 0;
}

arrayNumeros.forEach(numerosPares);
console.log(newArrayPares);

var newArrayPares2 = arrayNumeros.filter(numerosPares2);
console.log(newArrayPares2);

