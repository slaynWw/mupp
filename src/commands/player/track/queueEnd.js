module.exports = {
    name: "queueEnd",
    type: 'queueEnd',
    channel: '$channelId',
    $if: 'old',
    code: `
        $deleteFile[./src/data/player.jpg]
        $deleteChannelVar[playerID;$playerChannelID]
        $setVoiceStatus[$voiceID;]
    `   
};