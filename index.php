<html>
<head>
    <link rel="stylesheet" type="text/css" href="style/style.css" />
    <script src="script/defiant.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="script/script.js"></script>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <h1>Find the perfect songs.</h1>

      <h2>Wanna dance?</h2>
      <input class="checkboxEnable" type="checkbox" id="checkDance" checked/>
      <h3 class="sliderAnswer danceAnswer">Kinda.</h3>
      <div class="slidecontainer">
        <input type="range" min="1" max="100" value="50" class="slider" id="myRangeDance">
        </div>

      <h2>Feeling energetic?</h2>
      <input class="checkboxEnable" type="checkbox" id="checkEnergy" checked/>
      <h3 class="sliderAnswer energyAnswer">Kinda.</h3>
      <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRangeEnergy">
      </div>

      <h2>How cheerful are you?</h2>
      <input class="checkboxEnable" type="checkbox" id="checkValence" checked/>
      <h3 class="sliderAnswer valenceAnswer">Kinda.</h3>
      <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRangeValence">
      </div>
      <h2>What tempo are you looking for?</h2>

      <input class="checkboxEnable" type="checkbox" id="checkTempo" checked/>
      <h3 class="sliderAnswer tempoAnswer">Normal.</h3>
      <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRangeTempo">
      </div>

      <h2>Loudness?</h2>
      <input class="checkboxEnable" type="checkbox" id="checkLoudness" checked/>
      <h3 class="sliderAnswer loudnessAnswer">Normal.</h3>
      <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRangeLoudness">
      </div>

      <h2>Instrumental</h2>
      <input class="checkboxEnable" type="checkbox" id="checkInstrumentallness" />
      <h3 class="sliderAnswer instrumentalnessAnswer">Normal.</h3>
      <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRangeInstrumentalness">
      </div>

      <h2>Amount of speech</h2>
      <input class="checkboxEnable" type="checkbox" id="checkSpeechiness" />
      <h3 class="sliderAnswer speechinessAnswer">Normal.</h3>
      <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRangeSpeechiness">
      </div>
    </div>
    <div class="containerSongs">
      <!-- <p>Value: <span id="demo"></span></p> -->
      <div class="outputData">

      </div>
    </div>
  </div>

</body>
</html>
