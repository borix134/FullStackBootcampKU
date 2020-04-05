var score = 0;
var wins = 0;
var losses = 0;
var winningNumber = 0;
$(document).ready(function() {

    function updateDisplay(){
        $("#display").html("Wins: " + wins + "<br>" + "Losses: " + losses + "<br>"
        + "Winning score: " + winningNumber + "<br>" + "Current score: " + score);
    }

    function newGame(){
        winningNumber = Math.floor(Math.random()*102) + 19;
        score = 0;
        $("#crystals").empty();
        for (var i=0; i<4; i++){
            var crystal = $("<img>");
            crystal.attr("src","assets/images/crystal.jpeg");
            crystal.attr("value",Math.floor(Math.random()*12)+1);
            crystal.addClass("crystal");
            $("#crystals").append(crystal);
       }

       $(".crystal").on("click",function(){
            score += parseInt($(this).attr("value"));
            if (score == winningNumber){
                wins++;
                newGame();
            }else if(score > winningNumber){
                newGame();
                losses++;
            }
            updateDisplay();
        });
    }

    updateDisplay();
    newGame();
});
