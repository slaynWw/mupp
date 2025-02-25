module.exports = [{
    name: "roll",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[<@$interactionData[author.id]> получает случайное число (1-$get[answer])\: \`$random[1;$get[answer]]\`;false;false]
        $interactionDefer[false]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $let[answer;$if[$get[maxCheck]<=1;2;$get[maxCheck]]]
        $let[maxCheck;$if[$get[minCheck]>=2147483647;21474836467;$get[minCheck]]]
        $let[minCheck;$if[$get[emptyCheck]<=-1;$replaceText[$get[emptyCheck];-;];$get[emptyCheck]]]
        $let[emptyCheck;$if[$slashOption[roll]==;100;$slashOption[roll]]]
    `
}]