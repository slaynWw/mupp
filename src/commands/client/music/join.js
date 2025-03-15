module.exports = {
    name: 'join',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            <:join:1350311174389891195> <@$clientID> подключился к <#$voiceID>
            ;everyone;true;false
        ]
        $setDeafen[true]
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