import { products } from "../../Data/productData.js";
import { renderData } from "../../Root/function.js";
import handleButtonCard from '../../Root/handleButtonCard.js';
import { handleSlide } from "../../Root/handleSlide.js";
var samsungContainer = document.querySelector('.list_samsungWatch');
var appleContainer = document.querySelector('.list_appleWatch');

var listSamSung = [];
var listApple = [];

//------ GET DATA ------
for(let i=0; i<products.length; i++){
    if(products[i].name.toLowerCase().includes('apple watch')) listApple.push(products[i]);
    if(products[i].name.toLowerCase().includes('samsung galaxy watch')) listSamSung.push(products[i]);

}
//------ Render Data ----
renderData(listSamSung, samsungContainer);
renderData(listApple, appleContainer);

var listDataProductsAddCart = [];
handleButtonCard(listDataProductsAddCart);

var btnLeftSamSung = document.querySelector(".btn_left--samsungWatch");
var btnRightSamSung = document.querySelector(".btn_right--samsungWatch");
handleSlide(btnLeftSamSung, btnRightSamSung);

var btnLeftApple = document.querySelector(".btn_left--appleWatch");
var btnRightApple = document.querySelector(".btn_right--appleWatch");
handleSlide(btnLeftApple, btnRightApple);
