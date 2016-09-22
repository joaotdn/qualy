$(document).foundation();

(function($) {

    /**
     * Menu mobile
     */
    //Botão abrir/fechar menu
    $('*[data-show-menu]').click(function (e) {
        e.preventDefault();
        $('#wrapper').toggleClass('move');
        $('.close-mo-menu, #mo-menu').toggleClass('active');
    });

    //Clonar menu
    $('ul','#main-menu').clone().appendTo('#mo-menu').addClass('vertical');


})(jQuery);
