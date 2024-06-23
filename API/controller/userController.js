const userService = require("../services/userService");

class UserController {
    async index(req, res) {
        try {
            const data = await userService.getAll();
            return res.status(200).json(data)
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async getOne(req, res){
        try {
            const email = req.body.email;
            if(!email){
                return res.status(404).json({
                    status: 404,
                    message: 'Email is required'
                })
            }
    
            const data = await userService.getOne(email);
            res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async save(req, res) {
        try {
            const {name, email, password } = req.body;
            if(!email || !password || !name){
                return res.status(404).json({
                    status: 404,
                    message: "Inputs is required"
                });
            }
            const data = await userService.save(req.body);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async updateProfile (req, res) {
        try {
            const {_id} = req.body;
            if(!_id){
                res.status(404).json({
                    status: 404,
                    message: "Id is not Valid"
                });
            }
            const data = await userService.updateProfile(req.body);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }
    
}

module.exports = new UserController;