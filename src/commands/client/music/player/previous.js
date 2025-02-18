module.exports = [{
    name: 'previous',
    aliases: ["back"],
    code: `
        $previousTrack

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
}, {
    name: "previous",
    type: "interaction",
    prototype: "button",
    code: `
        $previousTrack
        $interactionReply[⏭️;everyone;true;false]
    `
}];