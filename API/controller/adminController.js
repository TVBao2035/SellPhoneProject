const AdminService = require("../services/adminService");

class AdminController {
    async userEdit(req, res){
        try {
            const paramsId = req?.params?.id;
            const data = await AdminService.userEdit(paramsId);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error)
        }
    }

    async userUpdate(req, res){
        try {
            const paramsId = req?.params?.id;
            const data = await AdminService.userUpdate(paramsId, req.body);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error)
        }
    }

    async userDelete(req, res){
        try {
            const paramsId = req?.params?.id;
            const data = await AdminService.userDelete(paramsId);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async productEdit (req, res){
        try {
            const paramsId = req?.params?.id;
            const data = await AdminService.productEdit(paramsId);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async productUpdate (req, res){
        try {
            const paramsId = req?.params?.id;
            const data = await AdminService.productUpdate(paramsId, req.body);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async productDelete (req, res){
        try {
            const paramsId = req?.params?.id;
            const data = await AdminService.productDelete(paramsId);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async productCreate (req, res){
        try {
            const {id, name, img, price} = req.body;
            if(!id || !name || !img || !price){
                throw new Error("Inputs are not required");
            }

            const data = await AdminService.productCreate(req.body);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

}

module.exports = new AdminController;