$(document).ready(function(){


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