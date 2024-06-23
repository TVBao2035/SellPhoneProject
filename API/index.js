const express = require("express");
const app = express();
const Product = require('./models/Product');
const User = require('./models/User');
const router = require('./routers');
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



router(app);


//----- +++++ Run Server +++++ -----//
app.listen(8000, ()=>{
    console.log("Server is running........");
})