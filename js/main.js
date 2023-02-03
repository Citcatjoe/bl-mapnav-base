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

    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 111}});
    var scene;
    var scene2;
    var array = [];

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
                
                // array[0] = new ScrollMagic.Scene({triggerElement: ".s0t1"})
                // .on("enter", function (event) {
                //     alert('EVENT SLIDE 0');
                // }).triggerHook(0.8).addIndicators().addTo(controller);
                // array[1] = new ScrollMagic.Scene({triggerElement: ".s0t2"})
                // .on("enter", function (event) {
                //     alert('EVENT SLIDE 0');
                // }).triggerHook(0.8).addIndicators().addTo(controller);
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
                // console.log('Loading slide 1 scene');
                // array[0] = new ScrollMagic.Scene({triggerElement: ".s1t1"})
                // .on("enter", function (event) {
                //     alert('EVENT SLIDE 1');
                // }).triggerHook(0.8).addIndicators().addTo(controller);
                // array[1] = new ScrollMagic.Scene({triggerElement: ".s1t1"})
                // .on("enter", function (event) {
                //     alert('EVENT SLIDE 1');
                // }).triggerHook(0.8).addIndicators().addTo(controller);
                break;
            case 2: 
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
                // console.log('Loading slide 2 scene');
                // array[0] = new ScrollMagic.Scene({triggerElement: ".s2t1"})
                // .on("enter", function (event) {
                //     alert('EVENT SLIDE 2');
                // }).triggerHook(0.8).addIndicators().addTo(controller);
                // array[1] = new ScrollMagic.Scene({triggerElement: ".s2t1"})
                // .on("enter", function (event) {
                //     alert('EVENT SLIDE 2');
                // }).triggerHook(0.8).addIndicators().addTo(controller);
                break;
        }
    
    }   
    //setScene();

    function destroyScene(){
        console.log('Loop of destruction comes...')
        for (var i=0; i<array.length; i++) {
            array[i].destroy(true);
            array[i] = null;
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
        alert('CODE FONCTION C');
    }

    function actionD(){
        alert('CODE FONCTION D');
    }

    function actionE(){
        alert('CODE FONCTION E');
    }

    function actionF(){
        alert('CODE FONCTION F');
    }

})(jQuery);