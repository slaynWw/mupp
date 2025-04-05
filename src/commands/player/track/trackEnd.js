module.exports = {
    name: 'trackEnd',
    type: 'trackEnd',
    channel: '$channelId',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$voiceMemberCount[$voiceId[$clientId]]!=1||$hasPlayer==true&&$channelExists[$channelId]==true]
            $deleteNowPlaying
			$deleteFile[./src/data/images/player.png]
            $setVoiceStatus[$voiceID;]
        $else
            $leaveVC
        $endif
    `   
};