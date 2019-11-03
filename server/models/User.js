const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    balance: Number
})

const User = mongoose.model("User", userSchema)
module.exports = User