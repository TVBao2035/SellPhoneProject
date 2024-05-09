
async function fetchProduct(){
  return fetch('https://tvbao2035.github.io/SellPhoneProject/data.json').then(res=>res.json()).then(data=>data)

}
const virtualProducts = await fetchProduct()

async function getData(){

    return fetch('http://localhost:8000/product')
    .then(res => res.json())
    .then(data => data)
    .catch(()=>virtualProducts)

  
}
export const DATA_DETAILS_PRODUCT = 'data-details-product';

export const products = await getData();