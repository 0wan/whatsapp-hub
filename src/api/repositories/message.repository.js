const Message = require("../models/message.model")

exports.store = async (id, attributes) => {
    const db = new Message({instanceKey: id, ...attributes})
    return await db.save()
}
