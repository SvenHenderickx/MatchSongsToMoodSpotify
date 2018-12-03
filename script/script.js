$(document).ready(function() {
  var trackData = [];

  $.getJSON("script/tracksSpotifyNew.json", function(data){
      trackData = data;
      enableChange();
      refreshData();
  });

  var sliderDance = document.getElementById("myRangeDance");
  var sliderEnergy = document.getElementById("myRangeEnergy");
  var sliderValence = document.getElementById("myRangeValence");
  var sliderTempo = document.getElementById("myRangeTempo");
  var sliderLoudness = document.getElementById("myRangeLoudness");
  var sliderInstrumentalness = document.getElementById("myRangeInstrumentalness");
  var sliderSpeechiness = document.getElementById("myRangeSpeechiness");



  var output = document.getElementById("demo");

  $('#checkDance').click(function() {
    sliderEnabled.danceability = this.checked;
    enableChange();
  });

  $('#checkEnergy').click(function() {
    sliderEnabled.energy = this.checked;
    enableChange();
  });

  $('#checkValence').click(function() {
    sliderEnabled.valence = this.checked;
    enableChange();
  });

  $('#checkTempo').click(function() {
    sliderEnabled.tempo = this.checked;
    enableChange();
  });

  $('#checkLoudness').click(function() {
    sliderEnabled.loudness = this.checked;
    enableChange();
  });

  $('#checkInstrumentallness').click(function() {
    sliderEnabled.instrumentalness = this.checked;
    enableChange();
  });

  $('#checkSpeechiness').click(function() {
    sliderEnabled.instrumentalness = this.checked;
    enableChange();
  });

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

  sliderTempo.oninput = function() {
    if(this.value > 20){
      $('.tempoAnswer').text('Little slower.');
      if(this.value > 40){
        $('.tempoAnswer').text('Normal.');
        if(this.value > 60){
          $('.tempoAnswer').text('Faster.');
          if(this.value > 80){
            $('.tempoAnswer').text('Gimme some bangers!');
          }
        }
      }
    }
    else{
      $('.tempoAnswer').text('Chill.');
    }
    refreshData();
  };

  sliderLoudness.oninput = function() {
    if(this.value > 20){
      $('.loudnessAnswer').text('Little slower.');
      if(this.value > 40){
        $('.loudnessAnswer').text('Normal.');
        if(this.value > 60){
          $('.loudnessAnswer').text('Faster.');
          if(this.value > 80){
            $('.loudnessAnswer').text('Gimme some bangers!');
          }
        }
      }
    }
    else{
      $('.loudnessAnswer').text('Chill.');
    }
    refreshData();
  };

  sliderInstrumentalness.oninput = function() {
    if(this.value > 20){
      $('.instrumentalnessAnswer').text('Mehh.');
      if(this.value > 40){
        $('.instrumentalnessAnswer').text('Kinda.');
        if(this.value > 60){
          $('.instrumentalnessAnswer').text('Yes.');
          if(this.value > 80){
            $('.instrumentalnessAnswer').text('Very much!');
          }
        }
      }
    }
    else{
      $('.instrumentalnessAnswer').text('No.');
    }
    refreshData();
  };

  sliderSpeechiness.oninput = function() {
    if(this.value > 20){
      $('.speechinessAnswer').text('Mehh.');
      if(this.value > 40){
        $('.speechinessAnswer').text('Kinda.');
        if(this.value > 60){
          $('.speechinessAnswer').text('Yes.');
          if(this.value > 80){
            $('.speechinessAnswer').text('Very much!');
          }
        }
      }
    }
    else{
      $('.speechinessAnswer').text('No.');
    }
    refreshData();
  };

  /**
   * stores the values of the sliders, uses the same names as the song object.
   * @type {Object}
   */
  var sliderData = {
    danceability: "",
    energy: "",
    valence: "",
    tempo: "",
    loudness: "",
    instrumentalness: "",
    speechiness: ""
  }

  var sliderEnabled = {
    danceability: true,
    energy: true,
    valence: true,
    tempo: true,
    loudness: true,
    instrumentalness: false,
    speechiness: false
  }

  /**
   * Changes the properties of the weight of the different variables in comparison to the total
   * @type {Object}
   */
  var weightDiff = {
    danceability: .2,
    energy: .2,
    valence: .2,
    tempo: .2,
    loudness: .2,
    instrumentalness: 0,
    speechiness: 0
  }

  /**
   * The custom range set for each property
   * @type {Object}
   */
  var customRange = {
    danceability: .35,
    energy: .35,
    valence: .35,
    tempo: 90,
    loudness: 8,
    instrumentalness: .3,
    speechiness: .3
  }

  /**
   * Changes the values of the weight to
   * @return {[type]} [description]
   */
  function enableChange(){
    var totalEnable = 0;
    $.each(sliderEnabled, function(key, value){
      if(value == true){
        totalEnable++;
      }

      console.log(key + " - " + value);
    })

    $.each(weightDiff, function(key, value){
      if(sliderEnabled[key] == true){
        weightDiff[key] = 1 / totalEnable;
      }
      else{
        weightDiff[key] = 0;
      }
    })
    showTracks();
    console.log(weightDiff);
  }

  /**
   * Gets the values of the sliders and stores it in the object.
   */
  function refreshData(){
    sliderData.danceability = sliderDance.value / 100;
    sliderData.energy = sliderEnergy.value / 100;
    sliderData.valence = sliderValence.value / 100;
    sliderData.tempo = ((sliderTempo.value / 100) * 155 + 55); // max = 205, min = 57
    sliderData.loudness = ((sliderLoudness.value / 100) * 21 - 21); // max = 0, min = 23.6
    sliderData.instrumentalness = sliderInstrumentalness.value / 100;
    sliderData.speechiness = (sliderSpeechiness.value / 100) * .6;
    console.log(sliderData);
    showTracks();
  };

  /**
   * Calculates the difference between all points and returns the total avarage distance.
   * @param  {[object]} a [The song information]
   * @return {[type]}   The avarage distance in comparison to the slider values
   */
  function distance(a){
    return (weightDiff.danceability * Math.abs(sliderData.danceability - a.danceability) +
    weightDiff.energy * Math.abs(sliderData.energy - a.energy) +
    weightDiff.valence * Math.abs(sliderData.valence - a.valence) +
    weightDiff.instrumentalness * Math.abs(sliderData.instrumentalness - a.instrumentalness) +
    weightDiff.speechiness * Math.abs(sliderData.speechiness - a.speechiness) +
    weightDiff.tempo * (Math.abs(sliderData.tempo - a.tempo) / 148) + // has to be divided by the total
    weightDiff.loudness * (Math.abs(sliderData.loudness - a.loudness) / 21)); // has to be divided by the total
  }

  /**
   * Gets the json array, sorts it and shows it to the user
   */
  function showTracks(){
    var searchStr = "//*";
    /**
     * Gets the json objects which are close enough to the given parameters.
     * @param  {[type]} key   [description]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    $.each(sliderEnabled, function(key, value){
      if(sliderEnabled[key] == true){
        searchStr += "[" + key + " > '" + (sliderData[key] - customRange[key]) +"'][" + key + " < '" + (sliderData[key] + customRange[key]) + "']"
      }
    })

    search = JSON.search(trackData, searchStr);

    $(".outputData").empty();

    search.sort(function(a, b){
      return distance(a) - distance(b);
    });

    removeDuplicates(search);

    for (var i=0; i<search.length && i < 8; i++) {
      var percentageCorrect = Math.round(100 - (distance(search[i]) * 100));

        if(true){
          $( ".outputData" ).append('<div class="perTrackWrapper"><div class="trackItem"><iframe src="https://open.spotify.com/embed/track/' + search[i].id + '" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div><div class="trackItem"><p>'+percentageCorrect+'%</p></div></div>');
          // $( ".outputData" ).append('<div class="perTrackWrapper"><div class="trackItem"><iframe src="https://open.spotify.com/embed/track/' + search[i].id + '" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div><div class="trackItem"></div></div>');
        }
    }
  };

  /**
   * Checks the entire array for duplicates and removes them.
   * @param  {Array} arrIn [the array with duplicates]
   * @return {Array}       [the same array without duplicates]
   */
  function removeDuplicates(arrIn){
    console.log(arrIn);
    console.log("search dupes");

    for(var i = 0; i < arrIn.length; i++){
      for(var x = i + 1; x < arrIn.length; x++){
        if(arrIn[i].id === arrIn[x].id){
          // console.log("remove dup: " + arrIn[x].id + " - pos:" + x + ", " + i + " - org: " + arrIn[i].id);
          arrIn.splice(x, 1);
        }
      }
    }
    return arrIn;
  }

});
