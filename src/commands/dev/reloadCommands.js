module.exports = [{
    name: "update",
    aliases: ["reload", "upd"],
    code: `
    $author[Команды и переменные успешно перезагрузились!]
    $addField[Aoi.db ping;\`$round[$databasePing]ms\`;true]
    $addField[Client ping;\`$pingms\`;true]
    $color[$getVar[embedColor]]
    $reply[$messageID;false]

    $let[msg;$reload[commands]]
    $let[msg1;$reload[variables]]
    $let[msg2;$reload[statuses]]
    $let[msg3;$reload[functions]]

    $onlyIF[529790206195269632==$authorID;
        Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
        {options:
            {reply:$messageID}
        }
    ]
    `
}];