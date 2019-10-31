const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount: Number,
    type: String, //withdraw or deposit
    category: String,
    vendor: String,
    date: Date,
    committedBy: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction