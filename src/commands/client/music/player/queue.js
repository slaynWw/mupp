module.exports = {
    name: 'queueButton',
    type: "interaction",
    prototype: "button",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Очередь $guildName[$guildID]}
                {thumbnail:$guildIcon}
                {description:Очередь из $queueLength трека/треков ($queueDuration)\n$queue[1;20;{position}. [{title}]({url})]}
                {footer:Чтобы узнать больше, используй /queue <page>}
                {color:$getMVar[embedColor]}
            }
            ;everyone;true;false
        ]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIf[$queueLength!=0;
            Упс... Что-то пошло не так...\n-# Музыкальная очередь пуста! Ипользуйте </play\:$getApplicationCommandID[play;global]> что-бы добавить трек.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
};

//$queue[1;20;{position}. [{title}]({url})]