const express = require('express')
const router = express.Router()
const validateTransactionInput = require("../validation/transaction");
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
    const { errors, isValid } = validateTransactionInput(req.body);
    if(!isValid){
      return res.status(400).json(errors);
    }
    let userId = req.params.userId
    let newTransaction = new Transaction(req.body)
    newTransaction.committedBy = userId
    newTransaction.save()
    User.findById(userId).exec(function(err, user){
        switch(newTransaction.type){
            case("withdraw"): 
                user.balance -= newTransaction.amount
                break
            case("deposit"): 
                user.balance += newTransaction.amount
                break
        }
        user.save()
        res.send({balance: user.balance, newTransaction})
    })
})

router.delete('/transaction/:userId/:transactionId', async function(req, res){
    let transactionId = req.params.transactionId
    let userId = req.params.userId
    let deletedTransaction = await Transaction.findByIdAndRemove(transactionId)
    User.findById(userId).exec(function(err, user){
        switch(deletedTransaction.type){
            case("withdraw"): 
                user.balance += deletedTransaction.amount
                break
            case("deposit"): 
                user.balance -= deletedTransaction.amount
                break
        }
        user.save()
        Transaction.find({"committedBy": userId} ).exec(function(err, transactions){
            res.send({balance: user.balance, transactions})
        })
    })
})

router.get('/balance/:userId', function(req, res){
    let userId = req.params.userId
    User.findById(userId).exec(function(err, user){
        res.send({balance: user.balance})
    })
})



module.exports = router