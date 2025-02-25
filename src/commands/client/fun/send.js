module.exports = [{
    name: "send",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionModal[Анонимное сообщение;anonymousMessage;
            {actionRow:
                {textInput:Сообщение:2:messageInput:true::1:500}
            }
        ]

        $writeFile[./src/data/recipient.txt;$slashOption[user]]

        $onlyIf[$isUserDmEnabled[$slashOption[user]]==true;
            Упс... Что-то пошло не так...\n-# Пользователь отключил личные сообщение с пользовательских серверов.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]

        $onlyIf[$isBot[$slashOption[user]]==false;
            Упс... Что-то пошло не так...\n-# Упомянутый пользователь является ботом.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
}, {
    name: "anonymousMessage",
    type: "interaction",
    prototype: "modal",
    code: `
        $interactionReply[Вы отправили сообщение <@$get[user]>!
            ;everyone;true;false
        ]

        $sendDm[$textInputValue[messageInput]\n-# Сообщение с сервера [$guildName](https://dsc.gg/qffxd);$get[user];false]

        $setUserMVar[receivedMessageCount;$sum[$getUserMVar[receivedMessageCount;$get[user]];1];$get[user]]
        $setUserMVar[sendedMessageCount;$sum[$getUserMVar[sendedMessageCount;$interactionData[author.id]];1];$interactionData[author.id]]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $let[user;$readFile[./src/data/recipient.txt]]
    `
}]