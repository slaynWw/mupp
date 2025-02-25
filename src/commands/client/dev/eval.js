module.exports = [{
    name: "eval",
    aliases: ["e"],
    code: `
    
    $eval[$message]

    $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$authorID];1];$authorID]

    $onlyIF[529790206195269632==$authorID;
        Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
        {options:
            {reply:$messageID}
        }
    ]
    `
}];