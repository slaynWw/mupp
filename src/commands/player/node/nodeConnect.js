module.exports = {
    name: 'nodeConnect',
    type: 'nodeConnect',
    channel: '1352977115049623552',
    code: `
        $title[$eventInfo[name] Connected]
        $description[Lavalink **$eventInfo[name]** is ready to accept connections.]
        $color[Green]
        $addTimestamp
    `
};