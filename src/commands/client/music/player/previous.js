module.exports = {
    name: "previous",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $if[$playerStatus==stopped]
            $resumeTrack
        $endIf
        $previousTrack
        $onlyIf[$loopStatus==off;Упс... Что-то пошло не так...\n-# Отключите повтор трека/очереди что-бы вернуться на прошлый трек.{options:{interaction}}{extraOptions:{ephemeral}}]
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}