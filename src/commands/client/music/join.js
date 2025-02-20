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