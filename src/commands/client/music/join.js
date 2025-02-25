module.exports = {
    name: 'join',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            Бот подключился к каналу <#$voiceID>!\n-# Чтобы добавить трек используйте </play\:$getApplicationCommandID[play;global]>
            ;everyone;true;false
        ]

        $connect

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIf[$voiceID!=;
            Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
};