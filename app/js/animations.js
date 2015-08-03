/*Image Slider*/

/**************/

/*SLIDING INFO PANELS*/
/*left slidemenu*/
$('body').on('click', '.large_slide_control', function(){
    $(this).animate({left:"185px"},600);
    $(this).addClass("return");
    $('.side_panel').animate({left:"-30px"}, 600);
  });
$('body').on('click', '.return', function(){
      $(this).animate({left:"-30px"},600);
      $(this).removeClass("return");
      $('.side_panel').animate({left:"-244px"}, 600);
    });

/*contact panel*/
$('body').on('click', '.small_slide_menu, contact_info', function(){
  event.preventDefault();
    $('.welcome_links').css("display","none");
    $('.small_slide_menu').animate({"left":"300px"}, 600);
    $('.small_slide_menu').addClass("back");
    $('.contact').animate({left:"-300px"}, 600).css({"display":"inline-block"});
  });
$('body').on('click', '.back', function(){
    $(this).animate({left:"0px"},600);
    $(this).removeClass("back");
    $('.contact').animate({right:"300px"}, 600);
    setTimeout(function(){
      $('.contact').css({"display":"none"});
      $('.welcome_links').fadeIn(500);
    }, 1100);
  });
/**************/
/*Image Slider*/

/**************/
/*Image Slider*/

/**************/
