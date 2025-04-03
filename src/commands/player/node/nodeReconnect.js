module.exports = {
    name: 'nodeReconnect',
    type: 'nodeReconnect',
    channel: '1352977115049623552',
    code: `
        $title[$eventInfo[name] Reconnecting]
        $description[Lavalink **$eventInfo[name]** is reconnecting.\n**Interval:**  $eventInfo[interval]\n**Left:**  $eventInfo[left]]
        $color[Yellow]
        $addTimestamp
    `
};