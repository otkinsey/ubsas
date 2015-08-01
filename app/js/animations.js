/*Image Slider*/

/**************/

/*Sliding Info Panels*/
$('body').on('click', '.large_slide_control', function(){
    $(this).animate({left:"216px"},600);
    $(this).addClass("return");
    $('.side_panel').animate({right:"14px"}, 600);
  });
$('body').on('click', '.return', function(){
      $(this).animate({left:"30px"},600);
      $(this).removeClass("return");
      $('.side_panel').animate({right:"216px"}, 600);
    });

$('body').on('click', '.small_slide_control', function(){
    $('.welcome_links').css("display","none");
    $(this).animate({"left":"303px"}, 600);
    $(this).addClass("back");
    $('.contact').animate({right:"3px"}, 600).css({"display":"inline-block"});
  });
$('body').on('click', '.back', function(){
    $(this).animate({left:"5px"},600);
    $(this).removeClass("back");
    $('.contact').animate({right:"300px"}, 600);
    setTimeout(function(){
      //$('.large_separator').show();
      $('.contact').css({"display":"none"});
      $('.welcome_links').fadeIn(500);
    }, 1100);
    //$('.contact').css({"display":"none"});
  });
/**************/
/*Image Slider*/

/**************/
/*Image Slider*/

/**************/
