const User = require("../models/User");

class UserService {
    getAll(){
        return new Promise( async (resolve, reject) => {
            try {
                const data = await User.find({});
                console.log("UserService -> getAll", data);
                resolve({
                    status: 200,
                    message: "Success",
                    data
                });
            } catch (error) {
                console.log("Error UserService -> getAll", error);
                reject({
                    status: 404,
                    message: error
                });
            }
        })
    }

    getOne(email) {
        return new Promise( async (resolve, reject) => {
            try {
                const data = await User.findOne({email});
                if(data === null) throw new Error("User is not existing")
                console.log("UserService -> getOne: ", data);
                resolve({
                    status: 200,
                    message: "Get One User Success",
                    data
                })
            } catch (error) {
                console.log("Error UserService -> getOne: ", error);
                reject({
                    status: 404,
                    message: String(error)
                });
            }
        })
    }

    save(user){
        return new Promise( async (resolve, reject) => {
            try {
                const newUser = new User(user);
                await newUser.save();
                console.log("UserService -> save: ", newUser);
                resolve({
                    status: 200,
                    message: "Save User Success",
                    data: newUser
                })
            } catch (error) {
                console.log("Error UserService -> save: ", error);
                reject({
                    status: 404,
                    message: String(error)
                });
            }
        })
    }

    updateProfile(user) {
        return new Promise( async (resolve, reject) => {
            try {
                console.log("user", user);
                const data = await User.findOneAndUpdate({_id: user._id}, user, {new: true});
                console.log("UserService -> updateProfile: ", data);
                resolve({
                    status: 200,
                    message: "Update Profile User Success",
                    data
                })
            } catch (error) {
                console.log("Error UserService -> updateProfile: ", error);
                reject({
                    status: 404,
                    message: String(error)
                });
            }
        })
    }


}

module.exports = new UserService;