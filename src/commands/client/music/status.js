module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Lavalink nodes}
                {field:Ajieblogs (secured):$get[1]:false}
                {field:Embotic (non-secured):$get[2]:true}
                {field:Oreshi (non-secured):$get[3]:true}
                {field:Предупреждение!:Без рабочих нод, не будет работать музыка в боте.\nВ боте используются бесплатные ноды от других людей,\nтак что возможны лаги во время проигрывания музыки.:false}
                {color:$getMVar[embedColor]}
            }
            ;everyone;true;false
        ]

        $let[1;$replaceText[$replaceText[$nodeInfo[Ajieblogs;status];online;🟢 online];offline;🔴 offline]]
        $let[2;$replaceText[$replaceText[$nodeInfo[Embotic;status];online;🟢 online];offline;🔴 offline]]
        $let[3;$replaceText[$replaceText[$nodeInfo[Oreshi;status];online;🟢 online];offline;🔴 offline]]
    `
};