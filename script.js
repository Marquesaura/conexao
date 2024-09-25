function leiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var maisTexto1 = document.getElementById("mais1");
    var maisTexto2 = document.getElementById("mais2");
    var maisTexto3 = document.getElementById("mais3");
    var maisTexto4 = document.getElementById("mais4");
    var maisTexto5 = document.getElementById("mais5");
    var maisTexto6 = document.getElementById("mais6");
    var maisTexto7 = document.getElementById("mais7");
    var maisTexto8 = document.getElementById("mais8");
    var btnLeiaMais = document.getElementById("btnLeiaMais");
    var btnLeiaMais1 = document.getElementById("btnLeiaMais1");
    var btnLeiaMais2 = document.getElementById("btnLeiaMais2");
    var btnLeiaMais3 = document.getElementById("btnLeiaMais3");
    var btnLeiaMais4 = document.getElementById("btnLeiaMais4");
    var btnLeiaMais5 = document.getElementById("btnLeiaMais5");
    var btnLeiaMais6 = document.getElementById("btnLeiaMais6");
    var btnLeiaMais7 = document.getElementById("btnLeiaMais7");
    var btnLeiaMais8 = document.getElementById("btnLeiaMais8");
    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        maisTexto.style.display = "none";
        maisTexto1.style.display = "none";
        maisTexto2.style.display = "none";
        maisTexto3.style.display = "none";
        maisTexto4.style.display = "none";
        maisTexto5.style.display = "none";
        maisTexto6.style.display = "none";
        maisTexto7.style.display = "none";
        maisTexto8.style.display = "none";

        btnLeiaMais.innerHTML = "Saiba Mais";
        btnLeiaMais1.innerHTML = "Saiba Mais";
        btnLeiaMais2.innerHTML = "Saiba Mais";
        btnLeiaMais3.innerHTML = "Saiba Mais";
        btnLeiaMais4.innerHTML = "Saiba Mais";
        btnLeiaMais5.innerHTML = "Saiba Mais";
        btnLeiaMais6.innerHTML = "Saiba Mais";
        btnLeiaMais7.innerHTML = "Saiba Mais";
        btnLeiaMais8.innerHTML = "Saiba Mais";

    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        maisTexto1.style.display = "inline";
        maisTexto2.style.display = "inline";
        maisTexto3.style.display = "inline";
        maisTexto4.style.display = "inline";
        maisTexto5.style.display = "inline";
        maisTexto6.style.display = "inline";
        maisTexto7.style.display = "inline";
        maisTexto8.style.display = "inline";

        btnLeiaMais.innerHTML = "Voltar";
        btnLeiaMais1.innerHTML = "Voltar";
        btnLeiaMais2.innerHTML = "Voltar";
        btnLeiaMais3.innerHTML = "Voltar";
        btnLeiaMais4.innerHTML = "Voltar";
        btnLeiaMais5.innerHTML = "Voltar";
        btnLeiaMais6.innerHTML = "Voltar";
        btnLeiaMais7.innerHTML = "Voltar";
        btnLeiaMais8.innerHTML = "Voltar";
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