$(document).ready(function(){
    $("#phone_2").mask("+7(999) 999-9999");

});

$(document).ready(function(){
    $('.reviews').slick({
        slidesToShow: 2,
        
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
        
    });
    $('.questions__question').on('click', function() {
        var column = $(".questions__question").attr('data-text');
        var text = $("#openModal").attr('data-column');
        $('#openModal').slideToggle(100);
        $('.questions__question').toggleClass('questions__questionheader', 100);

    });
  });
