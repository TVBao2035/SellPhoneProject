import { ACCOUNT_SIGNIN } from "../Data/dataUser.js";
import { DATA_ITEM_CART } from "../Data/productData.js";
async function handleDataSignOut(cartList)
{
  let accountSignIn = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN));
  accountSignIn[0].items = cartList;
  localStorage.setItem(DATA_ITEM_CART, '[]');
  localStorage.setItem(ACCOUNT_SIGNIN, '[]');
  return await fetch("http://localhost:8000/user/update/items",
                      {
                          method: "POST",
                          body: JSON.stringify(accountSignIn[0]),
                          headers:{
                            "Content-type": "application/json"
                          }
                      }
                    ).then(response=>response.json())
}

export default handleDataSignOut;
  //------handle sign out-----------