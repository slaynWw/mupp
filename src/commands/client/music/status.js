module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Amethyst Node:https://i.imgur.com/gNQsSaP.png}
                {field:Статус:$replaceText[$replaceText[$nodeInfo[Amethyst;status];online;online 🟢];offline;offline 🔴]:true}
                {field:Плеер:$nodeInfo[Amethyst;player.used]/1:true}
                {field:Локация:Лондон, Великобритания:true}
                {color:$getMVar[embedColor]}
            }
            ;everyone;true;false
        ]

        $createObject[emojis;$getMVar[emojis]]
        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
};

//{field:Почему только одна нода?:А пошёл ты нахуй, больше бабок на сервак мне впадлу тратить.:false}

//$replaceText[$replaceText[$nodeInfo[ChalresNaig;status];online;🟢 online];offline;🔴 offline]