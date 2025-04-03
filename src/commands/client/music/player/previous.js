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
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}