// $(document).ready(function() {
//   var trackDataIn = document.getElementById("textInput").value;
//   trackDataIn = "[" + trackDataIn + "]";
//   console.log(trackDataIn);
//
//   var trackDataJson = JSON.parse(trackDataIn);
//   console.log(trackDataJson);
//
//   search = JSON.search(trackDataJson, '//*[track]');
//   console.log(search);
//   var stringId = "";
//
//   for (var i=0; i<search.length; i++) {
//     stringId = stringId + search[i].track.id + ",";
//
//     if(i%20 == 0){
//       $( ".outputData" ).append("<p>"+stringId+"</p>");
//       stringId = "";
//     }
//   }
// });

function GetJsonClick(){
  $( ".outputData" ).empty();

  var trackDataIn = document.getElementById("textInput").value;
  trackDataIn = "[" + trackDataIn + "]";

  var trackDataJson = JSON.parse(trackDataIn);

  search = JSON.search(trackDataJson, '//*[track]');
  var searchArr = search;

  var stringId = "";
  for (var i=0; i<searchArr.length; i++) {
    stringId = stringId + searchArr[i].track.id + ",";
    console.log(searchArr[i].track.id);

    if(i%100 === 0 && i != 0){
      $( ".outputData" ).append("<p>"+stringId+"</p>");
      console.log(stringId);
      stringId = "";
    }
  }

  $( ".outputData" ).append("<p>"+stringId+"</p>");
  stringId = "";
}
