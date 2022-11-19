function leiamais () {
    var pontos=document.getElementsById("pontos");
    var maistexto=document.getElementsbyId("Mais");
    var btnleiamais=document.getElementsbyId("btnleiamais");

    if (pontos.style.display === "none"){
        pontos.style.display="inline";
        maistexto.style.display="none";
        btnleiamais.innerHTML="Leia mais";
    }
    else {
        pontos.style.display="none";
        maistexto.style.display="inline";
        btnleiamais.innerHTML="Leia menos";
    }
}