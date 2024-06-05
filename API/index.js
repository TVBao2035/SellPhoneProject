const express = require("express");
const app = express();
const Product = require('./models/Product');
const User = require('./models/User');

const database = require('./config/database');
database.connect();

//----- CONFIG BODY PARSER -----//
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
//----- END -----//


//--- [GET] /product
app.get('/product', (req, res)=>{
    Product.find({})
        .then(product=>res.status(200).json(product))
        .catch(error=>res.status(400).json(error, "ERROR"));
})

//--- [GET] /user
app.get('/user', (req, res)=>{
    User.find({})
    .then(user=>res.status(200).json(user))
    .catch(error=>res.status(400).json(error, "ERROR"));
})


//--- [GET] /user/getOne
app.post('/user/getOne', (req, res)=>{
    User.findOne({email: req.body.email})
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err, "ERROR"))
})

// Warning::
//++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/formSignIn.html
//++++ On Live Server ---> http://127.0.0.1:5501/HTML/formSignIn.html

//--- [POST] /user/save
app.post('/user/save', (req, res)=>{
    const user = new User(req.body);
    user.save();
    res.redirect('http://127.0.0.1:5501/HTML/formSignIn.html');
})

// Warning::
//++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/userPage.html
//++++ On Live Server ---> http://127.0.0.1:5501/HTML/userPage.html

//--- [POST] /user/update/profile
app.post('/user/update/profile', (req, res)=>{
    User.updateOne({_id:req.body._id}, req.body)
        .then(()=>{
                console.log("Update profile Successfully");
                res.redirect('http://127.0.0.1:5501/HTML/userPage.html');
        })
})


//--- [POST] /user/update/items
app.post('/user/update/items', (req, res)=>{
    User.updateOne({email: req.body.email}, req.body)
        .then(()=>{console.log("Update Successful!!")})
})

// Warning:
/*
++++ On GitHub  
        --> https://tvbao2035.github.io/SellPhoneProject/HTML/Admin/AdminPage.html
        --> https://tvbao2035.github.io/SellPhoneProject 
++++ On Live Server 
        ---> http://127.0.0.1:5501/HTML/Admin/AdminPage.html
        ---> http://127.0.0.1:5501
*/

//--- [POST] /user/check
app.post('/user/check', (req, res)=>{
    if(req.body.email === "admin@gmail.com"){
        res.redirect('http://127.0.0.1:5501/HTML/Admin/AdminPage.html');
    }
    res.redirect('http://127.0.0.1:5501/');
    
})

//--- [GET] admin/user/edit/:id
app.get('/admin/user/edit/:id', (req, res)=>{
    User.findOne({_id:req.params.id})
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err, "ERROR"))
})


// Warning::
//++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/Admin/AdminPage.html
//++++ On Live Server ---> http://127.0.0.1:5501/HTML/Admin/AdminPage.html

//--- [POST] admin/user/edit/:id/update
app.post('/admin/user/edit/:id/update', (req, res)=>{
    User.updateOne({_id:req.params.id}, req.body)
        .then(() =>{
            console.log("Admine Update User Successfully!");
            res.redirect('http://127.0.0.1:5501/HTML/Admin/AdminPage.html');
        })
})

// Warning::
//++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/Admin/AdminPage.html
//++++ On Live Server ---> http://127.0.0.1:5501/HTML/Admin/AdminPage.html


//--- [GET] admin/user/edit/:id/delete
app.get('/admin/user/edit/:id/delete',(req, res)=>{
    User.deleteOne({_id: req.params.id})
        .then(() =>{
            console.log("Admin Delete User Successfully");
            res.redirect('http://127.0.0.1:5501/HTML/Admin/AdminPage.html')
        })
})

//--- [GET] admin/product/edit/:id
app.get('/admin/product/edit/:id', (req, res)=>{
    Product.findOne({_id:req.params.id})
           .then(product => res.status(200).json(product))
           .catch(err => res.status(400).json(err, "ERROR"))
})

// Warning::
//++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/Admin/AdminPage.html
//++++ On Live Server ---> http://127.0.0.1:5501/HTML/Admin/AdminPage.html


//--- [POST] admin/product/edit/create
app.post('/admin/product/edit/create', (req, res)=>{
    const product = new Product(req.body);
    product.save();
    res.redirect('http://127.0.0.1:5501/HTML/Admin/AdminPage.html');
})


// Warning::
//++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/Admin/AdminPage.html
//++++ On Live Server ---> http://127.0.0.1:5501/HTML/Admin/AdminPage.html


//--- [POST] admin/product/edit/:id/update
app.post('/admin/product/edit/:id/update', (req, res)=>{
    Product.updateOne({_id:req.params.id}, req.body)
            .then(() =>{
                console.log("Admin Update Product Successfully");
                res.redirect('http://127.0.0.1:5501/HTML/Admin/AdminPage.html');
            })
})

// Warning::
//++++ On GitHub --> https://tvbao2035.github.io/SellPhoneProject/HTML/Admin/AdminPage.html
//++++ On Live Server ---> http://127.0.0.1:5501/HTML/Admin/AdminPage.html

//--- [GET] admin/product/edit/:id/delete
app.get('/admin/product/edit/:id/delete',(req, res)=>{
    Product.deleteOne({_id: req.params.id})
            .then(() => {
                console.log("Admin Delete Product Successfully");
                res.redirect('http://127.0.0.1:5501/HTML/Admin/AdminPage.html');
            })
})



//----- +++++ Run Server +++++ -----//
app.listen(8000, ()=>{
    console.log("Server is running........");
})