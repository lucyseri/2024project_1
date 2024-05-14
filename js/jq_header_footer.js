'use strict';

const mobileMenuOnBtn = $('.mobile-navi');
const mobileMenuOffBtn = $('.closed-btn');
const mobileNav = $('.mobile_nav');
const mobileNavCon = $('.mobile_nav > .mobile_nav_inner');
const mobileNavLiDepth1 = $('ul.mobile_depth1_ul > li.mobile_depth1_li');
const mobileNavLiDepth2 = $('li.mobile_depth2_li');

mobileMenuOnBtn.on('click',function(){
  mobileNav.css("display", "block");
  mobileNav.animate({opacity: "1"}, 300);
  mobileNavCon.animate({width: "320px"}, 300);
});

mobileMenuOffBtn.on('click', function(){
  mobileNav.css("display", "none");
  mobileNav.animate({opacity: "0"}, 0);
  mobileNavCon.animate({width: "0"}, 0);
});
mobileNavLiDepth1.on('click', function(e){
  e.stopPropagation();
  $(this).find('.mobile_depth2_ul').slideToggle();
});
mobileNavLiDepth2.on('click', function(e){
  e.stopPropagation();
  $(this).find('.mobile_depth3_ul').slideToggle();
});

const searchIcon = $('.search-icon');
const search = $('.search');
const searchClosed = $('.search-closed');
searchIcon.on('click', function(){
  search.css("display", "block");
});
searchClosed.on('click', function(){
  search.css("display", "none");
});



const footerFamilySiteDownBtn = $('.bottom-footer .sitemap button.down');
const footerFamilySiteUpBtn = $('.bottom-footer .sitemap button.up');
const footerFamilySiteSelect = $('.bottom-footer .sitemap ul.sites');

footerFamilySiteDownBtn.on('click', function(){
  footerFamilySiteSelect.css("display", "block");
  footerFamilySiteUpBtn.removeClass("family-site-off");
  $(this).addClass("family-site-off");
})
footerFamilySiteUpBtn.on('click', function(){
  footerFamilySiteSelect.css("display", "none");
  footerFamilySiteDownBtn.removeClass("family-site-off");
  $(this).addClass("family-site-off");
})