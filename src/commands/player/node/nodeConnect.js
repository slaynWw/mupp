module.exports = {
    name: 'nodeConnect',
    type: 'nodeConnect',
    channel: '$getConfig[logs.status]',
    code: `
        $title[$eventInfo[name] Connected]
        $description[Lavalink **$eventInfo[name]** is ready to accept connections.]
        $color[Green]
        $addTimestamp
    `
};

/*

$sendMessage[Lavalink $eventInfo[name] is ready to accept connections.;true]
s
*/