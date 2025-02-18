module.exports = [{
    name: "update",
    aliases: ["reload", "upd"],
    code: `
    $author[Команды успешно перезагружены!]
    $addField[API latency;\`$pingms\`;true]
    $addField[Client latency;\`$round[$messagePing]ms\`;true]
    $color[$getMVar[embedColor]]
    $reply[$messageID;false]

    $let[msg;$updateCommands]

    $onlyIF[529790206195269632==$authorID;
        Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
        {options:
            {reply:$messageID}
        }
    ]
    `
}];