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
                $playTrack[$slashOption[song]]
            $else
                $playTrack[$nonEscape[$slashOption[song]];ytsearch]
            $endIf

            $setDeafen[true]
            $connect
        $else
            $interactionFollowUp[$get[track] добавлен в очередь!;true;false]
            $let[track;[$songInfo[title;$sum[$get[QUEUE];1]]]($songInfo[url;$sum[$get[QUEUE];1]])]

                $if[$isValidLink[$slashOption[song]]==true]
                    $playTrack[$slashOption[song]]
                $else
                    $playTrack[$nonEscape[$slashOption[song]];ytsearch]
                $endIf

            $let[QUEUE;$textTrim[$replaceText[$replaceText[$checkCondition[$isCurrentExists==false];false;$queueLength];true;-1]]]
        $endIF

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $interactionDefer[true]
        $onlyIf[$checkContains[$trackLoadType[$slashOption[song]];track;search;playlist]==true;Упс... Что-то пошло не так...\n-# Результатов не найдено!{options:{interaction}}{extraOptions:{ephemeral}}]

        $checkVoice

        $onlyIf[$getMVar[categoryMusic]==false;
            Упс... Что-то пошло не так...\n-# Данная команда выключена.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
}];

/*



            $interactionFollowUp[$get[track] добавлен в очередь!;true;false]
            $let[track;[$songInfo[title]]($songInfo[url])]

                $if[$isValidLink[$slashOption[song]]==true]
                    $playTrack[$slashOption[song]]
                $else
                    $playTrack[$nonEscape[$slashOption[song]];ytsearch]
                $endIf
*/