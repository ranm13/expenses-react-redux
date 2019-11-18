const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
      },
      type: {
        type: String, //withdraw or deposit
        required: true
      },
      category: {
        type: String,
        required: true
      },
      vendor: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
    committedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction