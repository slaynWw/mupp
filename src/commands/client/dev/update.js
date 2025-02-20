module.exports = [{
    name: "update",
    aliases: ["reload", "upd"],
    code: `
    $author[Команды успешно перезагружены!]
	$addField[MongoDB latency;\`$round[$mongoPing]ms\`;false]
    $addField[API latency;\`$round[$ping]ms\`;true]
    $addField[Client latency;\`$round[$messagePing]ms\`;true]
    $footer[Total latency - $round[$sum[$sum[$messagePing;$ping];$mongoPing]]ms]
    $color[$getMVar[embedColor]]
    $reply[$messageID;false]

    $let[1;$updateCommands]

    $onlyIF[529790206195269632==$authorID;
        Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
        {options:
            {reply:$messageID}
        }
    ]
    `
}];