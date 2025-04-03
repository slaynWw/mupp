module.exports = {
    name: "nodeError",
    type: 'nodeError',
    channel: '1352977115049623552',
    code: `
        $title[$eventInfo[name] Error]
        $description[Lavalink **$eventInfo[name]** error: $eventInfo[error]]
        $color[Red]
        $addTimestamp
    `   
};