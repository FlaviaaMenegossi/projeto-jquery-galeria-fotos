$(document).ready(function() {
    $('header button').click(function (){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoNovaImagem =  $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src='${endereçoNovaImagem}' />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link"> 
            <a href="${endereçoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                ver imagem em tamanho real
            </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#endereço-imagem-nova').val('')

    })

});