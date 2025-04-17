module.exports = {
    name: "queueEnd",
    type: 'queueEnd',
    channel: '$channelId',
    $if: 'old',
    code: `
        $deleteChannelVar[playerID;$channelID]
        $deleteChannelVar[loop;$channelID]
        $setVoiceStatus[$voiceID;]
    `   
};