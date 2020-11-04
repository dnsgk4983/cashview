$(function(){
    let cash = '.left-area li'
    $(cash).on('click', function(){
        $(cash).removeClass('active');
        $(this).addClass('active');
    });

    $('button.navbar-toggle').on('click',function(){
        $('ul.navbar-nav').slideToggle();
    });

    let mf = '.info-mf a';
    $(mf).on('click', function(){
        $(mf).removeClass('active');
        $(this).addClass('active');
    });
});
