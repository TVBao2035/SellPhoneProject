const ProductService = require("../services/productService");

class ProductController {
    async index (req, res) {
        try{
            const data = await ProductService.getAll();
            return res.status(200).json(data)
        } catch(error){
            return res.status(404).json(error)
        }
    }
}

module.exports = new ProductController;