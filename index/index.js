const texto = "123456789";
let i = 0;

function animarTexto() {
    const titulo = document.querySelector('.banner-conteudo-titulo-texto');
    titulo.textContent = texto.slice(0, i);
    i = (i + 1) % (texto.length + 1);
}

setInterval(animarTexto, 200);