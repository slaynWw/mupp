module.exports = [{
    name: 'resume',
    aliases: ["r", "unpause"],
    code: `
        $resumeTrack

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
    name: "pauseresume",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $if[$playerStatus==paused]
            $resumeTrack
            $interactionReply[▶️;everyone;true;false]
        $else
            $pauseTrack
            $interactionReply[⏸️;everyone;true;false]
        $endIF
    `
}];