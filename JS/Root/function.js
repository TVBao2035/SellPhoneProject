import {primaryColor} from './root.js';
import {products} from '../Data/productData.js'
//----Primary methods-------
export function openModal(element, modalElement, linkElement){
    modalElement.classList.add('field_open');
    modalElement.classList.remove('field_close')
    element.classList.add('change_click-item');
    linkElement.style.color = primaryColor;
}

export function closeModal( element, modalElement, linkElement){
    modalElement.classList.remove('field_open');
    modalElement.classList.add('field_close');
    element.classList.remove('change_click-item');
    linkElement.style.color = "white";
}
export const renderData = (listData, container)=>{
    let html = "";
    // Warning::
    //++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/detailsInformationProductPage.html
    //++++ On Live Server ---> http://127.0.0.1:5501/HTML/detailsInformationProductPage.html
    listData.map((data)=>{
        html +=`<div class="produce_item">
                    <span class="id_product">${data.id}</span>
                    <div class="produce_info_container">
                        <div class="produce_info">
                            <div class="produce_img">
                                <img class="img_card" src=${data.img} alt="">
                            </div>
                            <p class="produce_name">${data.name}</p>
                            <p class="produce_price">${data.price} đ</p>
                        </div>
                        <div class="produce_activity">
                            <div class="button_buy">
                                <a class="link_page" href=" http://127.0.0.1:5501/HTML/detailsInformationProductPage.html"><button type="button">Buy Now</button></a>
                            </div>

                            <button class="button_save"  name="idItem"  value="${data.id}" >
                            </button>

                            <div id="dd" class="heart_item">
                                <i class='bx bxs-heart' ></i>Like
                            </div>
                        </div>
                    </div>
                </div>`});
    container.innerHTML = html ;
}

export function resetCart(bodyModal){
    let items =  bodyModal.querySelectorAll(".dataProducts_contain");
    if(items.length !== 0){
       for(let i=0; i<items.length; i++){
        bodyModal.removeChild(items[i]);
       }
    }
}

export function renderItemCart(cartList, bodyCartModal){
    resetCart(bodyCartModal);
    if(cartList.length != 0){
        cartList.forEach(itemId => {
            let item = products.find((product) => product.id === itemId);
            addDataToModal(bodyCartModal, item.id, item.name, item.price,  item.img);
        })
    }
}
export function addDataToModal(bodyModal, dataId, dataName, dataPrice, dataImg){
    var containProductSaved = document.createElement('div');
    var containButtonsBuyOrDelete = document.createElement("div");
    var informationProductSaved = document.createElement('div');
    var containerImgID = document.createElement('div');
    //-----design CSS div tag------
    containProductSaved.classList.add('dataProducts_contain');
    informationProductSaved.classList.add('dataProducts-SpaceBetween');
    informationProductSaved.classList.add('dataProducts_style');
    containButtonsBuyOrDelete.classList.add('dataProducts-SpaceBetween');
    containButtonsBuyOrDelete.classList.add('block_btn');
    containerImgID.classList.add('dataProducts-SpaceBetween');
    //------create span tag-------
    var spanElementName = document.createElement('span');
    var spanElementPrice = document.createElement('span');
    var spanElementId = document.createElement('span');
    
    //------add content and design CSS----------
    spanElementId.classList.add("span_id");
    spanElementId.innerHTML = dataId;
    spanElementName.innerText = dataName;
    spanElementPrice.innerText = dataPrice;
    spanElementId.style.marginTop = '5px';
    spanElementId.style.marginRight = '5px';
    spanElementName.style.marginTop = '5px';
    spanElementPrice.style.marginTop = '5px';

    //---create image tag-----------
    var imageElement = document.createElement('img');
                
    //-------add src and design CSS--------
    imageElement.src = dataImg;
    imageElement.style.width = '30px';
    imageElement.style.height = '30px';

    var btnPopProduct= document.createElement('button');
    var btnBuyProduct= document.createElement('button');
    btnPopProduct.classList.add("dataProducts_btn");
    btnBuyProduct.classList.add("dataProducts_btn");
    btnPopProduct.classList.add("dataProducts_button--pop");
    btnBuyProduct.classList.add("dataProducts_button--buy");
    // Warning::
    //++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/detailsInformationProductPage.html
    //++++ On Live Server ---> http://127.0.0.1:5501/HTML/detailsInformationProductPage.html
    btnBuyProduct.innerHTML = `
                                <a href="http://127.0.0.1:5501/HTML/detailsInformationProductPage.html" class="link_page" >
                                    <i class='bx bx-check'></i>
                                </a>
                             `;
    btnPopProduct.innerHTML = "<i class='bx bx-x'></i>";

    containerImgID.appendChild(spanElementId);
    containerImgID.appendChild(imageElement)
    //-----add span and image elements in div tag-------
    informationProductSaved.appendChild(containerImgID);
    informationProductSaved.appendChild(spanElementName);
    informationProductSaved.appendChild(spanElementPrice);

    containButtonsBuyOrDelete.appendChild(btnBuyProduct);
    containButtonsBuyOrDelete.appendChild(btnPopProduct);

    containProductSaved.appendChild(informationProductSaved);
    containProductSaved.appendChild(containButtonsBuyOrDelete);
    bodyModal.appendChild(containProductSaved);
}

// 