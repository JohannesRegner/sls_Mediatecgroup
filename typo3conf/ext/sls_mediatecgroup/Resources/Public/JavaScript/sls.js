$(document).ready(function(){


    $( ".leader_item_toggle" ).each(function(index) {
        $(this).on("click", function(){
            // For the boolean value
            $(this).find('i').toggleClass('fa fa-chevron-circle-down fa fa-chevron-circle-up');
            var text = $(this).find('span').text();
            $(this).find('span').text(
                text == "mehr anzeigen" ? "weniger anzeigen" : "mehr anzeigen");

            $(this).next('.leader_item_hiddentext').slideToggle();
        });
    });

    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[980,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        dots:true,
        nav:false,
        slideSpeed:1000,
        autoplay:true,
        loop:true
    });

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        $(".filter-button").removeClass('btn-fullcolor');
        $(this).addClass('btn-fullcolor');
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    var defaultOwlOptions = {
        itemClass: 'item',
        navContainerClass: 'nav',
        navClass: ['prev', 'next'],
        dotsClass: 'dots',
        dotClass: 'dot',
        loop: false,
        dots: true,
        nav: false,
        navText: ['&lsaquo;', '&rsaquo;'],
        responsive: {
            0: {items: 1, stagePadding: 20, margin: 5},
            480: {items: 2, stagePadding: 25, margin: 10},
            768: {items: 3, margin: 15},
            1024: {items: 3, margin: 30},
            1200: {items: 4, margin: 22.5, nav: true}
        }
    };



});