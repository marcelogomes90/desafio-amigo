const data = new Date().toISOString();
const dataFormatada = data.split('');
var mes = mesPorExtenso(dataFormatada);

function mesPorExtenso(arrData) {
    if (arrData[5] == 0 && arrData[6] == 1) {
        return mes = 'Janeiro';
    } else if (arrData[5] == 0 && arrData[6] == 2) {
        return mes = 'Fevereiro';
    } else if (arrData[5] == 0 && arrData[6] == 3) {
        return mes = 'Março';
    } else if (arrData[5] == 0 && arrData[6] == 4) {
        return mes = 'Abril';
    } else if (arrData[5] == 0 && arrData[6] == 5) {
        return mes = 'Maio';
    } else if (arrData[5] == 0 && arrData[6] == 6) {
        return mes = 'Junho';
    } else if (arrData[5] == 0 && arrData[6] == 7) {
        return mes = 'Julho';
    } else if (arrData[5] == 0 && arrData[6] == 8) {
        return mes = 'Agosto';
    } else if (arrData[5] == 0 && arrData[6] == 9) {
        return mes = 'Setembro';
    } else if (arrData[5] == 1 && arrData[6] == 0) {
        return mes = 'Outubro';
    } else if (arrData[5] == 1 && arrData[6] == 1) {
        return mes = 'Novembro';
    } else if (arrData[5] == 1 && arrData[6] == 2) {
        return mes = 'Dezembro';
    } else {
        return mes = 'Data inválida';
    };
}

console.log(mes);