module.exports = {
    name: 'nodeError',
    type: 'nodeError',
    channel: '$getConfig[logs.status]',
    code: `
        $log[Lavalink $eventInfo[name] error: $eventInfo[error]]
    `
};