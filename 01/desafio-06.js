function retornaHtmlDinamico(total, itens) {
    let paginas = Math.ceil(total / itens)
    for (i = 1; i <= paginas; i++) {
        console.log(`<li>Página${i}</li>`);
    } 
}

const meuHtmlDinamico = retornaHtmlDinamico(15, 2);