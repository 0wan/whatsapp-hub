const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    //
}, { strict: false })

const Message = mongoose.model('Message', schema)

module.exports = Message
