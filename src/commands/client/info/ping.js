module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Pong! 🏓}
                {field:Client latency:\`$interactionPingms\`:true}
                {field:API latency:\`$round[$ping]ms ($guildShardID)\`:true}
                {field:MongoDB ping:\`$round[$mongoPing]ms\`:false}
				{footer:Total\: $math[$round[$ping]+$round[$interactionPing]+$round[$mongoPing]]ms}
                {color:$getMVar[embedColor]}
            }
        ]
    `
}]