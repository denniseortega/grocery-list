var blanks = ["#item1", "#item2","#item3"];

var userText = [];
var upperCaseArray =[];



$(document).ready(function() {
  $("#thingsList").toggle();
  $("button#add").click(function(){

    blanks.forEach(function(blank){
      text=$(blank).val();
      userText.push(text);
    });

    // var text=$("#item1").val();
    // userText.push(text);
    // var text2=$("#item2").val();
    // userText.push(text2);
    // var text3=$("#item3").val();
    // userText.push(text3);
    //$('ul').append('<li>' +userText.pop()+ '</li>');
    //$('ul').append('<li>' +userText.pop()+ '</li>');

    var upperCaseArray=userText.map(function(word){
      return word.toUpperCase();
    });

    console.log(upperCaseArray.sort());
    upperCaseArray.forEach(function(upperCaseWord){
      $('ul').append('<li>' +upperCaseWord+ '</li>');
    })

    $("#form1").toggle();
    $("#thingsList").toggle();


  });

});
