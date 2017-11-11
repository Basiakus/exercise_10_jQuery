//ćwiczenia praktyczne

$(function(){
 /* var p = $( '<p></p>' ),
      pWithText = $( '<p>Hi!</p>' ),
      pWithClass = $( '<p class="greeting">Hi!</p>' ); 
  console.log(p);
  console.log(pWithText);
  console.log(pWithClass);

  var guzik = $( '<button class="btn btn-default">guzik</btton>' )
  
  $("body").append(pWithText);
  $("body").append(pWithClass);
  $("body").append(guzik);


  $(pWithText).css('font-size', '32px');
  $(guzik).css("padding","30px").css("border-radius","5px");

$('button').each(function(index, element) {
	$(element).text("guzik " + index);
}).css('padding', '30px');
  

$('li').each(function(index, element) {
	$(element).text("element listy " + index);
});
var ul = $("ul");
var firstUl = ul.eq(0);
var secondUl = ul.eq(1);
var thridUl = ul.eq(2);
firstUl.css("color","blue");
secondUl.css("color", "red");
thridUl.css("color","violet");

var firstLifirstUl = $(firstUl).find("li").first().css("color","black");
var secondLisecondUl = $(firstUl.next()).find("li").eq(1).css("color","black");
var thirdUlThirdLi = $(ul.eq(2)).find("li").eq(2).css("color","black");

var addLi = $(firstUl).append("<li>dodatkowy element</li>");
$(firstUl).find("li").eq(3).css("color", "yellow").text("yellow");
*/

//zadanie 10.1
var jqSpan = $('span');
jqSpan.each(function(index, element) {
    if (index % 2 == 0) {
        $(element).css("color", "red")
    } else {
        $(element).css("color", "blue")
    }
});

var paragraf = $('p');

$(paragraf).each(function(index, element) {
    var buttonWithAttr = $('<button data-tmp="' + index + '">PRZYCISK</button>');
    $(element).append(buttonWithAttr);
});

$('button').click(function() {
alert($(this).attr("data-tmp"));
});

});