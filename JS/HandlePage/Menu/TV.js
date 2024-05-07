import { products } from "../../Data/productData.js";
import { renderData } from "../../Root/function.js";
import handleButtonCard from '../../Root/handleButtonCard.js';
import { handleSlide } from "../../Root/handleSlide.js";
var samsungContainer = document.querySelector('.list_samsungTV');
var lgContainer = document.querySelector('.list_lgTV');
var sonyContainer = document.querySelector('.list_sonyTV');
var listSamSung = [];
var listLG = [];
var listSony = [];
//------ GET DATA ------
var listTV = [];
for(let i=0; i<products.length; i++){
    if(products[i].name.toLowerCase().includes('tivi')) listTV.push(products[i]);
}

for(let i=0; i<listTV.length; i++){
    if(listTV[i].name.toLowerCase().includes('lg')) listLG.push(listTV[i]);
    if(listTV[i].name.toLowerCase().includes('samsung')) listSamSung.push(listTV[i]);
    if(listTV[i].name.toLowerCase().includes('sony')) listSony.push(listTV[i]);
}
//------ Render Data ----
renderData(listSamSung, samsungContainer);
renderData(listLG, lgContainer);
renderData(listSony, sonyContainer);
var listDataProductsAddCart = [];
handleButtonCard(listDataProductsAddCart);

var btnLeftSamSung = document.querySelector(".btn_left--samsungTV");
var btnRightSamSung = document.querySelector(".btn_right--samsungTV");
handleSlide(btnLeftSamSung, btnRightSamSung);

var btnLeftLG = document.querySelector(".btn_left--lgTV");
var btnRightLG = document.querySelector(".btn_right--lgTV");
handleSlide(btnLeftLG, btnRightLG);

var btnLeftSony = document.querySelector(".btn_left--sonyTV");
var btnRightSony = document.querySelector(".btn_right--sonyTV");
handleSlide(btnLeftSony, btnRightSony);
