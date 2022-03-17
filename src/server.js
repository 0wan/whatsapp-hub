const app = require('./config/express')
const mongoose = require('mongoose')
const config = require('./config/config')
const logger = require('pino')()
const sess = require('./api/repositories/instance.repository')
let server
let db
// mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
//     logger.info('Connected to MongoDB')
// })

mongoose.connect(config.mongoose.url, config.mongoose.options)
db = mongoose.connection
db.on('error', (err) => unexpectedErrorHandler(err))
db.once('open', () => logger.info(`Database Connected`))

server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`)
    logger.info(`Trying to restore sessions`)
    sess.restoreFs().catch(e => logger.error(e))
})
const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed')
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
}

const unexpectedErrorHandler = (error) => {
    logger.error(error)
    exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
    logger.info('SIGTERM received')
    if (server) {
        server.close()
    }
})

module.exports = app
