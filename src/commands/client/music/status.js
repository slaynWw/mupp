module.exports = {
    name: 'status',
    aliases: ['nodes'],
    code: `
        $title[Lavalink nodes]
        $description[Без рабочих нод, не будет работать музыка в боте.]
        
        $addField[Ajieblogs (secured);$get[1];true]
        $addField[Alya (non-secured);$get[2];true]
        $addField[Embotic (non-secured);$get[3];true]
        $addField[Oreshi (non-secured);$get[4];true]

        $color[$getMVar[embedColor]]
        $reply[$messageID;false]

        $let[1;$replaceText[$replaceText[$nodeInfo[Ajieblogs;status];online;🟢 online];offline;🔴 offline]]
        $let[2;$replaceText[$replaceText[$nodeInfo[Alya;status];online;🟢 online];offline;🔴 offline]]
        $let[3;$replaceText[$replaceText[$nodeInfo[Embotic;status];online;🟢 online];offline;🔴 offline]]
        $let[4;$replaceText[$replaceText[$nodeInfo[Oreshi;status];online;🟢 online];offline;🔴 offline]]
    `
};