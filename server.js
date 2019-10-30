const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const users = require('./server/routes/UserApi')
const transactions = require('./server/routes/TransactionsApi')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/bankDB", { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/users', users)
app.use('/transactions', transactions)

const PORT = 4000
app.listen(PORT, function(){
    console.log('server is running')
})
