module.exports = [{
    name: 'play',
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $if[$hasPlayer==false&&$playerStatus==destroyed||$hasPlayer==false&&$playerStatus==stopped]
            $interactionFollowUp[$get[track] добавлен в очередь!;true;false]
            $let[track;[$songInfo[title]]($songInfo[url])]

            $if[$isValidLink[$slashOption[song]]==true]
                $playTrack[$nonEscape[$slashOption[song]]]
            $else
                $playTrack[$nonEscape[$slashOption[song]];ytsearch]
            $endIf

            $writeFile[./src/data/channel.txt;$channelID]
            $setDeafen[true]
            $connect
        $else
            $interactionFollowUp[$get[track] добавлен в очередь!;true;false]
            $let[track;[$songInfo[title;$sum[$get[QUEUE];1]]]($songInfo[url;$sum[$get[QUEUE];1]])]

            $if[$isValidLink[$slashOption[song]]==true]
                $playTrack[$nonEscape[$slashOption[song]]]
            $else
                $playTrack[$nonEscape[$slashOption[song]];ytsearch]
            $endIf

            $let[QUEUE;$textTrim[$replaceText[$replaceText[$checkCondition[$isCurrentExists==false];false;$queueLength];true;-1]]]
        $endIF

        $onlyIf[$checkContains[$trackLoadType[$slashOption[song]];track;search;playlist]==true;Упс... Что-то пошло не так...\n-# Результатов не найдено!{options:{interaction}}{extraOptions:{ephemeral}}]
        $interactionDefer[true]
        $onlyIf[$get[SAMEVOICE]==true;Упс... Что-то пошло не так...\n-# Бот находится в другом голосовом канале.{options:{interaction}}{extraOptions:{ephemeral}}]
        $let[SAMEVOICE;$replaceText[$replaceText[$hasPlayer;true;$checkCondition[$voiceId[$authorId]==$voiceId[$clientId]]];false;true]]
        $onlyIf[$voiceId[$authorId]!=;Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}, {
    name: 'play',
    type: 'awaited',
    channel: '$channelId',
    code: `
        $interactionFollowUp[$get[title] добавлен в очередь!;true;false]
        $interactionDefer[true]
    `
}];

/*
`
        $if[$hasPlayer==false&&$playerStatus==destroyed||$hasPlayer==false&&$playerStatus==stopped]
            $interactionReply[Трек добавлен в очередь!]

            $if[$isValidLink[$slashOption[song]]==true]
                $playTrack[$nonEscape[$slashOption[song]]]
            $else
                $playTrack[$nonEscape[$slashOption[song]];ytsearch]
            $endIf

            $writeFile[./src/data/channel.txt;$channelID]
            $connect[$voiceID;true]
        $else
            $interactionFollowUp[Трек добавлен в очередь.;true;false]
            $interactionDefer[true]

            $if[$isValidLink[$slashOption[song]]==true]
                $playTrack[$nonEscape[$slashOption[song]]]
            $else
                $playTrack[$nonEscape[$slashOption[song]];ytsearch]
            $endIf

            $let[QUEUE;$textTrim[$replaceText[$replaceText[$checkCondition[$isCurrentExists==false];false;$queueLength];true;-1]]]
        $endIF

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
        $onlyIf[$checkContains[$trackLoadType[$slashOption[song]];track;search;playlist]==true;Упс... Что-то пошло не так...\n-# Результатов не найдено!{options:{interaction}}{extraOptions:{ephemeral}}]
        $onlyIf[$get[SAMEVOICE]==true;Упс... Что-то пошло не так...\n-# Бот находится в другом голосовом канале.{options:{interaction}}{extraOptions:{ephemeral}}]
        $let[SAMEVOICE;$replaceText[$replaceText[$hasPlayer;true;$checkCondition[$voiceId[$authorId]==$voiceId[$clientId]]];false;true]]
        $onlyIf[$voiceId[$authorId]!=;Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.{options:{interaction}}{extraOptions:{ephemeral}}]
    `

*/