module.exports = [{
    channel: '$channelId',
    type: 'queueEnd',
    code: `
        $deleteFile[./src/data/images/player.png]
        $setVoiceStatus[$voiceID;]
    `
}];