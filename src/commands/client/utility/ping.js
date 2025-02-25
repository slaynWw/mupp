module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $if[$voiceID[$clientID]==]

            $interactionReply[
                {newEmbed:
                    {author:Pong! 🏓}
                    {field:Client latency:\`$interactionPingms\`:true}
                    {field:API latency:\`$round[$ping]ms ($guildShardID)\`:true}
                    {field:MongoDB latency:\`$round[$mongoPing]ms\`:false}
                    {color:$getMVar[embedColor]}
                }
            ]
        
        $else

            $interactionReply[
                {newEmbed:
                    {author:Pong! 🏓}
                    {field:Client latency:\`$interactionPingms\`:true}
                    {field:Voice latency:\`$playerPingms\`:true}
                    {field:API latency:\`$round[$ping]ms ($guildShardID)\`:true}
                    {field:MongoDB latency:\`$round[$mongoPing]ms\`:false}
                    {color:$getMVar[embedColor]}
                }
            ]

        $endIf

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
}]