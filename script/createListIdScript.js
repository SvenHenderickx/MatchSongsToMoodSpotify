$(document).ready(function() {
  var trackData =  [
    {
      "track": {
        "id": "5IaHrVsrferBYDm0bDyABy",
        "name": "Taste (feat. Offset)"
      }
    },
    {
      "track": {
        "id": "3yPMLvxeEor7rbDLDseJFt",
        "name": "End"
      }
    },
    {
      "track": {
        "id": "6ImX9KIEXSf3xEIOXoBTG6",
        "name": "Control Me"
      }
    },
    {
      "track": {
        "id": "3ET6tneQU6pszP9VylP27r",
        "name": "Personal"
      }
    },
    {
      "track": {
        "id": "73g9EFTPiSOevEhyy5RlGN",
        "name": "All Blue"
      }
    },
    {
      "track": {
        "id": "3EkDfIazeRkOUk2W4G9Cr1",
        "name": "Rosemvry"
      }
    },
    {
      "track": {
        "id": "3YWJbv4CeZ1508JfmGNVL6",
        "name": "Nighttime"
      }
    },
    {
      "track": {
        "id": "2PQVLVJ1J57t7uQO4Y2Mzq",
        "name": "Fairplay (feat. ASAP Ferg) - Remix"
      }
    },
    {
      "track": {
        "id": "2HD4UNhxyBw1PH3wG4nUfE",
        "name": "A Year from Heaven"
      }
    },
    {
      "track": {
        "id": "0rufHvzVQmCDpjf3qWLtC3",
        "name": "Raamuit"
      }
    },
    {
      "track": {
        "id": "2w5Yx4NqmZEKlMLA9frHrp",
        "name": "Finders Keepers"
      }
    },
    {
      "track": {
        "id": "04sT6xbMnJouAktbkkr4qr",
        "name": "Not Nice"
      }
    },
    {
      "track": {
        "id": "5rLwzjzNDqrHk26jZpVvw2",
        "name": "702"
      }
    },
    {
      "track": {
        "id": "45h4z4WU0wuU20VP1fHFDv",
        "name": "Naar Huis"
      }
    },
    {
      "track": {
        "id": "622qlNmaUa2ZhzUQKiNMDp",
        "name": "Desert Rose"
      }
    },
    {
      "track": {
        "id": "6tN3KkN6UVMRklCLGSNKiU",
        "name": "Sin City (Remix)"
      }
    },
    {
      "track": {
        "id": "46LLA2kOyPYsT7H0btqb7t",
        "name": "Used To"
      }
    },
    {
      "track": {
        "id": "0n2TtADgM4zRO1byv4WhNl",
        "name": "Solo Bent"
      }
    },
    {
      "track": {
        "id": "45Egmo7icyopuzJN0oMEdk",
        "name": "Love Lies (with Normani)"
      }
    },
    {
      "track": {
        "id": "1QwgOsR7M0vVYO1mBZs9uP",
        "name": "By My Side"
      }
    },
    {
      "track": {
        "id": "5TR3sdi4QH0qwIsZ6CqJa3",
        "name": "Faded Love"
      }
    },
    {
      "track": {
        "id": "3S2LNcyJre3hvJbPTcoghO",
        "name": "Someone That You Love"
      }
    },
    {
      "track": {
        "id": "17J3atGDyI9bAhkqqzLTJg",
        "name": "Alright"
      }
    },
    {
      "track": {
        "id": "5OjbPdqvf2URzwxcAkpTtq",
        "name": "Twijfels"
      }
    },
    {
      "track": {
        "id": "0jj7PqIYZjHaWUKP5Qsc7X",
        "name": "The Earth Stood Still"
      }
    },
    {
      "track": {
        "id": "7vIlKSC5fcyNhDBaQyFTxM",
        "name": "Volgende Stap"
      }
    },
    {
      "track": {
        "id": "2SfwggePc6XkmG5vkRZ325",
        "name": "25 To Life"
      }
    },
    {
      "track": {
        "id": "4cPPWsdJq4Mgzvkex6ZaEY",
        "name": "Vibez in the West"
      }
    },
    {
      "track": {
        "id": "0GK9cdbOpiYkyBvNtnlmYk",
        "name": "Twee Stappen Terug"
      }
    },
    {
      "track": {
        "id": "6q9I9TasIqFdUqXBNlUcjm",
        "name": "Miscommunication"
      }
    },
    {
      "track": {
        "id": "6Hgh47WXVKtXN5zGOu0hjI",
        "name": "OTW"
      }
    },
    {
      "track": {
        "id": "5BgaqHw6dR0ldxsfeE2FBr",
        "name": "Zeg Me"
      }
    },
    {
      "track": {
        "id": "4FZAkpL8SyeizUroit7hh2",
        "name": "Paid"
      }
    },
    {
      "track": {
        "id": "1kla8bM5RUl0kG4tHX46Yh",
        "name": "Easy"
      }
    },
    {
      "track": {
        "id": "5eRl4WBbLfphrLrPa1xkHN",
        "name": "Ontsnappen"
      }
    },
    {
      "track": {
        "id": "5XeHC0eCYPL0N3uXMoJ2Ng",
        "name": "Fairplay"
      }
    },
    {
      "track": {
        "id": "0VktxcfOjm06TJiGHcLMZd",
        "name": "Rivals"
      }
    },
    {
      "track": {
        "id": "7fguFThHOFSY15mPVOUsek",
        "name": "Two Seater (feat. Lil Yachty)"
      }
    },
    {
      "track": {
        "id": "76RspmRbAam2chcmADTnQe",
        "name": "Friends of Friends"
      }
    },
    {
      "track": {
        "id": "5kJEUjZUh1xPRUHQc8hEnq",
        "name": "Rihanna"
      }
    },
    {
      "track": {
        "id": "3lsZfb712MkkMDSbB8XiSk",
        "name": "Chicas (feat. Buto)"
      }
    },
    {
      "track": {
        "id": "4Y7zwyG1XrwRYXsBqUtQGp",
        "name": "Feelins"
      }
    },
    {
      "track": {
        "id": "4pKfA8yMW9BeYyD2JiIBUI",
        "name": "Go (feat. H.E.R. & Rapsody)"
      }
    },
    {
      "track": {
        "id": "0bxmVPKnEopTyuMMkaTvUb",
        "name": "Issues/Hold On"
      }
    },
    {
      "track": {
        "id": "74uC8K6i7AL7mC7ohKCS7d",
        "name": "Flirt"
      }
    },
    {
      "track": {
        "id": "7HKTEtjVFQrMzXzjBpTfns",
        "name": "Ballin"
      }
    },
    {
      "track": {
        "id": "3Sq3uNnE8a0IyPUQmZF3yb",
        "name": "Perfect for U"
      }
    },
    {
      "track": {
        "id": "0SVsEdvot6vU4byv5yW0oj",
        "name": "That’s How You Feel"
      }
    },
    {
      "track": {
        "id": "1M7sUS7mejox1w8Ig3fuON",
        "name": "Openbaar"
      }
    },
    {
      "track": {
        "id": "2pg2TiYo9Rb8KeB5JjP7jS",
        "name": "Sativa"
      }
    },
    {
      "track": {
        "id": "4BrkZ7sjSffDb3v41eQFnq",
        "name": "Driver"
      }
    },
    {
      "track": {
        "id": "4yQ33aMacL6htisDiEHksR",
        "name": "Voorbij"
      }
    },
    {
      "track": {
        "id": "4zK7M3Nyr59jZKL5GRBwrT",
        "name": "In and Out"
      }
    },
    {
      "track": {
        "id": "4ye3K0UkT4SINVuNO9HcKk",
        "name": "Judas"
      }
    },
    {
      "track": {
        "id": "6cSJLwHYgr6kUJDEnuHyUX",
        "name": "Belt Mij"
      }
    },
    {
      "track": {
        "id": "23NKWYZoU5ZL46FNVVK36q",
        "name": "Party In L.a."
      }
    },
    {
      "track": {
        "id": "0X9HIiLZyMA71Fy40HxBCz",
        "name": "Zet Het Op Me"
      }
    },
    {
      "track": {
        "id": "57zEbGuOa9Skogmm0WdOzM",
        "name": "Love N Hennessy"
      }
    },
    {
      "track": {
        "id": "2pjyceds9OpyZniRZsr6tA",
        "name": "Trouble (feat. Ms Banks)"
      }
    },
    {
      "track": {
        "id": "5bAXYh7edaZT6wXYAdgsZx",
        "name": "Mijn Tijger"
      }
    },
    {
      "track": {
        "id": "1ROoMhOJ2iZ4SAT1RoplqE",
        "name": "So Bad"
      }
    },
    {
      "track": {
        "id": "5XQMr19TL7Mfksq9zihbOu",
        "name": "Questions"
      }
    },
    {
      "track": {
        "id": "6Hiw9Q3qc8ZdC3lwIim5ZY",
        "name": "No Don"
      }
    },
    {
      "track": {
        "id": "0VZJnythojun3OtzTLxaVk",
        "name": "Lifestyle"
      }
    },
    {
      "track": {
        "id": "4dpIVcDCIg3GlreOmvxsI4",
        "name": "Goed Genoeg"
      }
    },
    {
      "track": {
        "id": "7A7EjfxYeO3o1qFzpOFiQK",
        "name": "Zonder Jou"
      }
    },
    {
      "track": {
        "id": "1Xm9CQRcJbOgTCpKCpS9s5",
        "name": "Talk 2 U"
      }
    },
    {
      "track": {
        "id": "5kApwSRDqF5CKclVLw1FBM",
        "name": "Dead"
      }
    },
    {
      "track": {
        "id": "0Cc0Ljq1QOrA2nNJG4gQ5I",
        "name": "Wat Houd Jou Bezig"
      }
    },
    {
      "track": {
        "id": "5kp7wpWkdwkRUvcJCmb2HT",
        "name": "Boo'd Up"
      }
    },
    {
      "track": {
        "id": "2RPkGBuwcjJIgSYMJgOTD2",
        "name": "Forest Fire"
      }
    },
    {
      "track": {
        "id": "2tPnaDgbCqfTUbeBIi9S70",
        "name": "Red Me"
      }
    },
    {
      "track": {
        "id": "5ctSjTCsGGtm1BynKW4Cbn",
        "name": "Weet Dat"
      }
    },
    {
      "track": {
        "id": "2CLkQnPM7ZbBwKqriaImoj",
        "name": "Voor Je Deur"
      }
    },
    {
      "track": {
        "id": "1n12QsWHbc6nGsAaR6rozi",
        "name": "Jou & Mij"
      }
    },
    {
      "track": {
        "id": "45gDKS9htiptsWDW1i1vhc",
        "name": "Learn To Love"
      }
    },
    {
      "track": {
        "id": "6PktsUMUtMAu8GRTmeH9Vy",
        "name": "Do U Wrong (feat. Syd)"
      }
    },
    {
      "track": {
        "id": "6VBFVOhYHwIDZukyjmNhWk",
        "name": "Nodig Had"
      }
    },
    {
      "track": {
        "id": "0Cm3Xy7wF0HogyeVRJ1DZs",
        "name": "Cherry On Top (feat. Marc E. Bassy & TYSM)"
      }
    },
    {
      "track": {
        "id": "6gghuvsJuy4A6UPpvrmYq4",
        "name": "Heaven"
      }
    },
    {
      "track": {
        "id": "4imb1WyAH4mnE5o7kwW2R4",
        "name": "Undo"
      }
    },
    {
      "track": {
        "id": "297umidb00L3pMwfc7p5BK",
        "name": "Wake Up"
      }
    },
    {
      "track": {
        "id": "5OA7eJqztQr6G6Xzo6eu55",
        "name": "February 3rd"
      }
    },
    {
      "track": {
        "id": "3bl6n1sBma0Lp7etqjx5j6",
        "name": "Boy"
      }
    },
    {
      "track": {
        "id": "0WAPOcN0RTDGF9xtg91jzD",
        "name": "Learn the Hard Way"
      }
    },
    {
      "track": {
        "id": "6MxxXwX4IdKJCYayW5XecQ",
        "name": "Niet Meer"
      }
    },
    {
      "track": {
        "id": "1E2ePlJmijVSX0o1G9TFgR",
        "name": "Love Galore"
      }
    },
    {
      "track": {
        "id": "5LGQWD8snToVFoi5FzTkBO",
        "name": "Alright"
      }
    },
    {
      "track": {
        "id": "3qsFI6UnjKRFiNRXQMEUDK",
        "name": "Dirty Laundry"
      }
    },
    {
      "track": {
        "id": "427EZO64GIf7oNm6OZPmyG",
        "name": "Who I Am"
      }
    },
    {
      "track": {
        "id": "0Yk8GrPTHSuKV6iJANHNdu",
        "name": "Hurt To Look (feat. Rae Sremmurd)"
      }
    },
    {
      "track": {
        "id": "7q78GKxNB7jKNIZxEUwcmQ",
        "name": "Lala"
      }
    },
    {
      "track": {
        "id": "1PNm6vW74WkYLelghJ20Bn",
        "name": "Slow Wind"
      }
    },
    {
      "track": {
        "id": "0Hza76Qom7WsXrTQ8A5DIp",
        "name": "Teenage Fantasy"
      }
    },
    {
      "track": {
        "id": "70Tf2nUzVd9UfyJHwM5lic",
        "name": "Come Over"
      }
    },
    {
      "track": {
        "id": "3BxSOBwH980UtGioxs1jKY",
        "name": "Wanna See You High"
      }
    },
    {
      "track": {
        "id": "4AFgK4wP1iD5i8BYaLr9Vf",
        "name": "You Da Baddest"
      }
    },
    {
      "track": {
        "id": "3toMrseGzXuf2Aq17NZXUw",
        "name": "MY2"
      }
    },
    {
      "track": {
        "id": "4QMJNKEtrN2j0REcQ9ejuw",
        "name": "All Of Me"
      }
    },
    {
      "track": {
        "id": "1R9rbK0cmooX24yjfxq2vS",
        "name": "Sweet Sweat"
      }
    }
  ];

  console.log(trackData);
  search = JSON.search(trackData, '//*[track]');
  console.log(search);
  var stringId1 = "";
  var stringId2 = "";
  var stringId3 = "";
  var stringId4 = "";
  var stringId5 = "";
  var stringId6 = "";
  for (var i=0; i<search.length; i++) {

        if(i > 0 && i < 20){
          stringId1 = stringId1 + search[i].track.id + ",";
        }
          if(i > 20 && i < 40){
            stringId2 = stringId2 + search[i].track.id + ",";
          }
            if(i > 40 && i < 60){
              stringId3 = stringId3 + search[i].track.id + ",";
            }
            if(i > 60 && i < 80){
              stringId4 = stringId4 + search[i].track.id + ",";
            }
            if(i > 80 && i < 100){
              stringId5 = stringId5 + search[i].track.id + ",";
            }
            if(i > 100 && i < 120){
              stringId6 = stringId6 + search[i].track.id + ",";
            }
  }
  $( ".outputData" ).append("<p>"+stringId1+"</p>");
  $( ".outputData" ).append("<p>"+stringId2+"</p>");
  $( ".outputData" ).append("<p>"+stringId3+"</p>");
  $( ".outputData" ).append("<p>"+stringId4+"</p>");
  $( ".outputData" ).append("<p>"+stringId5+"</p>");
  $( ".outputData" ).append("<p>"+stringId6+"</p>");
});
