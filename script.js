$(document).ready(function() {
  var trackData = [];

  $.getJSON("tracksSpotifyNew.json", function(data){
      trackData = data;
  });


var danceValue;
var danceEnergy;
var valenceValue;
var tempoValue;

var sliderDance = document.getElementById("myRangeDance");
var sliderEnergy = document.getElementById("myRangeEnergy");
var sliderValence = document.getElementById("myRangeValence");
// var sliderTempo = document.getElementById("myRangeTempo");
var output = document.getElementById("demo");

sliderDance.oninput = function() {
  if(this.value > 20){
    $('.danceAnswer').text('Mehh.');
    if(this.value > 40){
      $('.danceAnswer').text('Kinda.');
      if(this.value > 60){
        $('.danceAnswer').text('Yes.');
        if(this.value > 80){
          $('.danceAnswer').text('Very much!');
        }
      }
    }
  }
  else{
    $('.danceAnswer').text('No.');
  }
  refreshData();
};

sliderEnergy.oninput = function() {
  if(this.value > 20){
    $('.energyAnswer').text('Mehh.');
    if(this.value > 40){
      $('.energyAnswer').text('Kinda.');
      if(this.value > 60){
        $('.energyAnswer').text('Yes.');
        if(this.value > 80){
          $('.energyAnswer').text('Very much!');
        }
      }
    }
  }
  else{
    $('.energyAnswer').text('No.');
  }
  refreshData();
};

sliderValence.oninput = function() {
  if(this.value > 20){
    $('.valenceAnswer').text('Mehh.');
    if(this.value > 40){
      $('.valenceAnswer').text('Kinda.');
      if(this.value > 60){
        $('.valenceAnswer').text('Feeling it.');
        if(this.value > 80){
          $('.valenceAnswer').text('Very much!');
        }
      }
    }
  }
  else{
    $('.valenceAnswer').text('Not at all.');
  }
  refreshData();
};

danceEnergy = 51;
danceEnergy = danceEnergy - 1;
refreshData();

function refreshData(){
  danceEnergy = sliderEnergy.value / 100;
  danceValue = sliderDance.value / 100;
  valenceValue = sliderValence.value / 100;
  // tempoValue = (sliderTempo.value * 1.26) + 74;
  console.log(tempoValue);
  showTracks();
};

function showTracks(){
  search = JSON.search(trackData, '//*[danceability > '+ (danceValue - .5) +'][danceability < '+ (danceValue + .5) +'][energy > '+ (danceEnergy - .5) +'][energy < '+ (danceEnergy + .5) +
  '][valence > '+ (valenceValue - .5) +'][valence < '+ (valenceValue + .5) +']');
  // console.log(search);

  $(".outputData").empty();

  search.sort(function(a, b){
    return (Math.abs(danceValue - a.danceability) + Math.abs(danceEnergy - a.energy) + Math.abs(valenceValue - a.valence)) - (Math.abs(danceValue - b.danceability) + Math.abs(danceEnergy - b.energy) +
     Math.abs(valenceValue - b.valence));
  });

  for (var i=0; i<search.length; i++) {
    // console.log(search[i].name);
    var firstAbs = Math.abs(danceValue - search[i].danceability) + Math.abs(danceEnergy - search[i].energy) + Math.abs(valenceValue - search[i].valence);
    var secondAbs = Math.abs(firstAbs);
    console.log(secondAbs);
    var percentageCorrect = 100 - Math.round(secondAbs * 100);
    // console.log(search[i].energy - danceEnergy);
      if(percentageCorrect > 0){
        $( ".outputData" ).append('<div class="perTrackWrapper"><div class="trackItem"><iframe src="https://open.spotify.com/embed/track/' + search[i].id + '" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div><div class="trackItem"><p>'+percentageCorrect+'%</p></div></div>');
      }

      if(i > 5){
        i = i + 10000;
      }
  }
};

});
