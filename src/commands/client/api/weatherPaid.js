module.exports = [{
    name: "weather",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[
            {newEmbed:
                {author:$getObjectProperty[weather;location.name]}
                {title:Погода сегодня}
                {thumbnail:https\:$getObjectProperty[weather;forecast.forecastday[0].day.condition.icon]}
                {field:Температура:▴$getObjectProperty[weather;forecast.forecastday[0].day.maxtemp_c]°C ▾$getObjectProperty[weather;forecast.forecastday[0].day.mintemp_c]°C:true}
                {field:Ветер:Макс. $getObjectProperty[weather;forecast.forecastday[0].day.maxwind_mph]m/h:true}
                {field:Восход - заход:$getObjectProperty[weather;forecast.forecastday[0].astro.sunrise] - $getObjectProperty[weather;forecast.forecastday[0].astro.sunset]:true}
                {field:$getObjectProperty[weather;forecast.forecastday[0].hour[3].time]:$getObjectProperty[weather;forecast.forecastday[0].hour[3].condition.text]\n\:thermometer\: $getObjectProperty[weather;forecast.forecastday[0].hour[3].temp_c]°C ($getObjectProperty[weather;forecast.forecastday[0].hour[3].feelslike_c]°C)\n\:dash\: $getObjectProperty[weather;forecast.forecastday[0].hour[3].wind_mph]m/h ($getObjectProperty[weather;forecast.forecastday[0].hour[3].wind_dir])\n\:droplet\: $getObjectProperty[weather;forecast.forecastday[0].hour[3].precip_mm]mm:true}
                {field:$getObjectProperty[weather;forecast.forecastday[0].hour[15].time]:$getObjectProperty[weather;forecast.forecastday[0].hour[15].condition.text]\n\:thermometer\: $getObjectProperty[weather;forecast.forecastday[0].hour[15].temp_c]°C ($getObjectProperty[weather;forecast.forecastday[0].hour[15].feelslike_c]°C)\n\:dash\: $getObjectProperty[weather;forecast.forecastday[0].hour[15].wind_mph]m/h  ($getObjectProperty[weather;forecast.forecastday[0].hour[15].wind_dir])\n\:droplet\: $getObjectProperty[weather;forecast.forecastday[0].hour[15].precip_mm]mm:true}
                {field:$getObjectProperty[weather;forecast.forecastday[0].hour[22].time]:$getObjectProperty[weather;forecast.forecastday[0].hour[22].condition.text]\n\:thermometer\: $getObjectProperty[weather;forecast.forecastday[0].hour[22].temp_c]°C ($getObjectProperty[weather;forecast.forecastday[0].hour[22].feelslike_c]°C)\n\:dash\: $getObjectProperty[weather;forecast.forecastday[0].hour[22].wind_mph]m/h  ($getObjectProperty[weather;forecast.forecastday[0].hour[22].wind_dir])\n\:droplet\: $getObjectProperty[weather;forecast.forecastday[0].hour[22].precip_mm]mm:true}
                {footer:$getObjectProperty[weather;forecast.date]}
                {color:$getVar[embedColor]}
            }
            ;false;false
        ]
        $interactionDefer[false]

        $onlyIf[$getObjectProperty[weather;error.code]!=1006;
            {newEmbed:
                {title:Ошибка!}
                {description:Город не найден!}
                {color:$getVar[embedError]}
            }
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]

        $createObject[weather;$readFile[./src/data/weather.json]]
        $let[file;$writeFile[./src/data/weather.json;$get[request]]]
        $let[request;$httpRequest[http://api.weatherapi.com/v1/forecast.json?key=63956af4de9f42f6974220107251101&q=$slashOption[city]&lang=ru;GET;;;]]
    `
}]

/*
                {newEmbed:
                {author:$if[$getObjectProperty[currentWeather;location.country]==;;$getObjectProperty[currentWeather;location.country]]$if[$getObjectProperty[currentWeather;location.region]==;;, $getObjectProperty[currentWeather;location.region]]$if[$getObjectProperty[currentWeather;location.name]==;;, $getObjectProperty[currentWeather;location.name]]}
                {title:$getObjectProperty[currentWeather;current.condition.text]}
                {field:Температура:$getObjectProperty[currentWeather;current.temp_c]℃ ($getObjectProperty[currentWeather;current.feelslike_c]℃):true}
                {field:Ветер:$round[$math[$replaceText[$getObjectProperty[currentWeather;current.wind_mph];.;]*0.02777778]]m/s ($getObjectProperty[currentWeather;current.wind_dir]):true}
                {thumbnail:https:$getObjectProperty[currentWeather;current.condition.icon]}
                {image:https://cdn.discordapp.com/attachments/1263969081967775764/1324336436467466302/dbaa74710a2b3110.png?ex=67844e2b&is=6782fcab&hm=665e96d218c902c73c94894427b88484673a50a1fc3e55301ea2cb8dbc5608aa&}
                {footer:$getObjectProperty[currentWeather;location.localtime]}
            }


        $interactionFollowUp[
            {newEmbed:
                {author:$getObjectProperty[weather;[0].location.name]}
                {description:**Погода сейчас**\:\n}
                {field:Сегодня::true}
                {field:Завтра::true}
                {field:После завтра::true}
                {footer:$getObjectProperty[weather;[0].current.shortday] $getObjectProperty[weather;[0].current.observationtime]}
            }
            ;false;false
        ]
        $interactionDefer[false]

        $createObject[weather;$readFile[./src/data/weather.json]]
        $let[file;$writeFile[./src/data/weather.json;$get[request]]]

        $onlyIf[$get[request]!=;
            {newEmbed:
                {title:Ошибка!}
                {description:Город не найден!}
            }
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]

        $let[request;$httpRequest[https://api.popcat.xyz/weather?q=$slashOption[city];GET;;;]]
*/