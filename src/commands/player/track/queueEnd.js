module.exports = {
    name: "queueEnd",
    type: 'queueEnd',
    channel: '$channelId',
    $if: 'old',
    code: `
        $deleteChannelVar[playerID;$playerChannelID]
        $setVoiceStatus[$voiceID;]
    `   
};