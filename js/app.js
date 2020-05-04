$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
  
  var btn = $('#topButton');
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  




  $(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
      if ($('.timeline-content').hasClass('js--fadeInLeft')) {
        $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
      }
  
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '30px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
    } else {
      
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '30px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '30px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
    }
    
    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '30px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
  
  });





  (function () {

    // Setting up the options
    var options = {
        startLength: 0, // start positioning the slider items at the beginning of the SVG path
        duration: 3000, // animation duration (used by anime.js)
        stagger: 15, // incrementally delays among items, producing an staggering effect
        easing: 'easeOutElastic', // easing function (used by anime.js)
        elasticity: 600, // elasticity factor (used by anime.js)
        rotate: true // This indicates that items should be rotated properly to match the SVG path curve
    };

    // Initialize the slider using our SVG path, items, and options
    new PathSlider('.path-slider__path', '.path-slider__item', options);

})();

