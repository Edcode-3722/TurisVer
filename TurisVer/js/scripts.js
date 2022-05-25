$(document).ready(function(){
    

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
    
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');


    //FILTRO
    $('.category_item').click(function(){
        var catLugar = $(this).attr('category');
        console.log(catLugar); 
        //AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //OCULTANDO LUGARES
        //

        $('.product-item').css('transform', 'scale(0)')
        function hideLugar(){
            $('.product-item').hide();
        }setTimeout(hideLugar,400);

        //MOSTRANDO LUGARES

        function showLugar(){
            $('.product-item[category="'+catLugar+'"]').show();
            $('.product-item[category="'+catLugar+'"]').css('transform', 'scale(1)');

             
        }setTimeout(showLugar,400);
        
 

    });

    //MOSTRANDO TODOS LOS PRODUCTOS
    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform', 'scale(1)');
        }setTimeout(showAll,400)
        
    });

});