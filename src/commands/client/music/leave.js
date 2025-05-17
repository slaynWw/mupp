module.exports = {
    name: 'leave',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[$getEmoji[music.leave] <@$clientID> покинул <#$voiceID>;everyone;true;false]

        $disconnect
        $setVoiceStatus[$voiceID;]
        $deleteChannelVar[playerID;$channelID]
        $deleteMessage[$getChannelMVar[playerID;$channelId];$channelID]
        $stopTrack

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