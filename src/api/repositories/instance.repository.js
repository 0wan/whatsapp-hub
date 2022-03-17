const fs = require("fs");
const path = require("path");
const logger = require('pino')()
const {WhatsAppInstance} = require("../class/instance");
// const Model = require("../models/instance.model")
//
// exports.create = async (attributes) => {
//     const db = new Model(attributes)
//     return await db.save()
// }
//
// exports.restore = async () => {
//     // get all instances
//     // create file.json and put content onto it
// }

exports.restoreFs = async () => {
    try {
        let restoredSessions = []
        const instances = fs.readdirSync(path.join(__dirname, `../sessiondata`))
        instances.map((file) => {
            if (file.includes('.json')) {
                restoredSessions.push(file.replace('.json', ''))
            }
        })
        restoredSessions.map((key) => {
            const instance = new WhatsAppInstance(key)
            instance.init()
            WhatsAppInstances[key] = instance
        })

        return true
    }
    catch (e) {
        logger.error(e)
    }
}
