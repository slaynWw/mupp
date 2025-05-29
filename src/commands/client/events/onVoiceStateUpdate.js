module.exports = [{
    name: "voiceJoin",
    channel: "$channelId",
    type: "voiceStateUpdate",
    $if: "old",
    code: `
        $if[$oldState[deaf]==$newState[deaf]&&$oldState[mute]==$newState[mute]&&$oldState[streaming]==$newState[streaming]&&$oldState[selfVideo]==$newState[selfVideo]]
            $setUserMVar[voiceJoined;$dateStamp;$authorID]
            $setUserMVar[voiceID;$voiceID;$authorID]
            $appendFile[./src/data/voice.log;\[+\] $username[$authorID] $channelName[$voiceId]\n;utf8]
            $log[\[+\] \[$guildName\] $username[$authorID] $channelName[$voiceId]]
        $endIf

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
        
        $appendFile[./src/data/voice.log;\[-\] $username[$authorID] $channelName[$getUserMVar[voiceID;$authorID]]\n;utf8]
        $appendFile[./src/data/voice.log;\[T\] $username[$authorID] $math[$dateStamp-$getUserMVar[voiceJoined;$authorID]]ms\n;utf8]
        $log[\[-\] \[$guildName\] $username[$authorID] $channelName[$getUserMVar[voiceID;$authorID]]]
        $log[\[T\] \[$guildName\] $username[$authorID] $math[$dateStamp-$getUserMVar[voiceJoined;$authorID]]ms]

        $setUserMVar[voiceTime;$math[$getUserMVar[voiceTime;$authorID]+$math[$dateStamp-$getUserMVar[voiceJoined;$authorID]];$authorId]

        $onlyIf[$getUserMVar[voiceJoined;$authorId]!=0]
        $onlyIf[$voiceId==]
    `
}];