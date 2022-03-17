const Model = require("../models/chat.model")

exports.store = async (key, chat) => {
    const db = new Model({key, chat})
    return await db.save()
}

exports.getAll = async (key) => {
   const result = await  Model.find({key: key})
    return result
}

exports.findByWhatsAppId = async (key, phone) => {
    const result = await  Model.find({'chat.id': phone})
    return result
}