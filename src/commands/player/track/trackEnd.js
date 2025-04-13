module.exports = {
    type: 'trackEnd',
    channel: '$channelId',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$voiceMemberCount[$voiceId[$clientId]]!=1||$hasPlayer==true&&$channelExists[$channelId]==true]
            $deleteNowPlaying
        $else
            $leaveVC
        $endif
    `   
};