const Chat = require('../repositories/chat.repository')

exports.listAll = async (req, res) => {
    const data = await Chat.getAll(req.query.key)
    return res.status(201).json({ error: false, data: data })
}

exports.listById = async (req, res) => {
    const data = await Chat.findByWhatsAppId(req.query.key, req.query.phone)
    return res.status(201).json({ error: false, data: data })
}
