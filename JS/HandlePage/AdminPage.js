import { DATA_USERS } from "../Data/dataUser.js";
import { products } from "../Data/productData.js";


var userTable = document.querySelector('.container_users');

userTable.innerHTML +=  DATA_USERS.map(user=>`<tr>
                                                <td>${user._id}</td>
                                                <td>${user.idOfUser}</td>
                                                <td>${user.email}</td>
                                                <td>${user.name}</td>
                                                <td>${user.phone}</td>
                                                <td>
                                                    <button onClick="handleData('${user._id}', 'update', 'user')">Update</button>
                                                    <button onClick="handleData('${user._id}', 'delete', 'user')">Delete</button>
                                                </td>
                                            </tr>`);

var productTable = document.querySelector('.container_products');
var newList = products.toReversed();
productTable.innerHTML +=  newList.map(product=>`<tr>
                                                    <td >${product.id}</td>
                                                    <td><img style="height: 20px; width 20px;" src="${product.img}"/></td>
                                                    <td>${product.name}</td>
                                                    <td>${product.price}</td>
                                                    <td>
                                                        <button onClick="handleData('${product._id}', 'update','product')">Update</button>
                                                        <button onClick="handleData('${product._id}', 'delete', 'product')">Delete</button>
                                                    </td>
                                                </tr>`);


