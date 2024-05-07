import { products } from "../../Data/productData.js";
import { renderData } from "../../Root/function.js";
import handleButtonCard from '../../Root/handleButtonCard.js';
import { handleSlide } from "../../Root/handleSlide.js";
var asusPCContainer = document.querySelector('.list_pcASUS');
var dellPCContainer = document.querySelector('.list_pcDell');
var asusScreenContainer = document.querySelector('.list_asusScreen');
var listASUSPC = [];
var listDellPC = [];
var listASUSSCreen = [];
//------ GET DATA ------
var listASUS = [];
var listDell = [];
for(let i=0; i<products.length; i++){
    if(products[i].name.toLowerCase().includes('asus')) listASUS.push(products[i]);
    if(products[i].name.toLowerCase().includes('dell')) listDell.push(products[i]);

}

for(let i=0; i<listASUS.length; i++){
    if(listASUS[i].name.toLowerCase().includes('pc')) listASUSPC.push(listASUS[i]);
    if(listASUS[i].name.toLowerCase().includes('màn hình')) listASUSSCreen.push(listASUS[i]);

}


for(let i=0; i<listDell.length; i++){
    if(listDell[i].name.toLowerCase().includes('pc')) listDellPC.push(listDell[i]);
   

}
//------ Render Data ----
renderData(listASUSPC, asusPCContainer);
renderData(listDellPC, dellPCContainer);
renderData(listASUSSCreen, asusScreenContainer);


var listDataProductsAddCart = [];
handleButtonCard(listDataProductsAddCart);

var btnLeftPCASUS = document.querySelector(".btn_left--pcASUS");
var btnRightPCASUS = document.querySelector(".btn_right--pcASUS");
handleSlide(btnLeftPCASUS, btnRightPCASUS);

var btnLeftPCDell = document.querySelector(".btn_left--pcDell");
var btnRightPCDell = document.querySelector(".btn_right--pcDell");
handleSlide(btnLeftPCDell, btnRightPCDell);

var btnLeftASUSScreen = document.querySelector(".btn_left--asusScreen");
var btnRightASUSScreen = document.querySelector(".btn_right--asusScreen");
handleSlide(btnLeftASUSScreen, btnRightASUSScreen);

``