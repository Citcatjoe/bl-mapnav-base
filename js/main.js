(function($){

	// data = [
    //     { 
    //         title: 'titre 1',
    //         chapeau: 'chapeau 1'
    //     },
    //     { 
    //         title: 'titre 2',
    //         chapeau: 'chapeau 2'
    //     }	
	// ];
	// console.log(data);

    // buildCards(data);
    // function buildCards(data){
    //     var source   = $("#card-template").html();
    //     var template = Handlebars.compile(source);
    //     var html = template({'card':data});
    //     $(".authors").prepend(html); 
    // }
    setTimeout(function() { 
        $('body').addClass('is-visible');
    }, 1000);

    setTimeout(function() { 
        $('.scroller').addClass('is-visible');
    }, 6000);
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: "fade",
        speed: 200,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.apres',
          prevEl: '.avant',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });

   

    
    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}});

    new ScrollMagic.Scene({triggerElement: ".trigger0"})
    .on("enter", function (event) {
            var i = parseInt($('.trigger0').parent().attr('id').slice(-1));
            swiper.slideTo(i+1);
            $('.scroller').removeClass('is-visible');
    }).triggerHook(0.8).addIndicators().addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".trigger1"})
    .on("enter", function (event) {
            var i = parseInt($('.trigger1').parent().attr('id').slice(-1));
            swiper.slideTo(i+1);
            $('.scroller').removeClass('is-visible');
    }).triggerHook(0.8).addIndicators().addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".trigger2"})
    .on("enter", function (event) {
        var i = parseInt($('.trigger2').parent().attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addIndicators().addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".trigger3"})
    .on("enter", function (event) {
        var i = parseInt($('.trigger3').parent().attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addIndicators().addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".trigger4"})
    .on("enter", function (event) {
        var i = parseInt($('.trigger4').parent().attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addIndicators().addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: ".trigger5"})
    .on("enter", function (event) {
        var i = parseInt($('.trigger5').parent().attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addIndicators().addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".trigger6"})
    .on("enter", function (event) {
        var i = parseInt($('.trigger6').parent().attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addIndicators().addTo(controller);
        
    function previousImage(){
        
        var i = parseInt($('.trigger:in-viewport').parent().attr('id').slice(-1));
        console.log(i);
        swiper.slideTo(i);
    }
    function nextImage(){
        var i = parseInt($('.trigger:in-viewport').parent().attr('id').slice(-1))+1;
        console.log(i);
        swiper.slideTo(i);
    }

})(jQuery);