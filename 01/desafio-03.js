const date = '2019-10-26T23:01:57.336Z';
var arrayData = date.split('');
var newArrayData = arrayData.splice(0, 16);

function moveElementArray(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}

const index1 = newArrayData.indexOf('-');
if (index1 !== -1) {
    newArrayData[index1] = '/';
};

const index2 = newArrayData.indexOf('-');
if (index2 !== -1) {
    newArrayData[index2] = '/';
};

const index3 = newArrayData.indexOf('T');
if (index3 !== -1) {
    newArrayData[index3] = ' ';
};

moveElementArray(newArrayData, 8, 0);
moveElementArray(newArrayData, 9, 1);
moveElementArray(newArrayData, 9, 2);
moveElementArray(newArrayData, 8, 3);
moveElementArray(newArrayData, 9, 4);
moveElementArray(newArrayData, 9, 5);

var dataFormatada = newArrayData.join('');
var newArrayDataSemHora = newArrayData.splice(0, 10);
var dataFormatadaSemHora = newArrayDataSemHora.join('');

console.log(dataFormatada);
console.log(dataFormatadaSemHora);