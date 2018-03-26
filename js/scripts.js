var userText = [];
var uppercaseArray =[];



$(document).ready(function() {
  $("button#add").click(function(){


    var text=$("#item1").val();
    console.log(text);
    userText.push(text);
    var text2=$("#item2").val();
    userText.push(text2);
    var text3=$("#item3").val();
    userText.push(text3);
    //$('ul').append('<li>' +userText.pop()+ '</li>');
    //$('ul').append('<li>' +userText.pop()+ '</li>');

    var uppercaseArray=userText.map(function(word){
      return word.toUpperCase();
    });

    console.log(uppercaseArray.sort());


  });

});
