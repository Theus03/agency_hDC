$(document).ready(function() {
    
    let circles = document.querySelectorAll(".circle");

    // iniciando o loader quando o usuário chegar na section
    let dataAreaOffset = $("#data-area").offset();
    
    circles.forEach(circle => {
        circle = new ProgressBar.Circle(circle, {
            color: '#64DAF9',
            strokeWidth: 8,
            duration: 1400,
            from: { color: "#AAA" },
            to: { color: "#65DAF9" },
    
            step: function (state, circle) {
                circle.path.setAttribute("stroke", state.color);
    
                let value  = Math.round(circle.value() * circle._container.dataset.value);
    
                circle.setText(value);
            }
            
        });
        
        $(window).scroll(function(e) {
            let scroll = $(window).scrollTop();
    
            if (scroll > (dataAreaOffset.top - 800)) {
                circle.animate(1.0);
            }
        });
    });

    // Parallax
    setTimeout(function() {
        $("#data-area").parallax({imageSrc: "img/cidadeparallax.png"})
        $("#apply-area").parallax({imageSrc: "img/cidadeparallax.png"})
    }, 250);

    // Filtro do Portfólio

    $(".filter-btn").on("click", function() {
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $(".main-btn").removeClass("active");
        $(this).addClass("active");

        type = type.replaceAll("btn", "").replaceAll("-", "");
        
        eachBoxes(type, boxes);
    });

    function eachBoxes(type, boxes) {
        type = type.replace("btn-", "");
        if (type == "all"){
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if (!$(this).hasClass(type)){
                    $(this).fadeOut("slow");
                } else {
                    $(this).fadeIn();
                }
            })
        }
    }

    // scroll para seções
    let navBtn = $(".nav-item");

    let bannerSection = $("#mainSlider");
    let aboutSection = $("#about-area");
    let servicesSection = $("#services-area");
    let teamSection = $("#team-area");
    let portfolioSection = $("#portfolio-area");
    let contactSection = $("#contact-area");

    let scrollTo = "";

    $(navBtn).click(function () {
        let btnId = $(this).attr("id");
        console.log(btnId);
        
        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top -70
        }, 1500)
    });


});