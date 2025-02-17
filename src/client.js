const { AoiClient } = require('aoi.js');
const { Plugins } = require("scootz.js");
const { Handler } = require("aoi.js-handler")
const { ClusterClient, getInfo } = require('discord-hybrid-sharding');
const config = require('./config');

const client = new AoiClient({
    token: config.token,
    prefix: config.prefix,
    intents: ['Guilds', 'GuildMessages', 'GuildVoiceStates', 'DirectMessages', 'MessageContent'],
    events: ['onMessage', 'onInteractionCreate', 'onVoiceStateUpdate', 'onGuildJoin', 'onGuildLeave'],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: config.securityKey
    },
    suppressAllErrors: config.debug ? false : true,
    aoiLogs: config.debug,
    shards: getInfo().SHARD_LIST,
    shardCount: getInfo().TOTAL_SHARDS,
});

client.shard = new ClusterClient(client);

const handler = new Handler(
    {
        client: client,
        readyLog: true
    },
    {
        border: {
            type: "round",
            color: "white"
        },
        commandLoader: {
            header: "white",
            title: "white",
            file: "gray",
            directory: "gray",
            type: "white",
            commandName: "white",
            reason: "gray",
            status: "darkSeaGreen"
        }
    },
    __dirname
);

handler.loadCommands('./commands');
handler.loadStatuses('./handler/status.js');
handler.loadVariables('./handler/variables.js');
handler.loadFunctions('./handler/functions');

const plugins = new Plugins({ client: client });
plugins.loadPlugins();