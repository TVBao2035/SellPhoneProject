const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const adminRouter = require('./adminRouter')
const router = (app) => {
    app.use('/product', productRouter);
    app.use('/user', userRouter);
    app.use('/admin', adminRouter);
}

module.exports =router;