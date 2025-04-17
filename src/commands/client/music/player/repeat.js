module.exports = [{
    name: 'off',
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $interactionReply[Повтор одного трека включен.;everyone;true;false]
        $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:true:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]

        $loopMode[song]
        $setChannelMVar[loop;true;$channelID]

        $let[msgID;$getChannelMVar[playerID;$channelID]]
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
},{
    name: 'song',
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $interactionReply[Повтор целой очереди включен.;everyone;true;false]
        $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:true:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]

        $loopMode[queue]
        $setChannelMVar[loop;true;$channelID]

        $let[msgID;$getChannelMVar[playerID;$channelID]]
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
},{
    name: 'queue',
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $interactionReply[Повтор выключен.;everyone;true;false]
        $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]

        $loopMode[off]
        $setChannelMVar[loop;false;$channelID]

        $let[msgID;$getChannelMVar[playerID;$channelID]]
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}]