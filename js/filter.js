$(document).ready(function(){
    $('.all').click(function(){
        $('.web').removeClass('active-btn');
        $('.app').removeClass('active-btn');
        $('.card').removeClass('active-btn');
        $(this).addClass('active-btn');

        $('.img_app').show();
        $('.img_web').show();
        $('.img_card').show();
        position();

    })
    $('.app').click(function(){
        $('.all').removeClass('active-btn');
        $('.card').removeClass('active-btn');
        $('.web').removeClass('active-btn');
        $(this).addClass('active-btn');

        $('.img_app').removeAttr('style').show();
        $('.img_web').hide();
        $('.img_card').hide();
        show_img();
        
    })
    $('.card').click(function(){
        $('.all').removeClass('active-btn');
        $('.app').removeClass('active-btn');
        $('.web').removeClass('active-btn');
        $(this).addClass('active-btn');

        $('.img_card').removeAttr('style').show();
        $('.img_web').hide();
        $('.img_app').hide();
        show_img();
    })
    $('.web').click(function(){
        $('.all').removeClass('active-btn');
        $('.app').removeClass('active-btn');
        $('.card').removeClass('active-btn');
        $(this).addClass('active-btn');

        $('.img_web').removeAttr('style').show();
        $('.img_app').hide();
        $('.img_card').hide();
        show_img();
    })
});