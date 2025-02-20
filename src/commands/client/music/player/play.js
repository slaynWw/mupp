module.exports = {
    name: 'play',
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $if[$hasPlayer==false&&$playerStatus==destroyed||$hasPlayer==false&&$playerStatus==stopped]

            $interactionFollowUp[
                {newEmbed:
                    {description:[$songInfo[title]]($songInfo[url]) - $songInfo[duration]\n-# Успешно добавлено в очередь!}
                    {color:$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e]}
                }
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
                {newEmbed:
                    {description:[$songInfo[title;$sum[$get[QUEUE];1]]]($songInfo[url;$sum[$get[QUEUE];1]]) - $songInfo[duration;$sum[$get[QUEUE];1]]\n-# Успешно добавлено в очередь!}
                    {color:$replaceText[$replaceText[$replaceText[$songInfo[platform;$sum[$get[QUEUE];1]];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e]}
                }
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

        $onlyIf[$voiceID!=;
            Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
};