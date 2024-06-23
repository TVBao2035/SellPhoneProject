// var virtualData = fetch('https://tvbao2035.github.io/SellPhoneProject/data.json')
//                   .then(data => data.json())

//                   console.log(virtualData);
async function getData(){

    return fetch('http://localhost:8000/product')
    .then(res => res.json())
    .then(data => data)
    .catch(()=>{
      console.log("Error Sever!!!!");
      return [];
    })

  
}
export const DATA_DETAILS_PRODUCT = 'data-details-product';
export const DATA_ITEM_CART = 'data-item-cart';

export const products = await getData();