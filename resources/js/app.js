// ⋰·⋰
window.$ = window.jQuery = require('jquery');

$( document ).ready(function() {
    console.log( "ready!" );
    $('[rel="dropdown-toggle"]').click(function(){
        if(!$(this).hasClass('open')){
            $('[rel="dropdown-toggle"]').removeClass('open');
        }
        $(this).toggleClass('open');
    });
});