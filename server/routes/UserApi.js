const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/login/:username/:password', function(req, res){
    let username = req.params.username
    let password = req.params.password
    User.findOne({username, password}).exec(function(err, user){
        res.send(user)
    })
})

router.post('/signup', function(req, res){
    let newUser = new User(req.body)
    newUser.save()
    res.send(newUser)
})

module.exports = router