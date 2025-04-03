module.exports = {
    name: 'nodeDisconnect',
    type: 'nodeDisconnect',
    channel: '1352977115049623552',
    code: `
        $title[$eventInfo[name] Disconnected]
        $description[Lavalink **$eventInfo[name]** disconnected.]
        $color[Red]
        $addTimestamp
    `
};