module.exports = {
    name: 'join',
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $interactionReply[$getEmoji[music.join] <@$clientID> подключился к <#$voiceID>;everyone;true;false]
        $setDeafen[true]
        $joinVC[$voiceID]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $checkVoice

        $onlyIf[$getMVar[categoryMusic]==false;
            Упс... Что-то пошло не так...\n-# Данная команда выключена.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
};