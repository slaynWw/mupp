module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Pong! 🏓}
                {field:Client latency:\`$interactionPingms\`:true}
                {field:API latency:\`$pingms\`:true}
                {field:MongoDB ping:\`$round[$mongoPing]ms\`:false}
                {color:$getMVar[embedColor]}
            }
        ]
    `
}]