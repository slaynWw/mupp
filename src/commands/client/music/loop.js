module.exports = [{
    name: 'loop',
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]

        $if[$slashOption[mode]==]
            $interactionReply[Повтор выключен.;everyone;true;false]
            $loopMode[none]
        $elseif[$slashOption[mode]==none]
            $interactionReply[Повтор выключен.;everyone;true;false]
            $loopMode[none]
        $endelseIf
        $elseif[$slashOption[mode]==song]
            $interactionReply[Повтор одного трека включен.;everyone;true;false]
            $loopMode[song]
        $endelseIf
        $elseif[$slashOption[mode]==queue]
            $interactionReply[Повтор всей очереди выключен.;everyone;true;false]
            $loopMode[queue]
        $endelseIf
        $endIf

        $let[msgID;$getChannelMVar[playerID;$playerChannelID]]
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}]