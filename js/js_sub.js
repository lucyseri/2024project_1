'use strict';
// section2 - btn box
const shareBtn = document.querySelector('ul.button-box li.share-btn>i');
const shareSub = document.querySelector('ul.button-box li.share-btn ul.sns-list');
const shareSubLi = document.querySelectorAll('ul.button-box li.share-btn ul.sns-list li.sub');
// section2 - btn box: share btn
let openTrigger = true;
shareBtn.addEventListener('click', function(){
  if(openTrigger){
    shareSub.classList.remove('menu-closed');
    openTrigger = false;
    shareBtn.classList.remove('fa-share-nodes');
    shareBtn.classList.add('fa-x');
  }else{
    shareSub.classList.add('menu-closed');
    openTrigger = true;
    shareBtn.classList.add('fa-share-nodes');
    shareBtn.classList.remove('fa-x');
  }
});
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
  });
});
printBtn.addEventListener('click', ()=>{
  window.print();
});