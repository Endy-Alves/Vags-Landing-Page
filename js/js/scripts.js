function leiamais () {
    var pontos = document.getElementById('pontos');
    var maistexto = document.getElementById('mais');
    var btnleiamais = document.getElementById('btnleiamais');

    if (pontos.style.display === 'none'){
        pontos.style.display='inline';
        maistexto.style.display='none';
        btnleiamais.innerHTML='Leia mais';
    }
    else {
        pontos.style.display='none';
        maistexto.style.display='inline';
        btnleiamais.innerHTML='Leia menos';
    }
}