module.exports = [{
    name: "$alwaysExecute",
    code: `
        $appendFile[./src/handler/logs/messageCount.log;[+] [$guildName[$guildId]] $username[$authorID] got +1 msg (total messages $getUserVar[messageCount])\n;utf8]
        $setUserVar[messageCount;$sum[$getUserVar[messageCount;$authorID];1]]
        $onlyIf[$message!=;]
    `
}]