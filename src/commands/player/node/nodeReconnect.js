module.exports = {
    name: 'nodeReconnect',
    type: 'nodeReconnect',
    channel: '$getConfig[logs.status]',
    code: `
        $log[Lavalink $eventInfo[name] is reconnecting.]
        $log[Interval:  $eventInfo[interval]
        $log[Left:  $eventInfo[left]]
    `
};