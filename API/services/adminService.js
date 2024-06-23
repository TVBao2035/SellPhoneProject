const Product = require("../models/Product");
const { findOneAndDelete } = require("../models/Product");
const User = require("../models/User")

class AdminService {
    userEdit(id){
        return new Promise( async (resolve, reject) => {
            try {
                const data = await User.findOne({_id: id});
                if(data === null) throw new Error("User is not existing");
                console.log("AdminService -> userEdit: ", data);
                resolve({
                    status: 200,
                    message: "Success",
                    data
                });
            } catch (error) {
                console.log("Error AdminService -> userEdit: ", error);
                reject({
                    status: 404,
                    message: error
                });
            }
        })
    }
    userUpdate(id, userData){
        return new Promise(async(resolve, reject) => {
            try {
                const data = await User.findOneAndUpdate({_id: id}, userData, {new: true});
                console.log("AdminService -> userUpdate: ", data);
                resolve({
                    status: 200,
                    message: "Success",
                    data
                });
            } catch (error) {
                console.log("Error AdminService -> userUpdate: ", error);
                reject({
                    status: 404,
                    message: error
                });
            }
        })
    }

    userDelete(id){
        return new Promise( async (resolve, reject) => {
            try {
                const data = await User.findOneAndDelete({_id: id});
                console.log("AdminService -> userDelete: ", data);
                resolve({
                    status: 200,
                    message: "Delete User Success",
                })
            } catch (error) {
                console.log("Error AdminService -> userDelete: ", error);
                reject({
                    status: 404,
                    message: String(error)
                })
            }
        })
    }

    productEdit(id){
        return new Promise( async (resolve, reject) => {
            try {
                const data = await Product.findOne({_id: id});
                if(data === null) throw new Error("Product is not existing");
                console.log("AdminService -> productEdit: ", data);
                resolve({
                    status: 200,
                    message: "Success",
                    data
                })
            } catch (error) {
                console.log("Error AdminService -> product: ", error);
                reject({
                    status: 404,
                    message: String(error)
                })
            }
        })
    }

    productUpdate(id, productData) {
        return new Promise( async (resolve, reject) => {
            try {
                const data = await Product.findOneAndUpdate({_id: id}, productData, {new: true});
                console.log("AdminService -> productUpdate: ", data);
                resolve({
                    status: 200,
                    message: "Update Product Success",
                    data
                })
            } catch (error) {
                console.log("Error AdminService -> productUpdate: ", error);
                reject({
                    status: 404,
                    message: String(error)
                })
            }
        })
    }

    productDelete(id){
        return new Promise( async (resolve, reject) => {
            try {
                const data = await Product.findOneAndDelete({_id: id});
                console.log("AdminService -> productDelete: ", data);
                resolve({
                    status: 200,
                    message: "Delete Product Success"
                })
            } catch (error) {
                console.log("Error AdminService -> productDelete: ", error);
                reject({
                    status: 404,
                    message: error
                })
            }
        })
    }

    productCreate(productData){
        return new Promise( async (resolve, reject) => {
            try {
                const newProduct = new Product(productData);
                await newProduct.save();
                console.log("AdminService -> productCreate: ", newProduct);
                resolve({
                    status: 200,
                    message: "Create Product Success",
                    data: newProduct
                })
            } catch (error) {
                console.log("Error AdminService -> productCreate: ", error);
                reject({
                    status: 404,
                    message: error
                })
            }
        })
    }
}

module.exports = new AdminService;