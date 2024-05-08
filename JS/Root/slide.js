var listImgs = document.querySelector('.list_images');
var amountImg = listImgs.querySelectorAll('.img');
var btnLeft = document.querySelector('.btn_left');
var btnRigth = document.querySelector('.btn_right');
var idInterval;

var index = 0;
const sildeRunning = (indexOfImage)=>{
    listImgs.style.transform = `translateX(${amountImg[0].offsetWidth*-1 * indexOfImage++}px)`;
    idInterval = setInterval(()=>{
        index++;
        if(indexOfImage >= amountImg.length){
            indexOfImage = 0;
            index = 0;
        }
        listImgs.style.transform = `translateX(${amountImg[0].offsetWidth*-1 * indexOfImage++}px)`;
    }, 2000);
}
sildeRunning(0);

btnLeft.onclick = ()=>{
    clearInterval(idInterval);
    index -= 1;
    if(index < 0) index = amountImg.length-1;
    sildeRunning(index);
    
}

btnRigth.onclick = ()=>{
    clearInterval(idInterval);
    index += 1;
    if(index > amountImg.length-1) index = 0; 
    sildeRunning(index);
}