module.exports = [{
    name: 'queue',
    aliases: ['q'],
    code: `
        $author[Очередь $guildName[$guildID]]
        $thumbnail[$guildIcon]
        $description[Очередь из $queueLength трека/треков ($queueDuration)\n$queue[$if[$message[1]==;1;$message[1]];20;{position}. [{title}]({url})]]
        $color[$getMVar[embedColor]]

        $reply[$messageID;false]

        $onlyIf[$queueLength!=0;
            Упс... Что-то пошло не так...\n-# Музыкальная очередь пуста! Ипользуйте .play <song> что-бы добавить трек.
            {options:
                {reply:$messageID}
            }
        ]

        $onlyIf[$hasPlayer==true;
            Упс... Что-то пошло не так...\n-# Бот не подключен к голосовому каналу!
            {options:
                {reply:$messageID}
            }
        ]
    `
}];