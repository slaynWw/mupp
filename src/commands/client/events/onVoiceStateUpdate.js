module.exports = [{
    name: "voiceJoin",
    channel: "$channelId",
    type: "voiceStateUpdate",
    code: `
        $if[$oldState[deaf]==$newState[deaf]&&$oldState[mute]==$newState[mute]&&$oldState[streaming]==$newState[streaming]&&$oldState[selfVideo]==$newState[selfVideo]]
            $setUserMVar[voiceJoined;$dateStamp;$authorID]
            $setUserMVar[voiceID;$voiceID;$authorID]
            $log[\[+\] $username[$authorID] $channelName[$voiceId]]
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
        $setUserMVar[voiceID;;$authorID]
		$setUserMVar[voiceJoined;0;$authorID]
        
        $log[\[-\] $username[$authorID] $channelName[$getUserMVar[voiceID;$authorID]]]
        $log[\[T\] $username[$authorID] $math[$dateStamp-$getUserMVar[voiceJoined;$authorID]]ms]

        $setUserMVar[voiceTime;$math[$getUserMVar[voiceTime;$authorID]+$math[$dateStamp-$getUserMVar[voiceJoined;$authorID]];$authorId]

        $onlyIf[$checkContains[$authorID;529790206195269632;422616624806363136;662689261371392017;461188008197226506;564115613333717024;847162773871394886]==true]
        $onlyIf[$getUserMVar[voiceJoined;$authorId]!=0]
        $onlyIf[$voiceId==]
    `
}];