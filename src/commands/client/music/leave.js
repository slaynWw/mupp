module.exports = {
    name: 'leave',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            <:leave:1350311181973192834> <@$clientID> покинул <#$voiceID>
            ;everyone;true;false
        ]

        $disconnect
        $deleteNowPlaying

        $let[msgID;$readFile[./src/data/message.txt]]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

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