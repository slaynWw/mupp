module.exports = {
    name: 'play',
    aliases: ['p'],
    $if: "old",
    code: `
        $if[$hasPlayer==false&&$playerStatus==destroyed||$hasPlayer==false&&$playerStatus==stopped]
            $description[[$songInfo[title]]($songInfo[url]) - $songInfo[duration]\n-# Успешно добавлено в очередь!]
            $reply[$messageID;false]

            $if[$checkContains[$message[1];https://open.spotify.com/]==true]
                $playTrack[$nonEscape[$message[1]];spotify]
                $color[3eed46]
            $endIF

            $if[$checkContains[$message[1];https://www.youtube.com/]==true]
                $playTrack[$nonEscape[$message[1]];youtube]
                $color[ed3e3e]
            $endIF

            $if[$checkContains[$message[1];https://music.youtube.com/]==true]
                $playTrack[$nonEscape[$message[1]];youtube]
                $color[ed3e3e]
            $endIF

            $if[$checkContains[$message[1];https://soundcloud.com/]==true]
                $playTrack[$nonEscape[$message[1]];soundcloud]
                $color[ed843e]
            $endIF

            $if[$checkContains[$message[1];https://on.soundcloud.com/]==true]
                $playTrack[$nonEscape[$message[1]];soundcloud]
                $color[ed843e]
            $endIF

            $if[$isValidLink[$message[1]]==false]
                $playTrack[$message;youtube]
                $color[ed3e3e]
            $endIF

            $writeFile[./src/data/channel.txt;$channelID]

            $connect
        $else

            $description[[$songInfo[title;$sum[$get[QUEUE];1]]]($songInfo[url;$sum[$get[QUEUE];1]]) - $songInfo[duration;$sum[$get[QUEUE];1]]\n-# Успешно добавлено в очередь!]
            $reply[$messageID;false]

            $if[$checkContains[$message[1];https://open.spotify.com/]==true]
                $playTrack[$nonEscape[$message[1]];spotify]
                $color[3eed46]
            $endIF

            $if[$checkContains[$message[1];https://www.youtube.com/]==true]
                $playTrack[$nonEscape[$message[1]];youtube]
                $color[ed3e3e]
            $endIF

            $if[$checkContains[$message[1];https://music.youtube.com/]==true]
                $playTrack[$nonEscape[$message[1]];youtube]
                $color[ed3e3e]
            $endIF

            $if[$checkContains[$message[1];https://soundcloud.com/]==true]
                $playTrack[$nonEscape[$message[1]];soundcloud]
                $color[ed843e]
            $endIF

            $if[$checkContains[$message[1];https://on.soundcloud.com/]==true]
                $playTrack[$nonEscape[$message[1]];soundcloud]
                $color[ed843e]
            $endIF

            $if[$isValidLink[$message[1]]==false]
                $playTrack[$message;youtube]
                $color[ed3e3e]
            $endIF

            $let[QUEUE;$textTrim[$replaceText[$replaceText[$checkCondition[$isCurrentExists==false];false;$queueLength];true;-1]]]
            
        $endIF

        $onlyIf[$message[1]!=;
            Упс... Что-то пошло не так...\n-# Укажите название или ссылку.
            {options:
                {reply:$messageID}
            }
        ]

        $onlyIf[$voiceID!=;
            Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.
            {options:
                {reply:$messageID}
            }
        ]
    `
};