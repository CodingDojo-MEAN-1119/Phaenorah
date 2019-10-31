$(document).ready(function(){

    $.get("https://opentdb.com/api.php?amount=3&category=22&difficulty=medium&type=multiple",function(geo){
        geography = geo.results;
    })
    $.get("https://opentdb.com/api.php?amount=3&category=12&difficulty=medium&type=multiple",function(music){
        entertainment = music.results;
    })
    $.get("https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=multiple",function(computer){
        science = computer.results;
    })

    //geography- geography
    $("#aa").click(function(){
        $("#aa").html("<div class='checker'><p>"+geography[0].question+
        "</p><p>"+geography[0].incorrect_answers[0]+
        "</p><p>"+geography[0].incorrect_answers[1]+
        "</p><p>"+geography[0].correct_answer+"</p><p>"+
        geography[0].incorrect_answers[2]+"</p></div>");
        })
    $("#ab").click(function(){
        $("#ab").html("<div class='checker'><p>"+geography[1].question+
        "</p><p>"+geography[0].incorrect_answers[0]+
        "</p><p>"+geography[0].incorrect_answers[1]+
        "</p><p>"+geography[0].correct_answer+"</p><p>"+
        geography[0].incorrect_answers[2]+"</p></div>");
        })
    $("#ac").click(function(){
        $("#ac").html("<div class='checker'><p>"+geography[2].question+
        "</p><p>"+geography[0].incorrect_answers[0]+
        "</p><p>"+geography[0].incorrect_answers[1]+
        "</p><p>"+geography[0].correct_answer+"</p><p>"+
        geography[0].incorrect_answers[2]+"</p></div>");
        })

    //entertainment-music
    $("#bb").click(function(){
        $("#bb").html("<div class='checker'><p>"+entertainment[0].question+
        "</p><p>"+entertainment[0].incorrect_answers[0]+
        "</p><p>"+entertainment[0].incorrect_answers[1]+
        "</p><p>"+entertainment[0].correct_answer+"</p><p>"+
        entertainment[0].incorrect_answers[2]+"</p></div>");
        })
    $("#bc").click(function(){
        $("#bc").html("<div class='checker'><p>"+entertainment[1].question+
        "</p><p>"+entertainment[0].incorrect_answers[0]+
        "</p><p>"+entertainment[0].incorrect_answers[1]+
        "</p><p>"+entertainment[0].correct_answer+"</p><p>"+
        entertainment[0].incorrect_answers[2]+"</p></div>");
        })
    $("#bd").click(function(){
        $("#bd").html("<div class='checker'><p>"+entertainment[2].question+
        "</p><p>"+entertainment[0].incorrect_answers[0]+
        "</p><p>"+entertainment[0].incorrect_answers[1]+
        "</p><p>"+entertainment[0].correct_answer+"</p><p>"+
        entertainment[0].incorrect_answers[2]+"</p></div>");
        })

    //science-computer
    $("#cc").click(function(){
        $("#cc").html("<div class='checker'><p>"+science[0].question+
        "</p><p>"+science[0].incorrect_answers[0]+
        "</p><p>"+science[0].incorrect_answers[1]+
        "</p><p>"+science[0].correct_answer+"</p><p>"+
        science[0].incorrect_answers[2]+"</p></div>");
        })
    $("#cd").click(function(){
        $("#cd").html("<div class='checker'><p>"+science[1].question+
        "</p><p>"+science[0].incorrect_answers[0]+
        "</p><p>"+science[0].incorrect_answers[1]+
        "</p><p>"+science[0].correct_answer+"</p><p>"+
        science[0].incorrect_answers[2]+"</p></div>");
        })
    $("#ce").click(function(){
        $("#ce").html("<div class='checker'><p>"+science[2].question+
        "</p><p>"+science[0].incorrect_answers[0]+
        "</p><p>"+science[0].incorrect_answers[1]+
        "</p><p>"+science[0].correct_answer+"</p><p>"+
        science[0].incorrect_answers[2]+"</p></div>");
        })
})

