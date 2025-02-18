module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Pong! 🏓}
                {field:Client ping:\`$pingms\`:true}
                {field:Voice ping:\`$replaceText[$playerPingms;-1ms;none]\`:true}
                {field:MongoDB ping:\`$round[$mongoPing]ms\`:false}
                {color:$getMVar[embedColor]}
            }
            ;everyone;false;false
        ]
    `
}]