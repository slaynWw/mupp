module.exports = {
    name: 'leave',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            Бот покинул голосовой канал.\n-# Чтобы добавить трек используйте </play\:$getApplicationCommandID[play;global]>
            ;everyone;true;false
        ]

        $leaveVC
        $deleteNowPlaying

        $let[msgID;$readFile[./src/data/message.txt]]

        $onlyIf[$hasPlayer==true;
            Упс... Что-то пошло не так...\n-# Бот ничего не проигрывает.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]

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