module.exports = {
    name: "tinder",
    channel: "$channelId",
    type: "join",
    code: `
        $giveRole[$guildID;$authorId;965642635031228476;joined on server]
        $log[\[+\] \[$guildName\] $username joined on server!]
        $appendFile[./src/data/join.log;\[+\] \[$guildName\] $username joined on server!\n;utf8]
    `
};