$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    var typed = new Typed(".typing", {
        strings:["Desenvolvimento", "Designer", "Marketing"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings:["Desenvolvimento", "Designer", "Marketing"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

    // Manipulador de eventos para o clique no botão "FALE CONOSCO"
    $('a[href="https://wa.me/5583998545395"]').click(function(){
        // Você pode adicionar um console.log para verificar se o manipulador de eventos está sendo acionado
        console.log("Clique no botão 'FALE CONOSCO'");

        // Adicione qualquer outra lógica que você deseja executar quando o botão é clicado

        // Este return false evita que o link padrão seja seguido. Se não quiser isso, remova esta linha.
        return false;
    });
});
