const config = require('./config');
const { AoiClient } = require('aoi.js');
const aoimongo = require("aoi.mongodb");
const { Plugins } = require("scootz.js");
const { Handler } = require("aoi.js-handler");
const { Manager } = require('aoijs.lavalink');
const { ClusterClient, getInfo } = require('discord-hybrid-sharding');

const client = new AoiClient({
    token: config.token,
    prefix: config.prefix,
    intents: ['Guilds', 'GuildMessages', 'GuildVoiceStates', 'DirectMessages', 'MessageContent'],
    events: ['onMessage', 'onInteractionCreate', 'onVoiceStateUpdate', 'onGuildJoin', 'onGuildLeave'],
    disableAoiDB: true,
    suppressAllErrors: true,
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
    nodes: config.nodes,
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

const handler = new Handler(
    {
        client: client,
        readyLog: false
    },
    config.loader,
    __dirname
);

handler.loadFunctions('./handler/functions');
handler.loadStatuses('./handler/statuses.js');

client.shard = new ClusterClient(client);
client.loadCommands('./src/commands/client/', config.debug)
client.loadVoiceEvents('./src/commands/player/', config.debug);

const plugins = new Plugins({ client: client });
plugins.loadPlugins();

require("./handler/ready.js")(client);