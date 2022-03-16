const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    // key: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // chat: {
    //     type: Object,
    //     required: false,
    // },
}, { strict: false })

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
