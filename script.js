function leiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Saiba Mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Voltar";
    }
}
function leiaMais1() {
    var pontos1 = document.getElementById("pontos-farm");
    var maisTexto1 = document.getElementById("mais-farm");
    var btnLeiaMais1 = document.getElementById("btnLeiaMais-farm");

    if (pontos1.style.display === "none") {
        pontos1.style.display = "inline";
        maisTexto1.style.display = "none";
        btnLeiaMais1.innerHTML = "Saiba Mais";
    }
    else {
        pontos1.style.display = "none";
        maisTexto1.style.display = "inline";
        btnLeiaMais1.innerHTML = "Voltar";
    }
}
function leiaMaisCorpo() {

    var ponto = document.getElementById("ponto");
    var lerMais = document.getElementById("lerMais");
    var LeiaMais = document.getElementById("btnLeiaMais");

    if (ponto.style.display === "none") {
        ponto.style.display = "inline";
        lerMais.style.display = "none";
        LeiaMais.innerHTML = "Ler Mais";

    } else {
        ponto.style.display = "none";
        lerMais.style.display = "inline";
        LeiaMais.innerHTML = "Ler Menos";

    }
}