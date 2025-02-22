module.exports = {
    name: "resetVar", 
    aliases: ["rv"],
    code: `
        $setMVar[emojis;{
            "spotify": "<:spotify:1342307966828675192>",
            "soundcloud": "<:soundcloud:1342308522754572338>",
            "youtube": "<:youtube:1342308059233652738>",
            "gold": "<:gold:1342327846936514662>",
            "discord": "<:discord:1342414536967192626>",
            "qff": "<:qff:1342414492469821451>",
            "shards": "<:shards:1342543982210584618>"
        }]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}