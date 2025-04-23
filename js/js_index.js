'use strict';
// scroll
const sec3Title = document.querySelector('#sec3 .title');
const sec3Poster = document.querySelector('#sec3 .event-poster')
const sec4Special = document.querySelector('#sec4 .special-exhibit');
const sec4Permanent = document.querySelector('#sec4 .permanent-exhibit');
const sec4Title = document.querySelector('#sec4 .permanent-exhibit .title');
const sec5Board = document.querySelector('#sec5 .board-con');
const sec5Bottom = document.querySelector('#sec5 .schedule-con');
//section2 - main banner
const mainBannerCurrent = document.querySelector("#sec2 .current-num");
const mainBannerTotal = document.querySelector("#sec2 .total-num");
const mainBannerNext = document.querySelector('#sec2 .left-arrow');
const mainBannerBack = document.querySelector('#sec2 .right-arrow');
const mainBannerPause = document.querySelector('#sec2 .pause');
const mainBannerUl = document.querySelector('#sec2 .slide_ul');
const mainBannerUlLi = document.querySelectorAll('#sec2 .slide_ul li.slide_li');
//section3 - right-con: event poster img
const eventUl = document.querySelector('.event-sec .event-info ul');
const eventLi = document.querySelectorAll('.event-sec .event-info ul > li');
const eventTitle = document.querySelectorAll('.event-sec .event-info ul .title');
const eventPoster = document.querySelector('.event-sec .event-poster img');
//section4 - right-con: slide gallery
const exhibitImgSlide = document.querySelector('.exhibit-slide .img-gallery');
const exhibitImgSlideUlLi = document.querySelectorAll('.exhibit-slide .img-gallery ul li');
const exhibitSlideTotalNum = document.querySelector('.exhibit-slide .slide-controls .total-num');
const exhibitSlideCurrentNum = document.querySelector('.exhibit-slide .slide-controls .current-num');
const exhibitTxtSlide = document.querySelector('.exhibit-slide .info-gallery');
const exhibitTxtSlideUlLi = document.querySelectorAll('.exhibit-slide .info-gallery ul li');
const exhibitTxtTitle = document.querySelectorAll('.exhibit-slide .info-gallery ul li .exhibit-title');
const exhibitTxtSub = document.querySelectorAll('.exhibit-slide .info-gallery ul li .exhibit-sub');
const exhibitrCurrent = document.querySelector('.exhibit-slide .slide-controls .current-num');
const exhibitrTotal = document.querySelector('.exhibit-slide .slide-controls .total-num');
const exhibitrNext = document.querySelector('.exhibit-slide .slide-controls .left-arrow');
const exhibitrBack = document.querySelector('.exhibit-slide .slide-controls .right-arrow');
const exhibitrPause = document.querySelector('.exhibit-slide .slide-controls .pause');
//section5: board
const boardTitle = document.querySelector('#sec5 .board-con .title h2');
const boardTitleUl = document.querySelector('#sec5 .board-con .title ul');
const boardTitleLi = document.querySelectorAll('#sec5 .board-con .title ul li')
const boarBodydUl = document.querySelectorAll('#sec5 .board-con ul.board');
//section5: calendar
const weekNum = document.querySelector('.schedule-con .week-num');
const currentWeekDates = document.querySelectorAll('.calendar-table li span.date');
//section5: fade gallery
const popupUlLi = document.querySelectorAll('#sec5 .popup-con .popup-gallery ul li');
const popupTotalNum = document.querySelector('#sec5 .popup-con .popup-controls .total-num');
const popupCurrentNum = document.querySelector('#sec5 .popup-con .popup-controls .current-num');
const popupBack = document.querySelector('#sec5 .popup-con .popup-controls .left-arrow');
const popupNext = document.querySelector('#sec5 .popup-con .popup-controls .right-arrow');
const popupPause = document.querySelector('#sec5 .popup-con .popup-controls .pause');
// scroll
window.addEventListener("scroll", function(){
  let value = this.window.scrollY;
  if(value > 150){
    sec3Title.classList.add('scollAniFirst');
    eventUl.classList.add('scollAniSecond');
    sec3Poster.classList.add('scollAniSecond');
  }else{
    sec3Title.classList.remove('scollAniFirst');
    eventUl.classList.remove('scollAniSecond');
    sec3Poster.classList.remove('scollAniSecond');
  } 
  if(value > 1200){
    sec4Title.classList.add('scollAniFirst');
    sec4Permanent.classList.add('scollAniSecond');
    sec4Special.classList.add('scollAniSecond');
  }else{
    sec4Title.classList.remove('scollAniFirst');
    sec4Permanent.classList.remove('scollAniSecond');
    sec4Special.classList.remove('scollAniSecond');
  }
  if(value > 2500){
    sec5Board.classList.add('scollAniFirst');
    sec5Bottom.classList.add('scollAniSecond');
  }else{
    sec5Board.classList.remove('scollAniFirst');
    sec5Bottom.classList.remove('scollAniSecond');
  }
})
//section2 - main banner
mainBannerTotal.innerText = "0" + (mainBannerUlLi.length - 2);
const bgArr = [];
for(let i = 0; i < mainBannerUlLi.length; i++){
  bgArr.push(`url(img/banner${i}.jpeg) no-repeat center / cover`);
  mainBannerUlLi[i].style.background = bgArr[i];
};
let i = 0;
function mainBannerSlider(){
  i++;
  mainBannerCurrent.innerText = "0" + i;  
  
  const gap = mainBannerUlLi[1].offsetLeft - mainBannerUlLi[0].offsetLeft;
  const goto = (-i * gap) + "px";
  
  if(i > mainBannerUlLi.length - 2){
    mainBannerUl.style.transition = '0ms';
    mainBannerUl.style.left = 0 + "px";
    i = 0;
    setTimeout(mainBannerSlider, 0);
  }else{
    mainBannerUl.style.left = goto;
    mainBannerUl.style.transition = 'all ease 0.4s';
  }
};
let mainBannerInterval = setInterval(mainBannerSlider, 4000);
(()=>{mainBannerSlider()})();
//section2 - main banner controlls
let mainBannerPauseTrigger = true;
mainBannerPause.addEventListener('click', function(e){
  if(mainBannerPauseTrigger){
    clearInterval(mainBannerInterval);
    mainBannerPauseTrigger = false;
    e.target.classList.add('replay');
  }else{
    mainBannerInterval = setInterval(mainBannerSlider, 4000);
    mainBannerPauseTrigger = true;
    e.target.classList.remove('replay');
  }
});
mainBannerNext.addEventListener('click', function(){
  i++;
  const gap = mainBannerUlLi[1].offsetLeft - mainBannerUlLi[0].offsetLeft;
  const goto = (-i * gap) + "px";
  if(i > mainBannerUlLi.length - 2){
    mainBannerUl.style.transition = '0ms';
    mainBannerUl.style.left = 0 + "px";
    i = 0;
    setTimeout(mainBannerSlider, 0);
  }else{
    mainBannerUl.style.left = goto;
    mainBannerUl.style.transition = 'all ease 0.4s';
  }
  mainBannerCurrent.innerText = "0" + i;  
});
mainBannerBack.addEventListener('click', function(){
  i--;
  const gap = mainBannerUlLi[1].offsetLeft - mainBannerUlLi[0].offsetLeft;
  const goto = (-i * gap) + "px";
  if(i < 1){
    mainBannerUl.style.transition = '0ms';
    mainBannerUl.style.left = ((mainBannerUlLi.length - 1) * -gap) + "px";
    i = mainBannerUlLi.length - 3;
    setTimeout(mainBannerSlider, 0);
  }else{
    mainBannerUl.style.left = goto;
    mainBannerUl.style.transition = 'all ease 0.4s';
  }
  mainBannerCurrent.innerText = "0" + i;  
});
function triggerFn(e){
  if(e.type == "mouseover"){
    if(mainBannerPauseTrigger){
      clearInterval(mainBannerInterval);
    }else{
      return
    }
  }else if(e.type == "mouseout"){
    if(mainBannerPauseTrigger){
      mainBannerInterval = setInterval(mainBannerSlider, 4000);
    }else{
      return
    }
  }
};
mainBannerBack.addEventListener('mouseover', triggerFn);
mainBannerBack.addEventListener('mouseout', triggerFn);
mainBannerNext.addEventListener('mouseover', triggerFn);
mainBannerNext.addEventListener('mouseout', triggerFn);
//section3 - right-con: event poster img
eventUl.addEventListener('mouseover', function(e){
  eventLi.forEach((el, idx)=>{
    if(e.target == el.firstElementChild){
      eventPoster.setAttribute('alt', eventTitle[idx].innerText);
      eventPoster.setAttribute('src', `img/sec3_${idx}.jpeg`);
    };
  });
});
//section4 - right-con: slide gallery
const exhibitInfoArr = [
  {title: '고대문화실', sub: '고대문화실: 대구, 경북 지역에서 출토된 선사시대부터 삼국시대까지 고고, 역사 관련 유물을 소개하는 전시실입니다.'},
  {title: '중세문화실', sub: '중세문화실: 대구, 경북 지역의 불교문화와 유교문화를 소개하는 전시실입니다. 대구, 경북 지역에서 출토되거나 관련이 있는 문화재와 자료를 중심으로 대구, 경북 지역의 불교 문화와 유교문화의 특징을 살펴볼 수 있도록 구성하였습니다.'},
  {title: '중세문화실', sub: '실, 직조, 색채, 옷이라는 4개의 키워드를 통해 과거부터 현재까지 우리 옷의 기원에 대해 전반적으로 소개하는 전시실입니다. 옷이 되기까지의 과정과 우리 옷의 전통적인 아름다움을 살펴볼 수 있도록 구성하였습니다.'}
];
exhibitTxtTitle.forEach((el, idx)=>{
  el.innerText = exhibitInfoArr[idx].title;
});
exhibitTxtSub.forEach((el, idx)=>{
  el.innerText = exhibitInfoArr[idx].sub;
});
// sedtion4: img & txt slider
const exhibitImgArr = []
for(let i = 0; i < exhibitImgSlideUlLi.length; i++){
  exhibitImgArr.push(`url(img/sec4_${i}.jpeg) no-repeat 50%/cover`);
  exhibitImgSlideUlLi[i].style.background = exhibitImgArr[i];
};
function exhibitAutoFn(num){
  const exhibitImgGap = exhibitImgSlideUlLi[1].offsetLeft - exhibitImgSlideUlLi[0].offsetLeft;
  const exhibitImgGoto = (-num * exhibitImgGap) + "px";
  const exhibitTxtGap = exhibitTxtSlideUlLi[1].offsetWidth;
  const exhibitTxtGoto = (-num * exhibitTxtGap) + "px";
  exhibitTxtSlide.style.transition = 400 + "ms";
  exhibitTxtSlide.style.left = exhibitTxtGoto;
  exhibitImgSlide.style.transition = 400 + "ms";
  exhibitImgSlide.style.left = exhibitImgGoto;
  exhibitSlideCurrentNum.innerText = "0"+(1+j);
}
let j = -1;
function exhibitSlider(){
  j++;
  exhibitAutoFn(j)
  if(j>=exhibitImgSlideUlLi.length - 1) j = -1;
}
let setExhibitIn = setInterval(exhibitSlider, 4000);
(()=>{exhibitSlider()})();
// section4: controls
exhibitSlideTotalNum.innerText = "0"+exhibitImgSlideUlLi.length;
let exhibitTrigger = true;
exhibitrPause.addEventListener('click', function(){
  if(exhibitTrigger){
    clearInterval(setExhibitIn);
    exhibitrPause.classList.add('replay')
    exhibitTrigger=false;
  }else{
    setExhibitIn = setInterval(exhibitSlider, 4000);
    exhibitrPause.classList.remove('replay')
    exhibitTrigger=true;
  }
});
exhibitrNext.addEventListener('mouseover', function(){
  if(exhibitTrigger){
    clearInterval(setExhibitIn);
  }else{
    return;
  }
});
exhibitrNext.addEventListener('mouseout', function(){
  if(exhibitTrigger){
    setExhibitIn = setInterval(exhibitSlider, 4000);
  }else{
    return;
  }
});
exhibitrNext.addEventListener('click', function(e){
  j++;
  if(j >= exhibitImgSlideUlLi.length) j = 0;
  exhibitAutoFn(j);
});
exhibitrBack.addEventListener('click', function(e){
  j--;
  if(j < 0) j = exhibitImgSlideUlLi.length - 1;
  exhibitAutoFn(j);
});
exhibitrBack.addEventListener('mouseover', function(){
  if(exhibitTrigger){
    clearInterval(setExhibitIn);
  }else{
    return;
  }
});
exhibitrBack.addEventListener('mouseout', function(){
  if(exhibitTrigger){
    setExhibitIn = setInterval(exhibitSlider, 4000);
  }else{
    return;
  }
});
//section5: board
boardTitleUl.addEventListener('click', boardTitleFn);
function boardTitleFn(e){
  if(e.type == 'click'){
    boardTitleLi.forEach((el, idx)=>{
      if(e.target == el){
        el.classList.add('board-title-on');
        boardTitle.innerText = el.innerText;
        boarBodydUl.forEach((el2, idx2)=>{
          if(idx==idx2){
            el2.classList.remove('board-off');
          }else{
            el2.classList.add('board-off');
          }
        })
      }else{
        el.classList.remove('board-title-on');
      }
    });
  };
};
//section5: calendar
let month = new Date().getMonth();
let year = new Date().getFullYear();
let date = new Date().getDate();
let currentMonthFirstDate = new Date(year, month, 1).getDay();
let lastMonthLastDay = new Date(year, month, 0);
let currentMonthLastDay = new Date(year, month+1, 0);
let firstDay = new Date(year,month,1).getDay();
let currentMonthDays = [];
for(let i = 0; i<currentMonthFirstDate;i++){
  currentMonthDays.push(lastMonthLastDay.getDate() - i);
};
for(let i = 0; i<currentMonthLastDay.getDate();i++){
  currentMonthDays.push(i+1);
};
for(let i = 0;i<6-currentMonthLastDay.getDay();i++){
  currentMonthDays.push(i+1);
};
// let fourWeeksDays = currentMonthDays.splice(0,28);
currentMonthDays.forEach((el, idx)=>{
  if(el == date){
    const weekStart = parseInt(idx / 7)+1;
    weekNum.innerText = `${month+1}월 ${weekStart}주차`;
    for(let i = 0; i<currentWeekDates.length;i++){
      currentWeekDates[i].firstElementChild.innerText = (weekStart-1)*7+i-1;
    };
  };
});
//section5: fade gallery
const fadeBgArr = [];
for(let i = 0; i<popupUlLi.length; i++){
  fadeBgArr.push(`url(img/sec5_${i}.jpeg) no-repeat 50%/cover`);
  popupUlLi[i].style.background = fadeBgArr[i];
}
function fadeGallery(num){
  popupUlLi.forEach((el, idx)=>{
    if(num == idx){
      el.classList.add('fade-on');
      popupCurrentNum.innerText = "0"+(num+1);
    }else{
      el.classList.remove('fade-on');
    }
  })
};
let k = -1;
function autoFade(){
  k++;
  if(k>popupUlLi.length-1){
    k=0;
  }else if(k<0){
    k=2;
  }
  fadeGallery(k);
}
let fadeIn = setInterval(autoFade, 4000);
(()=>{autoFade()})();
popupTotalNum.innerText = "0"+popupUlLi.length;
let fadeTrigger = true;
popupPause.addEventListener('click', function(){
  if(fadeTrigger){
    clearInterval(fadeIn);
    fadeTrigger = false;
    this.classList.add('replay');
  }else{
    fadeIn = setInterval(autoFade, 4000);
    fadeTrigger = true;
    this.classList.remove('replay');
  }
});
popupNext.addEventListener('mouseover', function(){
  if(fadeTrigger){
    clearInterval(fadeIn);
  }else{
    return;
  }
});
popupNext.addEventListener('mouseout', function(){
  if(fadeTrigger){
    fadeIn = setInterval(autoFade, 4000);
  }else{
    return;
  }
});
popupBack.addEventListener('mouseover', function(){
  if(fadeTrigger){
    clearInterval(fadeIn);
  }else{
    return;
  }
});
popupBack.addEventListener('mouseout', function(){
  if(fadeTrigger){
    fadeIn = setInterval(autoFade, 4000);
  }else{
    return;
  }
});
popupNext.addEventListener('click', function(){
  k++;
  if(k>=popupUlLi.length) k = 0;
  fadeGallery(k);
});
popupBack.addEventListener('click', function(){
  k--;
  if(k<0) k = popupUlLi.length - 1;
  fadeGallery(k);
});
