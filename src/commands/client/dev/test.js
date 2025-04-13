module.exports = {
    name: "test", 
    aliases: ["t"],
    $if: "old",
    code: `
        $createObject[dayThree$jsonRequest[https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=$get[lat]&lon=$get[lng];properties.timeseries[54];;{"User-Agent": "https\://www.github.com/slaynww/mupp"}]]
        $createObject[dayTwo;$jsonRequest[https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=$get[lat]&lon=$get[lng];properties.timeseries[35];;{"User-Agent": "https\://www.github.com/slaynww/mupp"}]]
        $createObject[dayOne;$jsonRequest[https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=$get[lat]&lon=$get[lng];properties.timeseries[11];;{"User-Agent": "https\://www.github.com/slaynww/mupp"}]]

        $log[lat\: $get[lat] lng\: $get[lng]]
        $let[lat;$getObjectProperty[pos;lat]]
        $let[lng;$getObjectProperty[pos;lng]]
        $createObject[pos;$jsonRequest[$get[coordinates];results[0].geometry]]
        $onlyIf[$jsonRequest[$get[coordinates];results]!=\[\];Упс... Что-то пошло не так...\n-# Вы неправильно ввели название города или такого города не существует..]

        $let[coordinates;https://api.opencagedata.com/geocode/v1/json?q=$message[1]&key=]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}