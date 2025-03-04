module.exports = {
    name: "nodeError",
    type: 'nodeError',
    channel: '$channelId',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$voiceMemberCount[$voiceId[$clientId]]!=1||$hasPlayer==true&&$channelExists[$channelId]==true]
            $deleteNowPlaying
            $deleteMessage[$get[msgID];$channelID]
        $else
            $leaveVC
        $endif

        $let[msgID;$readFile[./src/data/message.txt]]
    `   
};