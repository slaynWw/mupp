module.exports = {
    name: 'stop',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[$getEmoji[music.leave] <@$clientID> покинул <#$voiceID>;everyone;true;false]

        $disconnect
        $deleteNowPlaying
        $stopTrack
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
};