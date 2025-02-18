module.exports = [{
    name: "$alwaysExecute",
    code: `
        $appendFile[./src/handler/logs/messageCount.log;[+] [$guildName[$guildId]] $username[$authorID] got +1 msg (total messages $getUserMVar[messageCount])\n;utf8]
        $setUserMVar[messageCount;$sum[$getUserMVar[messageCount;$authorID];1]]
        $onlyIf[$message!=;]
    `
}]