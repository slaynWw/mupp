module.exports = [{
    name: "playing",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $interactionReply[Очередь приостоновлена.;everyone;true;false]
        $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]

        $pauseTrack

        $let[msgID;$getChannelMVar[playerID;$channelID]]

        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    ` 
},{
    name: "paused",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $interactionReply[Очередь возобновлена.;everyone;true;false]
        $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg}]

        $resumeTrack

        $let[msgID;$getChannelMVar[playerID;$channelID]]

        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}]