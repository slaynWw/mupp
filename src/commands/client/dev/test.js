module.exports = {
    name: "test", 
    aliases: ["t"],
    $if: "old",
    code: `
        $getObjectProperty[weather;[52].time] $getObjectProperty[weather;[52].data.instant.details.air_temperature]
        $getObjectProperty[weather;[33].time] $getObjectProperty[weather;[33].data.instant.details.air_temperature]
        $getObjectProperty[weather;[9].time] $getObjectProperty[weather;[9].data.instant.details.air_temperature]

        $createObject[weather;$jsonRequest[https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=$get[lat]&lon=$get[lng];properties.timeseries;;{"User-Agent": "www.github.com/slaynww/mupp"}]]

        $log[lat\: $get[lat] lng\: $get[lng]]
        $let[lat;$getObjectProperty[pos;lat]]
        $let[lng;$getObjectProperty[pos;lng]]
        $createObject[pos;$jsonRequest[$get[coordinates];results[0].geometry]]
        $onlyIf[$jsonRequest[$get[coordinates];results]!=\[\];Упс... Что-то пошло не так...\n-# Вы неправильно ввели название города или такого города не существует..]

        $let[coordinates;https://api.opencagedata.com/geocode/v1/json?q=$message[1]&key=656ff89ee8a14293913ceb7f8b9ee56a]
        
        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}

/*
    //weather
        $getObjectProperty[weather;[52].time] $getObjectProperty[weather;[52].data.instant.details.air_temperature]
        $getObjectProperty[weather;[33].time] $getObjectProperty[weather;[33].data.instant.details.air_temperature]
        $getObjectProperty[weather;[9].time] $getObjectProperty[weather;[9].data.instant.details.air_temperature]

        $createObject[weather;$jsonRequest[https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=$get[lat]&lon=$get[lng];properties.timeseries;;{"User-Agent": "www.github.com/slaynww/mupp"}]]

        $log[lat\: $get[lat] lng\: $get[lng]]
        $let[lat;$getObjectProperty[pos;lat]]
        $let[lng;$getObjectProperty[pos;lng]]
        $createObject[pos;$jsonRequest[$get[coordinates];results[0].geometry]]
        $onlyIf[$jsonRequest[$get[coordinates];results]!=\[\];Упс... Что-то пошло не так...\n-# Вы неправильно ввели название города или такого города не существует..]

        $let[coordinates;https://api.opencagedata.com/geocode/v1/json?q=$message[1]&key=656ff89ee8a14293913ceb7f8b9ee56a]
*/