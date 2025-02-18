module.exports = {
    name: 'status',
    aliases: ['nodes'],
    code: `
        $title[Lavalink nodes]
        $description[Без рабочих нод, не будет работать музыка в боте.]
        $addField[Tranquility;$nodeInfo[Tranquility;status];true]
        $addField[Requiem;$nodeInfo[Requiem;status];true]
        $color[$getMVar[embedColor]]
        $reply[$messageID;false]
    `
};