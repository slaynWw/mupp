module.exports = [{
    name: 'stop',
    aliases: ['s', 'pause'],
    code: `
        $pauseTrack

        $onlyIf[$queueLength!=0;
            Упс... Что-то пошло не так...\n-# Музыкальная очередь пуста! Ипользуйте .play <song> что-бы добавить трек.
            {options:
                {reply:$messageID}
            }
        ]

        $onlyIf[$voiceID!=;
            Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.
            {options:
                {reply:$messageID}
            }
        ]
    `
}];