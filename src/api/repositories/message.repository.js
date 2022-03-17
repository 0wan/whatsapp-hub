const Model = require("../models/message.model")

exports.store = async (key, message) => {
    const db = new Model({key, message})
    return await db.save()
}

exports.getAll = async (key) => {
    const result = await  Model.find({key: key})
    return result
}

exports.findByWhatsAppId = async (key, phone) => {
    const result = await  Model.find({'message.key.remoteJid': phone})
    return result
}