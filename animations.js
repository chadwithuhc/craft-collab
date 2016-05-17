$(document).ready(function () {
  
  var pulsed;
  
  $('.dots1').animate({ width: 862 }, 5000, function () {
    $('.question-mark').show();
    
    pulsed = setInterval(function () {
      $('.question-mark').removeClass('pulse');
      setTimeout(function () {
        $('.question-mark').addClass('pulse');
      }, 100);
    }, 3000);
  });
  
  $('.question-mark').one('click', function () {
    clearInterval(pulsed);
    $('.about').animate({ height: 380 }, 1000, function () {
      $('.about').css({ overflow: 'visible' });
      $('.avatar-group').animate({ opacity: 1, left: '+=100' });
    });
  });
  
  
  
});