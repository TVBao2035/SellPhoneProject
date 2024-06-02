

async function getData(){

    return fetch('http://localhost:8000/product')
    .then(res => res.json())
    .then(data => data)
    .catch(()=>{
      console.log("Error Sever!!!!")
    })

  
}
export const DATA_DETAILS_PRODUCT = 'data-details-product';
export const DATA_ITEM_CART = 'data-item-cart';

export const products = await getData();