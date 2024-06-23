const Product = require("../models/Product")

class ProductService {
    async getAll(){
        return new Promise( async (resolve, reject) => {
            try {
                const data = await Product.find({});
                console.log("ProductService -> getAll: ", data);
                resolve({
                    status: 200,
                    message: "Success",
                    data
                })
            } catch (error) {
                console.log("Error ProductService -> getAll: ", data);
                reject({
                    status: 404,
                    message: String(error)
                })
            }
        })
    }
}

module.exports = new ProductService;