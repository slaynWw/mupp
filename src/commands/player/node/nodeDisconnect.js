module.exports = {
    name: 'nodeDisconnect',
    type: 'nodeDisconnect',
    channel: '$getConfig[logs.status]',
    code: `
        $log[Lavalink $eventInfo[name] disconnected.]
    `
};