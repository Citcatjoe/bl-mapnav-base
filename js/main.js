(function($){

	

    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 200}});
    
    var array = [];

    $( ".sw-link" ).click(function() {
        var link = $(this).attr('sw-link');
        var slider = link.slice(1, 2);
        var page =  link.slice(3, 4);
        alert('swiper' + slider + '.slideTo(' + page + ')');

        eval('swiper' + slider + '.slideTo(' + page + ')');
        
      });

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
        loop: false,
        effect: "fade",
        speed: 200,
        allowTouchMove: false,
        navigation: {
          nextEl: '.apres1',
          prevEl: '.avant1',
        }
    }); 

    

    function setScene(){
        //var array = [];
        switch (swiper0.activeIndex) { 
            case 0: 
                console.log('Loop of creation comes...');
                $( ".swiper-slide-active *[data-sm]").each(function( index ) {
                    var dataSm = $(this).attr('data-sm');
                    
                    
                    array[index] = new ScrollMagic.Scene({triggerElement: this})
                    .on("enter", function (event) {
                        eval(dataSm + "()");
                    }).triggerHook(0.8).addIndicators().addTo(controller);
                });
               
                break;
            case 1: 
                console.log('Loop of creation comes...');
                $( ".swiper-slide-active *[data-sm]").each(function( index ) {
                    var dataSm = $(this).attr('data-sm');
                    
                    //window[dataSm]();
                    
                    array[index] = new ScrollMagic.Scene({triggerElement: this})
                    .on("enter", function (event) {
                        eval(dataSm + "()");
                        //alert('EVENT SLIDE '+swiper0.activeIndex+' '+dataSm);
                    }).triggerHook(0.8).addIndicators().addTo(controller);
                });
               
                break;
            case 2: 
                console.log('Loop of creation comes...');
                $( ".swiper-slide-active *[data-sm]").each(function( index ) {
                    var dataSm = $(this).attr('data-sm');
                    
                    
                    array[index] = new ScrollMagic.Scene({triggerElement: this})
                    .on("enter", function (event) {
                        eval(dataSm + "()");
                        //alert('EVENT SLIDE '+swiper0.activeIndex+' '+dataSm);
                    }).triggerHook(0.8).addIndicators().addTo(controller);
                });
               
                break;
        }
    
    }   
    //setScene();

    function destroyScene(){
        console.log('Loop of destruction comes...')
        for (var i=0; i<array.length; i++) {
            array[i].destroy(true);
            //array[i] = null;
        }
        
        

        setTimeout(function() { 
            console.log('Go up now');
            $('.swiper0 .swiper-slide').scrollTop(0);
        }, 1000);
        
    }

    // STORYTELLING FUNCTIONS
    function actionA(){
        alert('CODE FONCTION A');
        
    }

    function actionB(){
        alert('CODE FONCTION B');
    }

    function actionC(){
      
        swiper1.slideTo(2);
    }

    function actionD(){
        //alert('CODE FONCTION D');
        swiper1.slideTo(3);
    }

    function actionE(){
        alert('CODE FONCTION E');
    }

    function actionF(){
        alert('CODE FONCTION F');
    }

})(jQuery);