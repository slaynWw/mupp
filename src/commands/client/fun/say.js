module.exports = [{
    name: "say",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $if[$hasPlayer==false&&$playerStatus==destroyed||$hasPlayer==false&&$playerStatus==stopped]
            $interactionFollowUp[Текст успешно озвучен!;true;false]
            $interactionDefer[true]

            $playTrack[$slashOption[text];speak]

            $joinvc
        $else
            $interactionFollowUp[Текст успешно озвучен!;true;false]
            $interactionDefer[true]
            
            $playTrack[$slashOption[text];speak]
        $endIF

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $checkVoice
    `
}]