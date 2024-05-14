'use strict';
// scroll
const sec3Title = document.querySelector('#sec3 .title');
const sec3RightCon = document.querySelector('.sec3-right')
const sec4Title = document.querySelector('#sec4 .sec4-right .title');
const sec4Permanent = document.querySelector('#sec4 .permanent-exhibits');
const sec4Special = document.querySelector('#sec4 .special-exhibits');
const sec5Top = document.querySelector('#sec5 .sec5-top');
const sec5Bottom = document.querySelector('#sec5 .sec5-bottom');
window.addEventListener("scroll", function(){
  let value = this.window.scrollY;
  if(value > 150){
    sec3Title.classList.add('scollAniFirst');
    eventUl.classList.add('scollAniSecond');
    sec3RightCon.classList.add('scollAniSecond');
  }else{
    sec3Title.classList.remove('scollAniFirst');
    eventUl.classList.remove('scollAniSecond');
    sec3RightCon.classList.remove('scollAniSecond');
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
    sec5Top.classList.add('scollAniFirst');
    sec5Bottom.classList.add('scollAniSecond');
  }else{
    sec5Top.classList.remove('scollAniFirst');
    sec5Bottom.classList.remove('scollAniSecond');
  }
})

// section2: main banner img slide
const mainBanner = document.querySelector('.slide-gallery');
const mainBannerUl = mainBanner.querySelector('ul');
const mainBannerUlLi = mainBannerUl.querySelectorAll('li');
// section2: main banner - controls
const sec2 = document.querySelector('#sec2');
const bannerTotalNum = sec2.querySelector('.total-num');
const bannerCurrentNum = sec2.querySelector('.current-num');
const bannerControls = sec2.querySelector(".slide-controls");
const bannerControlsBtn = bannerControls.querySelectorAll(".slide-btn");

// section2: main banner - img slider background img
const bannerBg = [];
for(let i = 0; i < mainBannerUlLi.length; i++){
  bannerBg.push(`url(img/banner${i}.jpeg) no-repeat 50%/cover`);
  mainBannerUlLi[i].style.background = bannerBg[i];
}

// section2: main banner - img slider 
function bannerAutoGo(num){
  const gap = mainBannerUlLi[3].offsetLeft - mainBannerUlLi[2].offsetLeft;
  const goto = (-num * gap - 770) + "px";
  mainBannerUl.style.left = goto;
  mainBannerUl.style.transition = 400 + "ms";
}

let i = -1;
function bannerSlider(){
  i++;
  const gap = mainBannerUlLi[3].offsetLeft - mainBannerUlLi[2].offsetLeft;
  const goto = (-i * gap - 770) + "px";
  if(i >= mainBannerUlLi.length - 2){
    mainBannerUl.style.left = "-" + 770 + "px";
    mainBannerUl.style.transition = 0 + "ms";
    i = -1;
    setTimeout(bannerSlider, 0);
  }else{
    mainBannerUl.style.left = goto;
    mainBannerUl.style.transition = 400 + "ms";
  }
  bannerCurrentNum.innerText = `0${i+1}`;
}
let setBannerIn = setInterval(bannerSlider, 4000);
(()=>{bannerSlider()})();

// section2: main banner - controls
bannerTotalNum.innerText = `0${mainBannerUlLi.length - 2}`;

bannerControls.addEventListener('mouseover', bannerArrowFn);
bannerControls.addEventListener('mouseout', bannerArrowFn);
bannerControls.addEventListener('click', bannerArrowFn);
let bannerSwitch = 0;
function bannerArrowFn(e){
  if(e.type == 'mouseover'){
    bannerControlsBtn.forEach((el, idx)=>{
      if(el == e.target){
        if(idx == 0){
          if(bannerSwitch == 0){
            clearInterval(setBannerIn);
          }
        }else if(idx == 3){
          if(bannerSwitch == 0){
            clearInterval(setBannerIn);
          }
        }
      }
    })
  }else if(e.type == 'mouseout'){
    bannerControlsBtn.forEach((el, idx)=>{
      if(el == e.target){
        if(idx == 0){
          if(bannerSwitch == 0){
            setBannerIn = setInterval(bannerSlider, 4000);
          }
        }else if(idx == 3){
          if(bannerSwitch == 0){
            setBannerIn = setInterval(bannerSlider, 4000);
          }
        }
      }
    })
  }else if(e.type == 'click'){
    bannerControlsBtn.forEach((el, idx)=>{
      if(el == e.target){
        console.log(e.target)
        if(idx==1){
          clearInterval(setBannerIn);
          el.classList.add('slide_btn_off');
          bannerControlsBtn[2].classList.remove('slide_btn_off');
          bannerSwitch=1;
        }else if(idx==2){
          setBannerIn = setInterval(bannerSlider, 4000);
          el.classList.add('slide_btn_off');
          bannerControlsBtn[1].classList.remove('slide_btn_off');
          bannerSwitch=0;
        }else if(idx==0){
          i++;
          if(i>=mainBannerUlLi.length - 2){
            mainBannerUl.style.left = "-" + 770 + "px";
            mainBannerUl.style.transition = 0 + "ms";
            i = -1;
            setTimeout(bannerSlider, 0);
          }
          bannerAutoGo(i)
          bannerCurrentNum.innerText = `0${i+1}`;
        }else if(idx==3){
          if(i<=0){
            mainBannerUl.left = "-" + mainBannerUlLi[5].offsetLeft + 770 + "px";
            mainBannerUl.style.transition = 0 + "ms";
            i = mainBannerUlLi.length - 2;
          }
          i--;
          bannerAutoGo(i)
          bannerCurrentNum.innerText = `0${i+1}`;
        }
      }
    })
  }
}

//section3 - right-con: event poster img
const eventUl = document.querySelector('.events_ul');
const eventLi = document.querySelectorAll('.events_ul > li');
const eventA = document.querySelectorAll('.events_ul > li > a')
const eventTitle = document.querySelectorAll('.events_ul .title');

eventUl.addEventListener('mouseover', posterImgFn);
function posterImgFn(e){
  const posterImg = document.querySelector('.sec3-right img');
  if(e.type == 'mouseover'){
    eventLi.forEach((el, idx)=>{
      if(e.target == eventA[idx]){
        posterImg.setAttribute('src', `img/sec3_${idx}.jpeg`);
        posterImg.setAttribute('alt', eventTitle[idx].innerText);
      }
    })
  }
}

//section4 - right-con: slide gallery
const exhibitImgSlideUl = document.querySelector('.exhibit_slide_ul');
const exhibitImgSlideUlLi = exhibitImgSlideUl.querySelectorAll('li');

const exhibitTxtSlide = document.querySelector('.exhibit-txt-slide');
const exhibitTxtSlideUl = exhibitTxtSlide.querySelector('ul');
const exhibitTxtSlideUlLi = exhibitTxtSlideUl.querySelectorAll('li');

const exhibitSlideControls = document.querySelector('#sec4 .slide-controls');
const exhibitSlideControlsBtn = exhibitSlideControls.querySelectorAll('.slide-btn');

const exhibitSlideTotalNum = exhibitSlideControls.querySelector('.total-num');
const exhibitSlideCurrentNum = exhibitSlideControls.querySelector('.current-num');

// section4: slide img background
const exhibitImgArr = []
for(let i = 0; i < exhibitImgSlideUlLi.length; i++){
  exhibitImgArr.push(`url(img/sec4_${i}.jpeg) no-repeat 50%/cover`);
  exhibitImgSlideUlLi[i].style.background = exhibitImgArr[i];
}

// sedtion4: img & txt slider
function exhibitSlieAutoGo(num){
  const exhibitGap = exhibitImgSlideUlLi[1].offsetLeft - exhibitImgSlideUlLi[0].offsetLeft;
  const exhibitGoto = (-num * exhibitGap) + "px";
  exhibitImgSlideUl.style.left = exhibitGoto;
  exhibitImgSlideUl.style.transition = 200 + "ms";
  exhibitTxtSlideUl.style.left = exhibitGoto;
  exhibitTxtSlideUl.style.transition = 200 + "ms";
}

let j = -1;
function exhibitSlider(){
  j++;
  const exhibitGap = exhibitImgSlideUlLi[1].offsetLeft - exhibitImgSlideUlLi[0].offsetLeft;
  const exhibitGoto = (-j * exhibitGap) + "px";
  if(j>exhibitImgSlideUlLi.length-1){
    exhibitImgSlideUl.style.left = 0;
    exhibitImgSlideUl.style.transition = 0 + "ms";
    
    exhibitTxtSlideUl.style.left = 0;
    exhibitTxtSlideUl.style.transition = 0 + "ms";

    j=0;

  }else{
    exhibitImgSlideUl.style.left = exhibitGoto;
    exhibitImgSlideUl.style.transition = 400 + "ms";
    
    exhibitTxtSlideUl.style.left = exhibitGoto;
    exhibitTxtSlideUl.style.transition = 400 + "ms";
  }
  exhibitSlideCurrentNum.innerText = "0"+(j+1);
}
let setExhibitIn = setInterval(exhibitSlider, 4000);
(()=>{exhibitSlider()})();

// section4: controls
exhibitSlideTotalNum.innerText = "0"+exhibitImgSlideUlLi.length;

exhibitSlideControls.addEventListener('click',exhibitBtnFn);
exhibitSlideControls.addEventListener('mouseover',exhibitBtnFn);
exhibitSlideControls.addEventListener('mouseout',exhibitBtnFn);

let exhibitSliderSwitch = 0;
function exhibitBtnFn(e){
  if(e.type == 'mouseover'){
    exhibitSlideControlsBtn.forEach((el, idx)=>{
      if(e.target == el){
        if(idx == 0){
          if(exhibitSliderSwitch == 0){
            clearInterval(setExhibitIn);
          }
        }else if(idx == 3){
          if(exhibitSliderSwitch == 0){
            clearInterval(setExhibitIn);
          }
        }
      }
    })
  }else if(e.type == 'mouseout'){
    exhibitSlideControlsBtn.forEach((el, idx)=>{
      if(e.target == el){
        if(idx == 0){
          if(exhibitSliderSwitch == 0){
            setExhibitIn = setInterval(exhibitSlider, 4000);
          }
        }else if(idx == 3){
          if(exhibitSliderSwitch == 0){
            setExhibitIn = setInterval(exhibitSlider, 4000);
          }
        }
      }
    })
  }else if(e.type == 'click'){
    exhibitSlideControlsBtn.forEach((el, idx)=>{
      if(e.target == el){
        if(idx == 1){
          clearInterval(setExhibitIn);
          exhibitSliderSwitch = 1;
          el.classList.add('slide_btn_off');
          exhibitSlideControlsBtn[2].classList.remove('slide_btn_off');
        }else if(idx == 2){
          setExhibitIn = setInterval(exhibitSlider, 4000);
          exhibitSliderSwitch = 0;
          el.classList.add('slide_btn_off');
          exhibitSlideControlsBtn[1].classList.remove('slide_btn_off');
        }else if(idx == 0){
          j++;
          if(j>exhibitImgSlideUlLi.length-1){j=0;}
          exhibitSlieAutoGo(j);
          exhibitSlideCurrentNum.innerText = "0"+(j+1);
        }else if(idx == 3){
          j--;
          if(j<0){j=2;}
          exhibitSlieAutoGo(j);
          exhibitSlideCurrentNum.innerText = "0"+(j+1);
        }
      }
    })
  }
}

//section5: board
const boardTitleUl = document.querySelector('.sec5-top .title ul')
const boardTitleLi = boardTitleUl.querySelectorAll('li');
const boardUl = document.querySelectorAll('.sec5-top ul.board');

boardTitleUl.addEventListener('click', boardTitleFn);
function boardTitleFn(e){
  if(e.type == 'click'){
    boardTitleLi.forEach((el, idx)=>{
      if(e.target == el){
        el.classList.add('board-title-on');
        boardUl.forEach((el2, idx2)=>{
          if(idx==idx2){
            el2.classList.remove('board-con-off');
          }else{
            el2.classList.add('board-con-off');
          }
        })
      }else{
        el.classList.remove('board-title-on');
      }
    })
  }
}

//section5: fade gallery
const popup = document.querySelector('.popup');
const popupUl = document.querySelector('ul.fade_ul');
const popupUlLi = document.querySelectorAll('ul.fade_ul > li');

const popupControlsUl = document.querySelector('#sec5 .slide-controls');
const popupControlsLi = document.querySelectorAll('.popup .slide-controls .slide-btn');
const fadeTotalNum = document.querySelector('.popup .total-num');
const fadeCurrentNum = document.querySelector('.popup .current-num');

//section5: fade gallery - img background
const fadeBgArr = [];

for(let i = 0; i<popupUlLi.length; i++){
  fadeBgArr.push(`url(img/sec5_${i}.jpeg) no-repeat 50%/cover`);
  popupUlLi[i].style.background = fadeBgArr[i];
}

//section5: fade gallery  - img
function fadeGallery(num){
  popupUlLi.forEach((el, idx)=>{
    if(num == idx){
      el.classList.add('fade-on');
      fadeCurrentNum.innerText = "0"+(num+1);
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

// section5: fade gallery controls
fadeTotalNum.innerText = "0"+popupUlLi.length;
popupControlsUl.addEventListener('mouseover', fadeBtnFn);
popupControlsUl.addEventListener('mouseout', fadeBtnFn);
popupControlsUl.addEventListener('click', fadeBtnFn);

let fadeSwitch = 0;
function fadeBtnFn(e){
  popupControlsLi.forEach((el, idx)=>{
    if(e.target == el){
      if(e.type == 'click'){
        if(idx == 1){
          el.classList.add('slide_btn_off');
          popupControlsLi[2].classList.remove('slide_btn_off');
          clearInterval(fadeIn);
          fadeSwitch = 1;
        }else if(idx == 2){
          el.classList.add('slide_btn_off');
          popupControlsLi[1].classList.remove('slide_btn_off');
          fadeSwitch = 0;
          fadeIn = setInterval(autoFade, 4000);
        }else if(idx == 0){
          k--;
          if(k<0){k=2}
          fadeGallery(k);
        }else if(idx == 3){
          k++;
          if(k>popupUlLi.length-1){k=0;}
          fadeGallery(k);
        }
      }else if(e.type == 'mouseover'){
        if(fadeSwitch == 0){
          if(idx == 0){
            clearInterval(fadeIn);
          }else if(idx == 3){
            clearInterval(fadeIn);
          }
        }
      }else if(e.type == 'mouseout'){
        if(fadeSwitch == 0){
          if(idx == 0){
            fadeIn = setInterval(autoFade, 4000);
          }else if(idx == 3){
            fadeIn = setInterval(autoFade, 4000);
          }
        }
      }
    }
  })
}