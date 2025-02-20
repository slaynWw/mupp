module.exports = {
    name: 'nodeReconnect',
    type: 'nodeReconnect',
    channel: '$getConfig[logs.status]',
    code: `
        Lavalink $eventInfo[name] is reconnecting.\nInterval:  $eventInfo[interval\nLeft:  $eventInfo[left]
    `
};