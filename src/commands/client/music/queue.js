module.exports = [{
    name: "queue",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[
            {newEmbed:
                {description:-# ./commands/music}
                {field:/nowplaying.md:[$songInfo[title]]($songInfo[url]):false}
                {color:$getData[embed.color]}
                {field:/queue.md:Очередь из $queueLength трека/треков ($queueDuration)\n$queue[$get[p];10;{position}. [{title}]({url})]:false}{color:$getData[embed.color]}
            }
            ;true;false
        ]

        $interactionDefer[true]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIf[$get[mp]>=$get[p];Упс... Что-то пошло не так...\n-# Страница не найдена! Ипользуйте </play\:$getApplicationCommandID[play;global]> что-бы добавить трек.{options:{interaction}   }{extraOptions:{ephemeral}}]
        $onlyIf[$get[p]>0;Упс... Что-то пошло не так...\n-# Страница не найдена! Ипользуйте </play\:$getApplicationCommandID[play;global]> что-бы добавить трек.{options:{interaction}   }{extraOptions:{ephemeral}}]
        $let[p;$if[$slashOption[page]==;1;$slashOption[page]]]
        $let[mp;$ceil[$math[$queueLength/10]]]
        $onlyIf[$queueLength>0;Упс... Что-то пошло не так...\n-# Музыкальная очередь пуста! Ипользуйте </play\:$getApplicationCommandID[play;global]> что-бы добавить трек.{options:{interaction}   }{extraOptions:{ephemeral}}]
        $onlyIf[$hasPlayer==true;Упс... Что-то пошло не так...\n-# Музыкальный плеер отсутсвует! Ипользуйте </play\:$getApplicationCommandID[play;global]> что-бы добавить трек.{options:{interaction}   }{extraOptions:{ephemeral}}]
    `
}]