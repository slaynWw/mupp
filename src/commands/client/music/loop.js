module.exports = [{
    name: 'loop',
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $if[$slashOption[mode]==]
            $interactionReply[Повтор выключен.;everyone;true;false]
            $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]
            $setChannelMVar[loop;false;$channelID]
            $loopMode[none]
        $elseif[$slashOption[mode]==none]
            $interactionReply[Повтор выключен.;everyone;true;false]
            $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]
            $setChannelMVar[loop;false;$channelID]
            $loopMode[none]
        $endelseIf
        $elseif[$slashOption[mode]==song]
            $interactionReply[Повтор одного трека включен.;everyone;true;false]
            $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:true:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]
            $setChannelMVar[loop;true;$channelID]
            $loopMode[song]
        $endelseIf
        $elseif[$slashOption[mode]==queue]
            $interactionReply[Повтор всей очереди выключен.;everyone;true;false]
            $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:true:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]
            $setChannelMVar[loop;true;$channelID]
            $loopMode[queue]
        $endelseIf
        $endIf

        $let[msgID;$getChannelMVar[playerID;$channelID]]
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}]