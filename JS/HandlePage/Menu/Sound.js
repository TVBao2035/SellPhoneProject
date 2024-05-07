import { products } from "../../Data/productData.js";
import { renderData } from "../../Root/function.js";
import handleButtonCard from '../../Root/handleButtonCard.js';
import { handleSlide } from "../../Root/handleSlide.js";
var airpodsContainer = document.querySelector('.list_airpodsEarPhone');
var samsungEarPhongContainer = document.querySelector('.list_samsungEarPhone');
var sonyEarPhoneContainer = document.querySelector('.list_sonyEarPhone');
var harmanKardonContainer = document.querySelector('.list_harmanKardonBluetooth');
var sonyBluetoothContainer = document.querySelector('.list_sonyBluetooth ');

var listAirPods = [];
var listSamSungEarPhone = [];
var listSonyEarPhone = [];
var listHarmanKardon = [];
var listSonyBluetooth = [];
//------ GET DATA ------
var listEarPhone = [];
var listSpeaker = [];
for(let i=0; i<products.length; i++){
    if(products[i].name.toLowerCase().includes('tai nghe')) listEarPhone.push(products[i]);
    if(products[i].name.toLowerCase().includes('loa')) listSpeaker.push(products[i]);
}

for(let i=0; i<listEarPhone.length; i++){
    if(listEarPhone[i].name.toLowerCase().includes('airpods')) listAirPods.push(listEarPhone[i]);
    if(listEarPhone[i].name.toLowerCase().includes('samsung')) listSamSungEarPhone.push(listEarPhone[i]);
    if(listEarPhone[i].name.toLowerCase().includes('sony')) listSonyEarPhone.push(listEarPhone[i]);
}

for(let i=0; i<listSpeaker.length; i++){
    if(listSpeaker[i].name.toLowerCase().includes('harman kardon')) listHarmanKardon.push(listSpeaker[i]);
    if(listSpeaker[i].name.toLowerCase().includes('sony')) listSonyBluetooth.push(listSpeaker[i]);
}

//------ Render Data ----
renderData(listAirPods, airpodsContainer);
renderData(listSamSungEarPhone, samsungEarPhongContainer);
renderData(listSonyEarPhone, sonyEarPhoneContainer);
renderData(listHarmanKardon, harmanKardonContainer);
renderData(listSonyBluetooth, sonyBluetoothContainer);
var listDataProductsAddCart = [];
handleButtonCard(listDataProductsAddCart);

var btnLeftSAirpods = document.querySelector(".btn_left--airpodsEarPhone");
var btnRightSAirpods = document.querySelector(".btn_right--airpodsEarPhone");
handleSlide(btnLeftSAirpods, btnRightSAirpods);

var btnLeftSamSungEarPhone = document.querySelector(".btn_left--samsungEarPhone");
var btnRightSamSungEarPhone = document.querySelector(".btn_right--samsungEarPhone");
handleSlide(btnLeftSamSungEarPhone, btnRightSamSungEarPhone);

var btnLeftSonyEarphone = document.querySelector(".btn_left--sonyEarPhone");
var btnRightSonyEarphone = document.querySelector(".btn_right--sonyEarPhone");
handleSlide(btnLeftSonyEarphone, btnRightSonyEarphone);

var btnLeftHarmanKardon = document.querySelector(".btn_left--harmanKardonBluetooth");
var btnRightHarmanKardon = document.querySelector(".btn_right--harmanKardonBluetooth");
handleSlide(btnLeftHarmanKardon, btnRightHarmanKardon);

var btnLeftSony = document.querySelector(".btn_left--sonyBluetooth");
var btnRightSony = document.querySelector(".btn_right--sonyBluetooth");
handleSlide(btnLeftSony, btnRightSony);
