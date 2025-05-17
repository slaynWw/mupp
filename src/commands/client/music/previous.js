module.exports = {
    name: "previous",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.png:./src/data/images/player.png}]
        $interactionReply[Прошлый трек включен.;everyone;true;false]
        $if[$playerStatus==stopped]
            $resumeTrack
        $endIf
        $previousTrack
        $onlyIf[$loopStatus==off;Упс... Что-то пошло не так...\n-# Отключите повтор трека/очереди что-бы вернуться на прошлый трек.{options:{interaction}}{extraOptions:{ephemeral}}]
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    
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
}