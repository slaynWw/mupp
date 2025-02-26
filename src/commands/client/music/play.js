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

            $if[$checkContains[$slashOption[song];https://open.spotify.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];spotify]
            $endIF

            $if[$checkContains[$slashOption[song];https://www.youtube.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];youtube]
            $endIF

            $if[$checkContains[$slashOption[song];https://music.youtube.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];youtube]
            $endIF

            $if[$checkContains[$slashOption[song];https://soundcloud.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];soundcloud]
            $endIF

            $if[$checkContains[$slashOption[song];https://on.soundcloud.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];soundcloud]
            $endIF

            $if[$isValidLink[$slashOption[song]]==false]
                $playTrack[$slashOption[song];youtube]
            $endIF

            $writeFile[./src/data/channel.txt;$channelID]

            $joinvc

        $else

            $interactionFollowUp[
                Трек [$songInfo[title;$sum[$get[QUEUE];1]]]($songInfo[url;$sum[$get[QUEUE];1]]) добавлен в очередь.
                ;true;false
            ]

            $interactionDefer[true]

            $if[$checkContains[$slashOption[song];https://open.spotify.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];spotify]
            $endIF

            $if[$checkContains[$slashOption[song];https://www.youtube.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];youtube]
            $endIF

            $if[$checkContains[$slashOption[song];https://music.youtube.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];youtube]
            $endIF

            $if[$checkContains[$slashOption[song];https://soundcloud.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];soundcloud]
            $endIF

            $if[$checkContains[$slashOption[song];https://on.soundcloud.com/]==true]
                $playTrack[$nonEscape[$slashOption[song]];soundcloud]
            $endIF

            $if[$isValidLink[$slashOption[song]]==false]
                $playTrack[$slashOption[song];youtube]
            $endIF

            $let[QUEUE;$textTrim[$replaceText[$replaceText[$checkCondition[$isCurrentExists==false];false;$queueLength];true;-1]]]
            
        $endIF

        $onlyIf[$get[SAMEVOICE]==true;Упс... Что-то пошло не так...\n-# Бот находится в другом голосовом канале.{options:{interaction}}{extraOptions:{ephemeral}}]
        $let[SAMEVOICE;$replaceText[$replaceText[$hasPlayer;true;$checkCondition[$voiceId[$authorId]==$voiceId[$clientId]]];false;true]]
        $onlyIf[$voiceId[$authorId]!=;Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
};