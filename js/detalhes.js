$(document).ready(function() {

    // ao clicar no botao voltar
    $(".btn-voltar").click(function(e) {
        e.preventDefault();
        
        // desloca a view wrapper de volta para a posicao original
        $(".views-container").css('transform', 'translateX(0)');
        
        // esconde o botao voltar na navbar
        $(this).addClass('hide');
        
        // esconde a view detalhes
        $(".view-detalhes").addClass('hide');
    });
});