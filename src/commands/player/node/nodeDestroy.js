module.exports = {
    name: 'nodeDestroy',
    type: 'nodeDestroy',
    channel: '$getConfig[logs.status]',
    code: `
        $log[Lavalink $eventInfo[name] destroyed.]
        $log[Code:  $eventInfo[code]]
        $log[Reason:  $eventInfo[reason]]
    `
};