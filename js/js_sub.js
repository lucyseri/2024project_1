'use strict';
const shareBtn = document.querySelectorAll('a.share-btn');
const shareBtnOn = shareBtn[0];
const shareBtnOff = shareBtn[1];
const shareSub = document.querySelector('#sec2 ul.sub');
const shareSubLi = document.querySelectorAll('#sec2 ul.sub li.sub');

shareBtnOn.addEventListener('click', shareClickFn);
shareBtnOff.addEventListener('click', shareClickFn);
function shareClickFn(e){
  e.preventDefault();
  if(e.type == 'click'){
    shareBtn.forEach((el, idx)=>{
      if(e.target == el.firstElementChild){
        if(idx == 0){
          el.classList.add('menu-closed');
          shareSub.classList.remove('menu-closed');
          shareBtnOff.classList.remove('menu-closed');
        }else if(idx == 1){
          el.classList.add('menu-closed');
          shareSub.classList.add('menu-closed');
          shareBtnOn.classList.remove('menu-closed');
        }
      }
    })
  }
}
shareSub.addEventListener('click', (e)=>{
  shareSubLi.forEach((el, idx)=>{
    if(e.target == el.firstElementChild){
      if(idx == 0){
        const sendText = '국립대구박물관' + lnbTitle;
        const pageUrl = pageAddress;
        window.open(`https://twitter.com/intent/tweet?text=${sendText}&rul=${pageUrl}`);
      }else if(idx == 1){
        const pageUrl = pageAddress;
        window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
      }
    }
  })
})
// top-title right icons copy
const copyBtn = document.querySelector('li.copy-btn');
const printBtn = document.querySelector('li.print-btn');
copyBtn.addEventListener('click', ()=>{
  window.navigator.clipboard.writeText(pageAddress).then(()=>{
    alert("현재 페이지 주소가 클립보드에 복사되었습니다");
  })
})
printBtn.addEventListener('click', ()=>{
  window.print();
})