module.exports = {
    name: 'resume',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[Очередь возобновлена.;everyone;true;false]
        $editMessage[$get[msgID];{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.png:./src/data/images/player.png}]

        $resumeTrack

        $let[msgID;$getChannelMVar[playerID;$playerChannelID]]
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    
    `
};