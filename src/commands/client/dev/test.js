module.exports = {
    name: "test", 
    aliases: ["t"],
    $if: "old",
    code: `

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}