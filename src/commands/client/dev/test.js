module.exports = [{
    name: "test",
    aliases: ["t"],
    code: `
    $get[1]
    $let[1;arbuz]

    $onlyIF[529790206195269632==$authorID;
        Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
        {options:
            {reply:$messageID}
        }
    ]
    `
}];