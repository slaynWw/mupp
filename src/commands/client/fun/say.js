module.exports = [{
    name: "say",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $if[$hasPlayer==false&&$playerStatus==destroyed||$hasPlayer==false&&$playerStatus==stopped]
            $interactionFollowUp[
                Текст успешно озвучен!
                ;true;false
            ]
            $interactionDefer[true]

            $playTrack[$slashOption[text];speak]

            $joinvc
        $else
            $interactionFollowUp[
                Текст успешно озвучен!
                ;true;false
            ]
            $interactionDefer[true]
            
            $playTrack[$slashOption[text];speak]
        $endIF

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIf[$get[SAMEVOICE]==true;Упс... Что-то пошло не так...\n-# Бот находится в другом голосовом канале.{options:{interaction}}{extraOptions:{ephemeral}}]
        $let[SAMEVOICE;$replaceText[$replaceText[$hasPlayer;true;$checkCondition[$voiceId[$authorId]==$voiceId[$clientId]]];false;true]]
        $onlyIf[$voiceId[$authorId]!=;Упс... Что-то пошло не так...\n-# Подключитесь к голосовому каналу.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
}]