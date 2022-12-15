$(document).ready(function(){
    $("#phone_2").mask("+7(999) 999-9999");

});

$(document).ready(function(){
    $('.reviews').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
        
    });


    $('.navigation__lang').on('click', function(){
        $('.navigation__buttons > div').toggleClass('active', 1100);


        
    });


    $('.mobile-menu__link').on('click', function(){
        $('.mobile-menu__container').toggleClass("disactive");
        $('.mobile-menu__btn').addClass("disactive");


        
    });

    
   


    





    
    $('.one').on('click', function() {
        $('#openModal-one').toggleClass("open", 300);
    });

    $('.two').on('click', function() {
        $('#openModal-two').toggleClass("open", 300);
    });
    $('.three').on('click', function() {
        $('#openModal-three').toggleClass("open", 300);
    });
    $('.four').on('click', function() {
        $('#openModal-four').toggleClass("open", 300);
    });

    $('.five').on('click', function() {
        $('#openModal-five').toggleClass("open", 300);
    });

    $('.six').on('click', function() {
        $('#openModal-six').toggleClass("open", 300);
    });

    $('.seven').on('click', function() {
        $('#openModal-seven').toggleClass("open", 300);
    });

    $('.eight').on('click', function() {
        $('#openModal-eight').toggleClass("open", 300);
    });

    $('.nine').on('click', function() {
        $('#openModal-nine').toggleClass("open", 300);
    });

    $('.ten').on('click', function() {
        $('#openModal-ten').toggleClass("open", 300);
    });


    $('.eleven').on('click', function() {
        $('#openModal-eleven').toggleClass("open", 300);
    });

    $('.twelve').on('click', function() {
        $('#openModal-twelve').toggleClass("open", 300);
    });




    $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });

    

  });


//   function goDoSomething(identifier){     
//     $("data-id:"+$(identifier).data('id')+", data-option:"+$(identifier).data('option'));   
//     $('#openModal').slideToggle(100);
//     ('.questions__question').toggleClass('open', 100);
            
// }


// $('button').click(function(){
//     var data = $.parseJSON($(this).attr('data-button'));
//     alert(data.option1)
//   });