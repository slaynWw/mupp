require('dotenv').config();

module.exports = {
    token: process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
    prefix: process.env.PREFIX,
    mongoDB: process.env.MONGODB,
    mySQL: process.env.MYSQL,
    securityKey: process.env.SECURITYKEY,
    debug: process.env.DEBUG === 'true' ? true : false,
    data: require('./data.js'),
    nodes: require('./nodes.js'),
    emojis: require('./emojis.js'),
    loader: require('./loader.js'),
    images: require('./images.js'),
    errors: process.env.SUPPRESSALLERRORS === 'true' ? true : false
};
