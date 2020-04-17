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

  