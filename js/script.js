$(function(){
    let cash = '.left-area li'
    $(cash).on('click', function(){
        $(cash).removeClass('active');
        $(this).addClass('active');
    });

    $('button.navbar-toggle').on('click',function(){
        $('ul.navbar-nav').slideToggle();
    });
});
