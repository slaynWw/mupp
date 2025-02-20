module.exports = {
    name: 'nodeDestroy',
    type: 'nodeDestroy',
    channel: '$getConfig[logs.status]',
    code: `
        Lavalink $eventInfo[name] destroyed.\nCode:  $eventInfo[code]\nReason:  $eventInfo[reason]
    `
};