$(function(){

    var block0 = $('.form').offset().top;
    var blockA = $('.company').offset().top;
    var blockB = $('.gift').offset().top;
    var blockC = $('.spcompany-bg').offset().top;
    var blockD = $('.home').offset().top;
    
    $('.contact').click(function() {
        $('html,body').animate({scrollTop: block0}, 500)
        return false;
      });

    $('.cp').click(function() {
      $('html,body').animate({scrollTop: blockA}, 500)
      return false;
    });

    $('.gt').click(function() {
        $('html,body').animate({scrollTop: blockB}, 500)
        return false;
      });

    $('.spcp').click(function() {
      $('html,body').animate({scrollTop: blockC}, 500)
      return false;
    });
    
    $('.hm').click(function() {
        $('html,body').animate({scrollTop: blockD}, 500)
        return false;
      });

      $('.toTop').click(function(){
        $('html,body').animate({scrollTop: 0}, 500)
        return false;
      })
      
    
  })