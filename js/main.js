//loading menu

setTimeout(function(){
    $('.loading').fadeToggle();
}, 2500);
//mobile menu

function openNav(){
    document.getElementById("myNav").style.height="60%";
}
function closeNav(){
    document.getElementById("myNav").style.height="0%";
}
    //sticky menu
$(document).ready(function(){
    
    $(".stcky-section").waypoint(function(direction){
        if(direction == "down"){
                $("nav").addClass("sticky");
            }   else{
                    $("nav").removeClass("sticky");
            }
    });
});
//service toggle
$(document).ready(function(){
    $(".symbl1").click(function(){
        $(".symbl1").toggleClass("active");
        $(".details1").toggle(500);
    });
    $(".symbl2").click(function(){
        $(".symbl2").toggleClass("active");
        $(".details2").toggle(500);
    });
    $(".symbl3").click(function(){
        $(".symbl3").toggleClass("active");
        $(".details3").toggle(500);
    });
}) ;


//carousel 
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
    }
});
    //backspacing 

var typed = new Typed('.backspacing', {
strings: [
    'Freelancer', 
    'Web Designer',
    'Web Developer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});
//skill 

var skillsDiv = jQuery('#skills');

jQuery(window).on('scroll', function() {
  var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
  if (winT + winH > skillsT) {
    jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
      }, 4000);
    });
  }
});

//mix it up

var mixer = mixitup('.project');
//smooth
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});
//active button
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
$(document).on('click', '.btn-acnt', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
//AOS 
AOS.init();






//scrollspy
var spy = new Gumshoe('#my-awesome-nav a');


