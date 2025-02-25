module.exports = {
    name: "queue",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Очередь $guildName[$guildID]}
                {thumbnail:$guildIcon}
                {description:Очередь из $queueLength трека/треков ($queueDuration)\n$queue[$if[$slashOption[page]==;1;$slashOption[page]];20;{position}. [{title}]({url})]}
                {color:$getMVar[embedColor]}
            }
            ;everyone;true;false
        ]

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
}