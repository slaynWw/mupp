module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Pong! 🏓}
                {field:Client ping:\`$pingms\`:true}
                {field:Aoi.db ping:\`$round[$databasePing]ms\`:true}
                {color:$getVar[embedColor]}
            }
            ;everyone;false;false
        ]
    `
}]