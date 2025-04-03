module.exports = [{
    name: "userJoinVoice",
    channel: "$channelId",
    type: "voiceStateUpdate",
    $if: "old",
    code: `
        $if[$oldState[deaf]==$newState[deaf]&&$oldState[mute]==$newState[mute]&&$oldState[streaming]==$newState[streaming]&&$oldState[selfVideo]==$newState[selfVideo]]
            $setUserMVar[voiceJoined;$dateStamp;$authorID]
            $log[joined]
        $endIf

        $onlyIf[529790206195269632==$authorID]
        $onlyIf[$getUserMVar[voiceJoined;$authorID]==]
        $onlyIf[$isBot[$authorID]==false]
        $onlyIf[$voiceId!=]
    `
},{
    name: "userLeaveVoice",
    channel: "$channelId",
    type: "voiceStateUpdate",
    $if: "old",
    code: `
        $setUserMVar[voiceJoined;;$authorID]
        $setUserMVar[voiceTime;$math[$get[voiceTime]-$get[voiceJoined]];$authorID]
        $log[leaved]

        $let[voiceTime;$getUserMVar[voiceTime;$authorID]]
        $let[voiceJoined;$getUserMVar[voiceJoined;$authorID]]

        $onlyIf[529790206195269632==$authorID]
        $onlyIf[$getUserMVar[voiceJoined;$authorID]!=]
        $onlyIf[$isBot[$authorID]==false]
        $onlyIf[$voiceId==]
    `
}];

/*

*/

//$replaceText[$replaceText[$isStreaming[$authorID;$guildID];true;false];false;true]
//$setUserMVar[voiceJoined;$dateStamp;$authorID]