module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Lavalink nodes}
                {field:ChalresNaig:$get[1]:true}
                {field:slxxxx:$get[2]:true}
                {color:$getMVar[embedColor]}
            }
            ;everyone;true;false
        ]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $let[1;$replaceText[$replaceText[$nodeInfo[ChalresNaig;status];online;🟢 online];offline;🔴 offline] $nodeInfo[ChalresNaig;player.used]/$nodeInfo[ChalresNaig;player.total]]
        $let[2;$replaceText[$replaceText[$nodeInfo[slxxxx;status];online;🟢 online];offline;🔴 offline] $nodeInfo[slxxxx;player.used]/$nodeInfo[slxxxx;player.total]]
    `
};

//{field:Почему только одна нода?:А пошёл ты нахуй, больше бабок на сервак мне впадлу тратить.:false}