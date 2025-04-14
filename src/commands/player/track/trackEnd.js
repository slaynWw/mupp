module.exports = {
    name: "trackEnd",
    type: 'trackEnd',
    channel: '$channelId',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$channelExists[$channelId]==true]
            $deleteChannelVar[playerID;$channelID]
            $deleteMessage[$getChannelMVar[playerID;$channelId];$channelID]
        $else
            $leaveVC
        $endif
    `   
};