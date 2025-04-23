$('#header-include').load("html/header.html", function(){
  const gnbCount = $('li.depth1-li').length;
  //lnb width Fn, setting
  function lnbWidthFn(){
    const navWidth = $('nav').outerWidth();
    const gnbLeft = $('.gnb').offset().left;
    for(let i = 0; i< gnbCount; i++){
      $('li.depth1-li').eq(i).find('.lnb-title').width(gnbLeft-160);
      $('.lnb').eq(i).width(navWidth);
      $('.lnb').eq(i).css('left', -gnbLeft);
    };
  };
  lnbWidthFn();
  //media query
  $(window).on('resize', function(){
    lnbWidthFn();
  });
  //lnb height setting
  const depth2ulHeight = [];
  for(let i = 0; i< gnbCount; i++){
    let lnbTitleHeight = $('li.depth1-li').eq(i).find('ul.depth2-ul').outerHeight(true);
    if(lnbTitleHeight < 440) lnbTitleHeight = 380
    depth2ulHeight.push(lnbTitleHeight+60+"px");
    $('li.depth1-li').eq(i).find('.lnb-title').css('height', $(depth2ulHeight).get(i));
  };
  for(let i = 0; i< gnbCount; i++){
    let lnbHeight = $(depth2ulHeight).get(i);
    $('li.depth1-li').eq(i).find('.lnb-title').css('height', lnbHeight);
  };
  //lnb slide down event
  $('li.depth1-li').on('mouseenter', function(){
    let idx = $(this).index();
    let currentHeight = $(depth2ulHeight).get(idx);
    $(this).find('.lnb:not(:animated)').animate({height: currentHeight}, 500, 'linear');
  });
  $('li.depth1-li').on('mouseleave', function(){
    $(this).siblings().find('.lnb').finish();
    $(this).find('.lnb').animate({height: 0 + "px"}, 500, 'linear');
  });
  //language select
  $('.language-change').on('click', function(){
    $(this).find('ul.options').toggle()
    $(this).toggleClass('active');
  });
});
$('#footer-include').load("html/footer.html", function(){
  $('footer .other-site button').on('click', function(){
    $(this).parent().find('ul.sites').toggle();
    $(this).toggleClass('menu-on');
  });
});