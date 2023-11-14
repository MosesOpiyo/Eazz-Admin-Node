const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods','POST,PUT,PATCH,DELETE,GET');
        return res.status(200).json({})
    }
    next();
})

module.exports = app;