module.exports = {
    name: "test", 
    aliases: ["t"],
    code: `
        $getObjectProperty[emojis;$message[1]]

        $createObject[emojis;$getMVar[emojis]]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$authorID];1];$authorID]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}