import { openModal, closeModal, renderData} from "./Root/function.js";
import {DATA_ITEM_CART, products} from './Data/productData.js';
import handleDataSignIn  from "./HandleModal/handleDataSignIn.js";
import handleDataSignOut from "./HandleModal/handleDataSignOut.js";
import handleButtonCard  from "../JS/Root/handleButtonCard.js";
import handleSearchModal from "./HandleModal/handleSearchModal.js";
import handleMenuModal from "./HandleModal/handleMenuModal.js";
import handleContractModal from "./HandleModal/handleContractModal.js";
import handleCartModal from "./HandleModal/handleCartModal.js";
import { handleGetDataItemByButtonBuy } from "./HandleModal/handleGetDataItemByButtonBuy.js";
import { ACCOUNT_SIGNIN } from "./Data/dataUser.js";


//------- Handle Sigin Account -------
handleDataSignIn();

//----- Render Items-----------
var containerListProduct = document.getElementById("container_display");
var containerSmartPhoneList = containerListProduct.querySelector(".display_smartphone .list_produce")
var containerLapTopList = containerListProduct.querySelector(".display_laptop .list_produce");
var containerWatchList = containerListProduct.querySelector(".display_watch .list_produce");

var listSmarPhone = [];
var listLapTop = [];
var listWatch = [];

products.forEach((product)=>{
    // GET data smart phone
    if(listSmarPhone.length <= 17){
        if(product.name.toLowerCase().includes("samsung galaxy a")) listSmarPhone.push(product);
        if(product.name.toLowerCase().includes("samsung galaxy z")) listSmarPhone.push(product);
        if(product.name.toLowerCase().includes("samsung galaxy s")) listSmarPhone.push(product);
        if(product.name.toLowerCase().includes("iphone")) listSmarPhone.push(product);
    }
    // GET data LapTop
    if(listLapTop.length <= 17){
        if(product.name.toLowerCase().includes("laptop")) listLapTop.push(product);
    }
    // GET data watch
    if(listWatch.length <= 11){
        if(product.name.toLowerCase().includes("watch")) listWatch.push(product);
    }
})
// ------ render products ------
renderData(listSmarPhone, containerSmartPhoneList);
renderData(listLapTop, containerLapTopList);
renderData(listWatch, containerWatchList);

var listDataProductsAddCart = [];
handleButtonCard(listDataProductsAddCart);

//--------- Handle buttons On Navbar ---------
var listItems = document.querySelectorAll('.list-items');
var isOpen = false;

listItems.forEach((item, index)=>{
//------Primary Part--------------------
    //----index = 0 => Modal Search:
    //----index = 1 => Modal Menu:
    //----index = 2 => Modal Contract;
    //----index = 3 => Modal Cart:
    //----index = 4 => new Page;
    
    if(index === 0){
        handleSearchModal();
        //---------create variables---------
        let linkElementSearch = item.querySelector('a');
        let elementSearchModal = document.querySelector(".modal_search");
        let btnCloseSearch = elementSearchModal.querySelector(".button--close");     
        //---------Close or Open Modal---------------
        item.onclick = () =>{
            if(!isOpen){
                isOpen = true;
                openModal(item, elementSearchModal, linkElementSearch);
            }
        }
        
        btnCloseSearch.onclick = ()=>{
            if(isOpen){
                isOpen = false;
                closeModal(item, elementSearchModal, linkElementSearch);
            }
        }
        
        elementSearchModal.onclick = (e) =>{
            if(e.target == e.currentTarget){
                if(isOpen){
                    isOpen = false;
                    closeModal(item, elementSearchModal,linkElementSearch);
                }
            }
        }
    }
    
//------------Modal Menu--------------
if(index === 1)
{
    handleMenuModal();
    let linkElementMenu = item.querySelector('a');
    let elementMenuModal = document.querySelector('.modal_menu');
    let btnCloseMenu = elementMenuModal.querySelector('.button--close');
    let iconCloseMenu = elementMenuModal.querySelector('.icon_close');
    //Open Model
    item.onclick = () =>{
        if(!isOpen){
            openModal(item, elementMenuModal, linkElementMenu);
            isOpen = true;
        }
    }
    
    // Close Modal:
    btnCloseMenu.onclick = () =>{
        if(isOpen){
            isOpen = false;
            closeModal(item, elementMenuModal, linkElementMenu);
        }
    }

    iconCloseMenu.onclick = () =>{
        if(isOpen){
            isOpen = false;
            closeModal(item, elementMenuModal, linkElementMenu);
        }
    }

    elementMenuModal.onclick = (e) =>{
        if(e.target == e.currentTarget){
            if(isOpen){
                isOpen = false;
                closeModal(item, elementMenuModal, linkElementMenu);
            }
        }
    }
}
//----------Modal Call------
if(index === 2)
{
    handleContractModal();
    let linkElementCall = item.querySelector('a');
    let elementCallModal = document.querySelector('.modal_call');
    let btnCloseCall = elementCallModal.querySelector('.button--close');
    let iconCloseCall = elementCallModal.querySelector('.icon_close');
   
    // Open Modal
    item.onclick = ()=>{
        if(!isOpen){
            isOpen = true;
            openModal(item, elementCallModal, linkElementCall);
        }
    }
    // Close Modal
    iconCloseCall.onclick = () =>{
        if(isOpen){
            isOpen = false;
            closeModal(item, elementCallModal, linkElementCall);
        }
    }

    btnCloseCall.onclick = () =>{
        if(isOpen){
            isOpen = false;
            closeModal(item, elementCallModal, linkElementCall);
        }
    }

    elementCallModal.onclick = (e) =>{
        if(e.target == e.currentTarget){
            if(isOpen){
                isOpen = false;
                closeModal(item, elementCallModal, linkElementCall);
            }
        }
    }
}
//----------Modal Cart------
if(index === 3)
{
    let cartList;
    if(JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN)).length != 0){
        cartList = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN))[0].items ? JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN))[0].items: [];

    }else{
        cartList = [];
    }
    let linkElementCart = item.querySelector('a');
    let elementCartModal = document.querySelector(".modal_cart");
    let iconCloseCart = elementCartModal.querySelector("i");
    let btnCloseCart = elementCartModal.querySelector(".button--close");
    
    //-------Click to Open------------
    item.onclick = ()=>{
       
        if(!isOpen){
            isOpen = true;
            openModal(item, elementCartModal, linkElementCart);
        }
        handleCartModal(listDataProductsAddCart, cartList);
        handleGetDataItemByButtonBuy();
    }
    
    //-------click to Close------
    iconCloseCart.onclick = () =>{
        if(isOpen){
            isOpen = false;
            closeModal(item, elementCartModal, linkElementCart);
        }
    }

    btnCloseCart.onclick = ()=>{
        if(isOpen){
            isOpen = false;
            closeModal(item, elementCartModal, linkElementCart);
        }
    }
    
    elementCartModal.onclick = (e)=>{
        if(e.target === e.currentTarget){
            if(isOpen){
                isOpen = false;
                closeModal(item, elementCartModal, linkElementCart);
            }
        }
    }

}   
})

//--------------------Modal Menu responsive-------------------
var responsiveMenu = document.querySelector(".responsive_nav_menu");
var modalMenu = document.querySelector("#nav_menu");
var isClicked = false;
responsiveMenu.innerHTML = "<i class='bx bx-menu'></i>";

responsiveMenu.onclick = ()=>{
    if(isClicked)
    { 
        responsiveMenu.innerHTML = "<i class='bx bx-menu'></i>";   
        modalMenu.style.right = '-400px';     
        isClicked = false;
    }
    else
    {
        responsiveMenu.innerHTML = "<i class='bx bx-x'></i>";
        modalMenu.style.right = '0px';     
        isClicked = true;
    }  
}

     
let itemSignOut = document.querySelector(".list_menu--account").querySelector('.itemAccount');

itemSignOut.onclick = async ()=> await handleDataSignOut(JSON.parse(localStorage.getItem(DATA_ITEM_CART)));



var dataUser = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN))
console.log(dataUser);
// var formMain =  document.getElementById('form_main');
// formMain.action =  `http://localhost:8000/cart/${datauser[0]._id}/save/`;


