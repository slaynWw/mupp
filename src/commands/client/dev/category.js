module.exports = [{
    name: "category",
    aliases: ["c"],
    code: `

    Категория $message[1] была изменена на $message[2]
    $setMVar[category$message[1];$message[2]]

    $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

    $onlyIF[529790206195269632==$authorID;
        Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
        {options:
            {reply:$messageID}
        }
    ]
    `
}];//