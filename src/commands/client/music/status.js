module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Lavalink nodes}
                {field:Eternal:$get[1]:true}
                {field:Почему только одна нода?:А пошёл ты нахуй, больше бабок на сервак мне впадлу тратить.:false}
                {color:$getMVar[embedColor]}
            }
            ;everyone;true;false
        ]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $let[1;$replaceText[$replaceText[$nodeInfo[Eternal;status];online;🟢 online];offline;🔴 offline] $nodeInfo[Eternal;player.used]/$nodeInfo[Eternal;player.total]]
    `
};