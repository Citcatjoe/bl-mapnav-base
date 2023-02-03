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
    var $swiper0Slides = $('.swiper0 .swiper-slide')
    console.log($swiper0Slides);
    setTimeout(function() { 
        $('body').addClass('is-visible');
    }, 1000);

    setTimeout(function() { 
        $('.scroller').addClass('is-visible');
    }, 6000);
    
    


    const swiper0 = new Swiper('.swiper0', {
        direction: 'vertical',
        loop: false,
        effect: "fade",
        speed: 200,
        allowTouchMove: false,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.apres0',
          prevEl: '.avant0',
        }
      
       
    })
    
    .on('activeIndexChange', function () {
        
        //console.log(swiper0.previousIndex);
            // controllers.each(function() {
            //     this.enabled(false);
            // });
            //
            controllers[0].enabled(false);
            controllers[1].enabled(false);
            controllers[2].enabled(false);
            // console.log('controllers['+swiper0.previousIndex+'] devrait etre disabled');
            // controllers[swiper0.previousIndex].enabled(false);
            
            
            // setTimeout(function() { 
            //     $('.swiper0 .swiper-slide').scrollTop(0);
            //     // $swiper0Slides[swiper0.previousIndex].scrollTop(0);
            // }, 2000);
            
            setTimeout(function() { 
                // console.log('controllers['+swiper0.activeIndex+'] devrait etre enabled');
                alert('controller'+swiper0.previousIndex+' était '+controllers[swiper0.previousIndex].enabled());
                //alert(controllers[swiper0.previousIndex].enabled());
                controllers[swiper0.previousIndex].enabled(false);
               // alert(controllers[swiper0.previousIndex].enabled());
                alert('controller'+swiper0.previousIndex+' est maintenant '+controllers[swiper0.previousIndex].enabled());
            }, 2000);

            setTimeout(function() { 
                alert('CA REMONTE');
                $('.swiper0 .swiper-slide').scrollTop(0);
            }, 3000);

            setTimeout(function() { 
                // console.log('controllers['+swiper0.activeIndex+'] devrait etre enabled');
                //alert(controllers[swiper0.activeIndex].enabled());
                alert('controller'+swiper0.activeIndex+' était '+controllers[swiper0.activeIndex].enabled());
                controllers[swiper0.activeIndex].enabled(true);
                //alert(controllers[swiper0.activeIndex].enabled());
                alert('controller'+swiper0.activeIndex+' est maintenant '+controllers[swiper0.activeIndex].enabled());
            }, 4000);
            
            
            
            //alert((swiper0.activeIndex)+1);
            //controller2.enabled(false);
        // setTimeout(function() { 
        //     alert('go');
        //     controller.enabled(true);
        // }, 5000);
     });

    // function makeDisappear(previousIndex){
    //     var slide = $('#slide' + previousIndex);
    //     console.log(previousIndex+1);
    //     $('.swiper0 .swiper-slide:nth-child('+(previousIndex+1)+')').addClass('is-hidden');
    // }

    const swiper1 = new Swiper('.swiper1', {
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
          nextEl: '.apres1',
          prevEl: '.avant1',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });

    

    var controllers = [
        new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}}), //controllers[0]
        new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}}), //controllers[1]
        new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}})  //controllers[2]
    ];
    controllers[0].enabled(false);
    controllers[1].enabled(false);
    controllers[2].enabled(false);
    
    // var controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}});
    // controller2.enabled(false);

    // new ScrollMagic.Scene({triggerElement: ".s0t1"})
    // .on("enter", function (event) {
    //        alert('s0t1');
    // }).triggerHook(0.8).addIndicators().addTo(controllers[0]);

    new ScrollMagic.Scene({triggerElement: ".s0t1"})
    .on("enter", function (event) {
           alert('EVENT SLIDE 0');
    }).triggerHook(0.8).addIndicators().addTo(controllers[0]);

    new ScrollMagic.Scene({triggerElement: ".s1t1"})
    .on("enter", function (event) {
           alert('EVENT SLIDE 1');
    }).triggerHook(0.8).addIndicators().addTo(controllers[1]);
    
    new ScrollMagic.Scene({triggerElement: ".s2t1"})
    .on("enter", function (event) {
           alert('EVENT SLIDE 2');
    }).triggerHook(0.8).addIndicators().addTo(controllers[2]);
    

})(jQuery);