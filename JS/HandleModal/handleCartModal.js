import { addDataToModal, renderItemCart } from "../Root/function.js";
import { products } from "../Data/productData.js";
import { DATA_ITEM_CART } from "../Data/productData.js";

const handleCartModal = (listDataProductsAddCart, cartList)=>{
    //---elements of modal cart----------
    let elementCartModal = document.querySelector(".modal_cart");
    let bodyCartModal = elementCartModal.querySelector('.modal_cart--body'); 
    let elementsProduceAct = document.querySelectorAll(".produce_activity"); 
   
    if(listDataProductsAddCart.length === 0 &&  cartList.length === 0 ) 
        alert("There is no any products");           
    else
    {// upload data on the cart when click
        const firstElementIndex = 0;
        while(firstElementIndex < listDataProductsAddCart.length)
        {   
            //check is the first product of listDataProductsAddCart in arrayName ?            
            if(cartList.includes(listDataProductsAddCart[firstElementIndex]))
            {
                listDataProductsAddCart.shift();
                continue;
            }
            cartList.push(listDataProductsAddCart[firstElementIndex]);
            listDataProductsAddCart.shift();
        }
        localStorage.setItem(DATA_ITEM_CART,JSON.stringify(cartList));
       
        renderItemCart(cartList, bodyCartModal);
      
    }
    
    
    //---------delete Products saved out cart---------------
    let idList = [];
    elementsProduceAct.forEach((e)=>{
        idList.push(e.parentElement.parentElement.querySelector(".id_product").textContent)

    })
    var deleteProductsSaved = bodyCartModal.querySelectorAll('.dataProducts_button--pop');
    deleteProductsSaved.forEach((element)=>{
        element.onclick = ()=>{             
            let productID = element.parentElement.previousElementSibling.firstChild.firstChild.textContent;
            let indexOfProduct = idList.findIndex((e)=>e === productID);
            let indexOfCart = cartList.findIndex((e)=>e === productID);
            //------change check icon to cart icon
            elementsProduceAct[indexOfProduct].querySelector(".button_save").innerHTML ='<lottie-player src="./cartAnimation.json" background="#ffffff00"  speed="1"   style=" margin-left: 8px; width: 60px; height: 80px; position: absolute; top: -26px; left: -17px;"  loop  autoplay muted></lottie-player>';
            cartList.splice(indexOfCart, 1);
            //--------pop product out cart
            bodyCartModal.removeChild(element.parentElement.parentElement);
           //-------design nav css style. 
           localStorage.setItem(DATA_ITEM_CART,JSON.stringify(cartList));
        }
    })
}

export default handleCartModal;