const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    socketConfig: { type: Object },
    key: { type: String },
    authState: { type: Boolean },
    allowWebhook :{ type: Boolean },
    instance: { type: Object },
})

const Instance = mongoose.model('Instance', schema)

module.exports = Instance
