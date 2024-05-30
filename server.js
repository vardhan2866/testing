const express = require('express');
const userSchema = require('./models/userModel');
const validate = require('./middlewares/validatorMiddleware');
const { checkSchema, Result } = require('express-validator');
const morgan = require('morgan');
const errorHandle = require('./errorhandling/errorHandl');
const customErr = require('./errorhandling/customErr');

const app = express()

app.use(morgan('combined'));
app.use(express.json());


app.post("/user", (req, res) => {
    // throw new Error("there is an error")



    return res.status(200).send(req.body)
});

app.all('*', (req, res, next) => {

    const err = new customErr(404, 'there is an error', false)

    next(err);
})




// custom error middleware
app.use(errorHandle);

app.listen(4000, () => {
    console.log("Server running");
});
