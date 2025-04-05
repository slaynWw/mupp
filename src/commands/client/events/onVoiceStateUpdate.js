module.exports = [{
    name: "voiceJoin",
    channel: "$channelId",
    type: "voiceStateUpdate",
    code: `
        $if[$oldState[deaf]==$newState[deaf]&&$oldState[mute]==$newState[mute]&&$oldState[streaming]==$newState[streaming]&&$oldState[selfVideo]==$newState[selfVideo]]
            $setUserMVar[voiceJoined;$dateStamp;$authorID]
            $log[$username[$authorID] подключился к $channelName[$voiceId]]
        $endIf

        $onlyIf[$checkContains[$authorID;529790206195269632;422616624806363136;662689261371392017;461188008197226506;564115613333717024;847162773871394886]==true]
        $onlyIf[$getUserMVar[voiceJoined;$authorId]==0]
        $onlyIf[$voiceId!=]
    `
},{
    name: "voiceLeave",
    channel: "$channelId",
    type: "voiceStateUpdate",
    code: `
        $log[$username[$authorID] провел $getUserMVar[voiceTime;$authorID]ms в голосовом.]

        $setUserMVar[voiceJoined;0;$authorID]
        $setUserMVar[voiceTime;$math[$getUserMVar[voiceTime;$authorID]+$math[$dateStamp-$getUserMVar[voiceJoined;$authorID]];$authorId]

        $log[$username[$authorID] отключился]

        $onlyIf[$checkContains[$authorID;529790206195269632;422616624806363136;662689261371392017;461188008197226506;564115613333717024;847162773871394886]==true]
        $onlyIf[$getUserMVar[voiceJoined;$authorId]!=0]
        $onlyIf[$voiceId==]
    `
}];