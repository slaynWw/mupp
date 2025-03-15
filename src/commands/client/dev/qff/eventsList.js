module.exports = [{
    name: "eventsList",
    type: "interaction",
    prototype: "selectMenu",
    $if: "old",
    code: `
        $if[$checkContains[$userRoles[$authorID;$guildID;id;];1349384284368142347]==true] 
            $removeRole[$guildId;$interactionData[author.id];1349384284368142347;]
            $interactionReply[У вас удалена роль <@&1349384284368142347>!;everyone;true;false]
        $else
            $giveRole[$guildID;$interactionData[author.id];1349384284368142347;]
            $interactionReply[Вам выдана роль <@&1349384284368142347>!;everyone;true;false]
        $endIF

        $onlyIf[$interactionData[values[0]]==twitch;]
    `
}, {
    name: "eventsList",
    type: "interaction",
    prototype: "selectMenu",
    $if: "old",
    code: `
        $if[$checkContains[$userRoles[$authorID;$guildID;id;];1349386744365060096]==true] 
            $removeRole[$guildId;$interactionData[author.id];1349386744365060096]
            $interactionReply[У вас удалена роль <@&1349386744365060096>!;everyone;true;false]
        $else
            $giveRole[$guildID;$interactionData[author.id];1349386744365060096]
            $interactionReply[Вам выдана роль <@&1349386744365060096>!;everyone;true;false]
        $endIF

        $onlyIf[$interactionData[values[0]]==events;]
    `
}]

/*
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userRoles[$authorID;$guildID;id;];1091598546089803876];1091598733617147945];1081643031880544468];1081643039287677069];1081643037555437608];1091598550007296000];1091598735462645810];1081636307865960558];1335818826142449705];1328120131347415130];983405912955961495];1091598069734326352];965642635031228476];1091598730123280404];1091598547390058587];1091598072448036952];1091598548602204231];966126859676966932];1091598732388208731];1024379159880937552];1081638237489070130];1091598731238985788];1091598071051333663];1091598073811185664];965634608555237407]
*/