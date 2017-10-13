document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
    var dataText = [ "Welcome", "Web Designer", "AhmedKarray.me",];
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector(".head-txt h1").innerHTML = text.substring(0, i+3) +'<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 900);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

$( function () {
    
    
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll >= 700) {
        $(".Serv").addClass("navbar-fixed-top");
    }});
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 700) {
        $(".Serv").removeClass("navbar-fixed-top");
    }});
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll >= 300) {
        $(".adv").addClass("margintop");
    }});
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 350) {
        $(".adv").removeClass("margintop");
    }});
    $('.d-arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.mobile-serv').offset().top
        }, 950);
    });
    $('.header').height($(window).height());
    $('.d-arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.Serv').offset().top
        }, 950);
    });
});
