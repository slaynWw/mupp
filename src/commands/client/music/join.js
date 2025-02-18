module.exports = {
    name: 'join',
    aliases: ['c', 'connect', 'j'],
    code: `
        Бот подключился к каналу <#$voiceID>!\n-# Чтобы добавить трек используйте .play <song>
        $reply[$messageID;false]
        $connect

        $onlyIf[$voiceID!=;
            Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.
            {options:
                {reply:$messageID}
            }
        ]
    `
};