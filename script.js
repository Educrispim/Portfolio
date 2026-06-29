const elementoTexto = document.getElementById('digitando-texto');
const palavras = ["Dev", "GameDev", "Entusiasta"];
let indicePalavra = 0;
let indiceCaractere = 0;
let apagando = false;

function digitar() {
    if (!elementoTexto) return;

    const palavraAtual = palavras[indicePalavra];
    
    if (apagando) {
        elementoTexto.textContent = palavraAtual.substring(0, indiceCaractere - 1);
        indiceCaractere--;
    } else {
        elementoTexto.textContent = palavraAtual.substring(0, indiceCaractere + 1);
        indiceCaractere++;
    }

    let velocidadeDigitacao = apagando ? 100 : 200;

    if (!apagando && indiceCaractere === palavraAtual.length) {
        velocidadeDigitacao = 2500; // Tempo de pausa com a palavra completa
        apagando = true;
    } else if (apagando && indiceCaractere === 0) {
        apagando = false;
        indicePalavra++;
        if (indicePalavra >= palavras.length) {
            indicePalavra = 0;
        }
        velocidadeDigitacao = 500; // Tempo antes de começar a digitar a próxima
    }

    setTimeout(digitar, velocidadeDigitacao);
}

document.addEventListener("DOMContentLoaded", () => {
    digitar();
});

