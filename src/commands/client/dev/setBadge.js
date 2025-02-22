module.exports = [{
    name: "setBadge",
    aliases: ["sb"],
    code: `
        Вы успешно выдали $message[2] пользователю $message[1]

        $setUserMVar[customBadges;$message[2];$get[user]]

        $let[user;$replaceText[$replaceText[$replaceText[$message[1];<;];@;];>;]]

        $onlyIF[$message[2]!=;
            Упс... Что-то пошло не так...\nЗначки \`ss, s2\`\n-# Укажите значки которые вы хотите выдать.
            {options:
                {reply:$messageID}
            }
        ]

        $onlyIF[$isBot[$message[1]]==false;
            Упс... Что-то пошло не так...\n-# Пользователь является ботом.
            {options:
                {reply:$messageID}
            }
        ]

        $onlyIF[$userExists[$message[1]]!=true;
            Упс... Что-то пошло не так...\n-# Такого пользователя не существует.
            {options:
                {reply:$messageID}
            }
        ]

        $onlyIF[$message[1]!=;
            Упс... Что-то пошло не так...\n-# Укажите пользователя.
            {options:
                {reply:$messageID}
            }
        ]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}]