module.exports = {
    name: 'play',
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $if[$hasPlayer==false&&$playerStatus==destroyed||$hasPlayer==false&&$playerStatus==stopped]

            $interactionFollowUp[
                Трек [$songInfo[title]]($songInfo[url]) добавлен в очередь.
                ;true;false
            ]
            $interactionDefer[true]

            $if[$isValidLink[$slashOption[song]]==true]
                $playTrack[$nonEscape[$slashOption[song]]]
            $else
                $playTrack[$nonEscape[$slashOption[song]];youtube]
            $endIf

            $writeFile[./src/data/channel.txt;$channelID]

            $joinvc

        $else

            $interactionFollowUp[
                Трек [$songInfo[title;$sum[$get[QUEUE];1]]]($songInfo[url;$sum[$get[QUEUE];1]]) добавлен в очередь.
                ;true;false
            ]
            $interactionDefer[true]

            $if[$isValidLink[$slashOption[song]]==true]
                $playTrack[$nonEscape[$slashOption[song]]]
            $else
                $playTrack[$nonEscape[$slashOption[song]];youtube]
            $endIf

            $let[QUEUE;$textTrim[$replaceText[$replaceText[$checkCondition[$isCurrentExists==false];false;$queueLength];true;-1]]]
            
        $endIF

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIf[$get[SAMEVOICE]==true;Упс... Что-то пошло не так...\n-# Бот находится в другом голосовом канале.{options:{interaction}}{extraOptions:{ephemeral}}]
        $let[SAMEVOICE;$replaceText[$replaceText[$hasPlayer;true;$checkCondition[$voiceId[$authorId]==$voiceId[$clientId]]];false;true]]
        $onlyIf[$voiceId[$authorId]!=;Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
};