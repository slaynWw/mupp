require('dotenv').config();

module.exports = {
    token: process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
    prefix: process.env.PREFIX,
    mongoDB: process.env.MONGODB,
    debug: process.env.DEBUG === 'true' ? true : false,
    nodes: require('./nodes.js'),
    logs: require('./logs.js'),
    loader: require('./loader.js'),
    errors: process.env.SUPPRESSALLERRORS === 'true' ? true : false
};
