function formatarData(data, pattern) {
    var arrayData = data.split('');
    var newArrayData = arrayData.splice(0, 10);
    
    const index1 = newArrayData.indexOf('-');
    if (index1 !== -1) {
        newArrayData[index1] = '/';
    };
    
    const index2 = newArrayData.indexOf('-');
    if (index2 !== -1) {
        newArrayData[index2] = '/';
    };
    
    moveElementArray(newArrayData, 8, 0);
    moveElementArray(newArrayData, 9, 1);
    moveElementArray(newArrayData, 9, 2);
    moveElementArray(newArrayData, 8, 3);
    moveElementArray(newArrayData, 9, 4);
    moveElementArray(newArrayData, 9, 5);

    if (pattern == 'DD/MM/YYYY') {
        var diaMesAno = newArrayData.join('');
        return diaMesAno;
    } else if (pattern == 'DD/MM') {
        newArrayData = newArrayData.splice(0, 5);
        var diaMes = newArrayData.join('');
        return diaMes;
    } else if (pattern == 'DD') {
        newArrayData = newArrayData.splice(0, 2);
        var dia = newArrayData.join('');
        return dia;
    } else {
        var dataInvalida = 'Formato de data inválido';
        return dataInvalida;
    };

};    

function moveElementArray(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
};

const dataFormatada = formatarData(new Date().toISOString(), 'DD/MM/YYYY');

console.log(dataFormatada);