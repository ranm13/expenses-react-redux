const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')
const User = require('../models/User')

router.get('/bymonth/:userId/:month', function(req, res){
    let userId = req.params.userId
    let month = req.params.month
    Transaction.find({"committedBy": userId} ).exec(function(err, transactions){
        res.send(transactions)
    })
})

router.post('/transaction/:userId', function(req, res){
    let userId = req.params.userId
    let newTransaction = new Transaction(req.body)
    newTransaction.committedBy = userId
    console.log(newTransaction)
    newTransaction.save()
    User.findById(userId).exec(function(err, user){
        switch(newTransaction.type){
            case("withdraw"): 
                user.money -= newTransaction.amount
                break
            case("deposit"): 
                user.money += newTransaction.amount
                break
        }
        user.save()
        res.send(user)
    })
})

router.delete('/transaction/:userId/:transactionId', async function(req, res){
    let transactionId = req.params.transactionId
    let userId = req.params.userId
    let deletedTransaction = await Transaction.findByIdAndRemove(transactionId)
    User.findById(userId).exec(function(err, user){
        switch(deletedTransaction.type){
            case("withdraw"): 
                user.money += deletedTransaction.amount
                break
            case("deposit"): 
                user.money -= deletedTransaction.amount
                break
        }
        user.save()
        res.send(user)
    })
})

module.exports = router