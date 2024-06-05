import { addDataToModal, resetCart } from "../Root/function.js";
import { products } from "../Data/productData.js";
import {handleGetDataItemByButtonBuy } from "./handleGetDataItemByButtonBuy.js";
const handleSearchModal = ()=>{
    //---------create variables---------
    let elementSearchModal = document.querySelector(".modal_search");
    let bodySearchModal = elementSearchModal.querySelector(".modal_search--body");
    let inputSearchElement = elementSearchModal.querySelector(".input--search");
    let btnSearch = elementSearchModal.querySelector(".button--search");
    let iconDeleteSearchValue = elementSearchModal.querySelector('.iconDeleteSearchValue');

    iconDeleteSearchValue.onclick=()=>{
        inputSearchElement.value = "";
        iconDeleteSearchValue.style.display = "none";

    }
    inputSearchElement.oninput = ()=>{
        iconDeleteSearchValue.style.display = "flex";
    }
    btnSearch.onclick = ()=>{
        let previousItems = bodySearchModal.querySelectorAll('.dataProducts_contain');
        //------delete all previous items----------
        //if(previousItems.length !== 0) previousItems.forEach(pre_i=>bodySearchModal.removeChild(pre_i));
        resetCart(bodySearchModal);
        let valueInputSearch = inputSearchElement.value.toLowerCase();
        //-------Search items--------
        if(valueInputSearch.length != 0)
        {
            products.forEach((e)=>{
                if(e.name.toLowerCase().includes(valueInputSearch))
                {                             
                        let Name = e.name;
                        let Img = e.img;
                        let Price = e.price;
                        let Id = e.id;
                        addDataToModal(bodySearchModal, Id, Name, Price, Img);
                }})
        }

        handleGetDataItemByButtonBuy();
        //-----delete an item----------
        let btnDelete = bodySearchModal.querySelectorAll('.dataProducts_button--pop');
        btnDelete.forEach(btn_del => {
            btn_del.onclick = () =>{
                bodySearchModal.removeChild(btn_del.parentElement.parentElement);
                
            }})
    }
}

export default handleSearchModal;