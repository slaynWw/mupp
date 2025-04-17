module.exports = {
    name: "queueEnd",
    type: 'queueEnd',
    channel: '$channelId',
    $if: 'old',
    code: `
        $deleteChannelVar[playerID;$playerChannelID]
        $deleteChannelVar[loop;$playerChannelID]
        $setVoiceStatus[$voiceID;]
    `   
};