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
                {field:MongoDB latency:\`$round[$mongoPing]ms\`:false}
                {footer:Total latency - $round[$sum[$sum[$messagePing;$ping];$mongoPing]]ms}
                {color:$getMVar[embedColor]}
            }
        ]
    `
}]