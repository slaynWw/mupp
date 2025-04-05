module.exports = [{
    name: "z",
    aliases: ["e"],
    code: `
    
    $eval[$message]

    $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

    $onlyIF[529790206195269632==$authorID;
        Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
        {options:
            {reply:$messageID}
        }
    ]
    `
}];