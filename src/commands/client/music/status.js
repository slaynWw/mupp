module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Lavalink nodes}
                {field:Muzykant:$get[1]:true}
                {field:Ajiedev:$get[2]:true}
                {field:Предупреждение!:Без рабочих нод, не будет работать музыка в боте.\nВ боте используются бесплатные ноды от других людей,\nтак что возможны лаги во время проигрывания музыки.:false}
                {color:$getMVar[embedColor]}
            }
            ;everyone;true;false
        ]

        $let[1;$replaceText[$replaceText[$nodeInfo[Muzykant;status];online;🟢 online];offline;🔴 offline] $nodeInfo[Muzykant;player.used]/$nodeInfo[Muzykant;player.total]]
        $let[2;$replaceText[$replaceText[$nodeInfo[Ajiedev v4;status];online;🟢 online];offline;🔴 offline] $nodeInfo[Ajiedev v4;player.used]/$nodeInfo[Ajiedev v4;player.total]]
    `
};