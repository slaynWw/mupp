const config = require('./config');
const { AoiClient} = require('aoi.js');
const aoimongo = require("aoi.mongodb");
const { Plugins } = require("scootz.js");
const { Manager } = require('aoijs.lavalink');
const { ClusterClient, getInfo } = require('discord-hybrid-sharding');

const client = new AoiClient({
    token: config.token,
    prefix: config.prefix,
    intents: ['Guilds', 'GuildMessages', 'GuildVoiceStates', 'DirectMessages', 'MessageContent'],
    events: ['onMessage', 'onInteractionCreate', 'onVoiceStateUpdate', 'onGuildJoin', 'onGuildLeave'],
    disableAoiDB: true,
    suppressAllErrors: config.debug ? false : true,
    aoiLogs: config.debug,
    shards: getInfo().SHARD_LIST,
    shardCount: getInfo().TOTAL_SHARDS,
});

aoimongo.setup({
    client: client,
    mongoURL: config.mongoDB,
    variables: require("./handler/variables.js")
});

new Manager(client, {
    nodes: [{
        name: 'free1',
        host: 'lava-v4.ajieblogs.eu.org',
        port: 443,
        auth: 'https://dsc.gg/ajidevserver',
        secure: true
    },{
        name: 'free2',
        host: 'lavalink_v4.muzykant.xyz',
        port: 443,
        auth: 'https://discord.gg/v6sdrD9kPh',
        secure: true
    }],
    searchEngine: 'spotify',
    maxQueueSize: 1000,
    maxPlaylistSize: 1000,
    debug: config.debug,
    voiceConnectionTimeout: 60,
    reconnectInterval: 20,
    reconnectTries: 200,
    userAgent: 'slxxxx',
    moveOnDisconnect: true,
    noLimitVolume: false
});

client.shard = new ClusterClient(client);

require("./handler/ready.js")(client);
require("./handler/statuses.js")(client);

client.loadCommands("./src/commands/client/", config.debug);
client.loadVoiceEvents('./src/commands/player/', config.debug);

const plugins = new Plugins({ client: client });
plugins.loadPlugins();