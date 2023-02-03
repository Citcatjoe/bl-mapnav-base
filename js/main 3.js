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

    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}});
    var scene;

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
        navigation: {
          nextEl: '.apres0',
          prevEl: '.avant0',
        }
    })
    .on('activeIndexChange', function () {
            destroyScene();
            setTimeout(function() { 
                setScene();
            }, 2000);
    });

    const swiper1 = new Swiper('.swiper1', {
        direction: 'vertical',
        loop: true,
        effect: "fade",
        speed: 200,
        navigation: {
          nextEl: '.apres1',
          prevEl: '.avant1',
        }
    }); 

    

    function setScene(){
        switch (swiper0.activeIndex) { 
            case 0: 
                console.log('Loading slide 0 scene');
                scene = new ScrollMagic.Scene({triggerElement: ".s0t1"})
                .on("enter", function (event) {
                    alert('EVENT SLIDE 0');
                }).triggerHook(0.8).addIndicators().addTo(controller);
               
                break;
            case 1: 
                console.log('Loading slide 1 scene');
                scene = new ScrollMagic.Scene({triggerElement: ".s1t1"})
                .on("enter", function (event) {
                    alert('EVENT SLIDE 1');
                }).triggerHook(0.8).addIndicators().addTo(controller);
               
                break;
            case 2: 
                console.log('Loading slide 2 scene');
                scene = new ScrollMagic.Scene({triggerElement: ".s2t1"})
                .on("enter", function (event) {
                    alert('EVENT SLIDE 2');
                }).triggerHook(0.8).addIndicators().addTo(controller);
               
                break;
        }
    
    }   
    setScene();

    function destroyScene(){
        console.log('Destroying current scene');
        scene.destroy(true);
        scene = null

        setTimeout(function() { 
            console.log('Go up now');
            $('.swiper0 .swiper-slide').scrollTop(0);
        }, 1000);
        
    }

})(jQuery);