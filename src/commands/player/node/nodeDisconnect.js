module.exports = {
    name: 'nodeDisconnect',
    type: 'nodeDisconnect',
    channel: '$getConfig[logs.status]',
    code: `
        Lavalink $eventInfo[name] disconnected.
    `
};