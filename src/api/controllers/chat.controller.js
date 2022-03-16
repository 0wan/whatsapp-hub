exports.listAll = async (req, res) => {
    const data = await WhatsAppInstances[req.query.key].getAllChats(
        //
    )
    return res.status(201).json({ error: false, data: data })
}

exports.listById = async (req, res) => {
    const data = await WhatsAppInstances[req.query.key].getChatById(
        req.query.id
    )
    return res.status(201).json({ error: false, data: data })
}
