module.exports = {
    name: 'nodeDestroy',
    type: 'nodeDestroy',
    channel: '1352977115049623552',
    code: `
        $title[$eventInfo[name] Destroyed]
        $description[Lavalink **$eventInfo[name]** destroyed.\n**Code:**  $eventInfo[code]\n**Reason:**  $eventInfo[reason]]
        $color[Red]
        $addTimestamp
    `
};