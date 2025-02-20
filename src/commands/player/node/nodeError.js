module.exports = {
    name: 'nodeError',
    type: 'nodeError',
    channel: '$getConfig[logs.status]',
    code: `
        Lavalink $eventInfo[name] error: $eventInfo[error]
    `
};