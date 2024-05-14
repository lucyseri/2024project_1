'use strict';
const depth2Ul01 = $('ul.ul_1').outerHeight(true)+"px";
const depth2Ul02 = $('ul.ul_2').outerHeight(true)+"px";
const depth2Ul03 = $('ul.ul_3').outerHeight(true)+"px";
const depth2Ul04 = $('ul.ul_4').outerHeight(true)+"px";
const depth2Ul05 = $('ul.ul_5').outerHeight(true)+"px";
const depth2Ul06 = $('ul.ul_6').outerHeight(true)+"px";
const depth2Ul07 = $('ul.ul_7').outerHeight(true)+"px";

const gnbtitle1 = $('.slide-gnb-1');
const gnbtitle2 = $('.slide-gnb-2');
const gnbtitle3 = $('.slide-gnb-3');
const gnbtitle4 = $('.slide-gnb-4');
const gnbtitle5 = $('.slide-gnb-5');
const gnbtitle6 = $('.slide-gnb-6');
const gnbtitle7 = $('.slide-gnb-7');

const slideLnb1 = $('.slide-lnb-1');
const slideLnb2 = $('.slide-lnb-2');
const slideLnb3 = $('.slide-lnb-3');
const slideLnb4 = $('.slide-lnb-4');
const slideLnb5 = $('.slide-lnb-5');
const slideLnb6 = $('.slide-lnb-6');
const slideLnb7 = $('.slide-lnb-7');

var depth2UlHeight = [
  depth2Ul01, depth2Ul02, depth2Ul03, 
  depth2Ul04, depth2Ul05, depth2Ul06, depth2Ul07
];
var gnbTitleArr = [
  gnbtitle1, gnbtitle2, gnbtitle3, gnbtitle4,
  gnbtitle5, gnbtitle6, gnbtitle7
]
var slideLnbArr = [
  slideLnb1, slideLnb2, slideLnb3, slideLnb4,
  slideLnb5, slideLnb6, slideLnb7
]
for(var a = 0; a<gnbTitleArr.length; a++){
  gnbTitleArr[a].css("height", depth2UlHeight[a])
  slideLnbArr[a].css("height", depth2UlHeight[a])
}

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