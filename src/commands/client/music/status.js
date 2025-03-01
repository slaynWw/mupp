module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Статус "серверов" нод.}
                {description:Нод по крайней мере на данный момент\nбольше не будет, по той причине что пошли\nвы нахуй, деньги у меня не резиновые, а\nгодных бесплатных нод особо ненайдёшь.}
                {field:slxxxx:$replaceText[$replaceText[$nodeInfo[slxxxx;status];online;online 🟢];offline;offline 🔴]⠀⠀$nodeInfo[slxxxx;player.used]/$nodeInfo[slxxxx;player.total] 🎤:true}
                {color:$getMVar[embedColor]}
            }
            ;everyone;true;false
        ]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
};

//{field:Почему только одна нода?:А пошёл ты нахуй, больше бабок на сервак мне впадлу тратить.:false}

//$replaceText[$replaceText[$nodeInfo[ChalresNaig;status];online;🟢 online];offline;🔴 offline]