$(document).ready(function(){
  $("#userInput").submit(function(event){
  event.preventDefault();
  var words = $("input#inputSentence").val().split(" ");

  var min3char = words.map(function(word) {
    if(word.length >= 3){
      return word;
    }
  });

  var result = min3char.join(" ");
  var reverse = min3char.reverse().join(" ");
  $("#result1").text(result);
  $("#result2").text(reverse);
  $(".well").show();
  });
});
