require('dotenv').config();

module.exports = {
    token: process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
    prefix: process.env.PREFIX,
    debug: process.env.DEBUG === 'true' ? true : false,
    mongoDB: process.env.MONGODB,
    emojis: require('./emojis.js'),
    logs: require('./logs.js')
};