const config = require('./config');
const { Plugins } = require("mupp.js");
const aoimongo = require("aoi.mongodb");
const { AoiClient } = require('aoi.js');
const { AoiCanvas } = require("aoi.canvas");
const { Handler } = require("aoi.js-handler");
const { Manager } = require('aoijs.lavalink');
const { ClusterClient, getInfo } = require('discord-hybrid-sharding');

const client = new AoiClient({
    token: config.token,
    prefix: config.prefix,
    intents: ['Guilds', 'GuildMessages', 'GuildPresences', 'GuildVoiceStates', 'DirectMessages', 'MessageContent', 'GuildMembers'],
    events: ['onMessage', 'onInteractionCreate', 'onVoiceStateUpdate', 'onGuildJoin', 'onGuildLeave', 'onJoin'],
    disableAoiDB: true,
    suppressAllErrors: config.errors,
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
    searchEngine: 'youtube',
    maxQueueSize: 300,
    maxPlaylistSize: 300,
    debug: config.debug,
    voiceConnectionTimeout: 60,
    reconnectInterval: 10,
    reconnectTries: 20,
    userAgent: 'mupp',
    moveOnDisconnect: true,
    noLimitVolume: false
});

client.shard = new ClusterClient(client);

const plugins = new Plugins({ client: client });
const canvas = new AoiCanvas(client);
const handler = new Handler(
    {
        client: client,
        readyLog: false
    },
    config.loader,
    __dirname
);

require("./handler/ready.js")(client);
require("./handler/statuses.js")(client);
handler.loadFunctions('./handler/functions/')
client.loadCommands('./src/commands/client/', config.debug);
client.loadVoiceEvents('./src/commands/player/', config.debug);

plugins.loadPlugins();