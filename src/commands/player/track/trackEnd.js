module.exports = {
    name: "trackEnd",
    type: 'trackEnd',
    channel: '$channelId',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$channelExists[$channelId]==true]
            $deleteNowPlaying
            $deleteFile[./src/data/player.jpg]
        $else
            $leaveVC
        $endif
    `   
};