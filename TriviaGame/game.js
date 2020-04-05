var time = 30;
var score = 0;
var questionNum;
var game = true;

var questions = ["Eddie Van Halen played the guitar?",
"Jefferson Airplane was from the 1980s?",
"Lynyrd Skynyrd was acid rock?",
"Iron Maiden formed in England?",
"Jimi Hendrix played guitar with his left hand?",
"Elvis Presley died in 1989?",
"Metallica is a classic rock band?",
"Elton John covered Pinball Wizard?",
"Ringo Starr was the first drummer for the Beatles?"];
var answers = ["t","f","f","t","t","f","f","t","f"];

function timer(){
    setTimeout(function(){
        time--;
        $("#timer").html("<h1>"+time+" Seconds</h1>");
        if (time > 0 && game){
            timer();
        }else{
            gameOver();
        }
    }, 1000);
}
timer();

function nextQuestion(){
    if (questionNum == null){
        questionNum = 0;
        console.log("eureka!");
    }
    if (questionNum < questions.length){
        $("#qString").text(questions[questionNum]);
        if (answers[questionNum]==="t"){
            $("#true").val("c");
            $("#false").val("");
        }else{
            $("#true").val("");
            $("#false").val("c");
        }
        questionNum++;
    }else{
        gameOver();
    }
}
$(".answer").on("click",function(){
    if ($(this).val()==="c"){
        score++;
        console.log(score);
        console.log($(this).val());
    }
    nextQuestion();
});

function gameOver(){
    $("#question").html("<h2>Game Over! You got " + score
    + " questions correct out of " + (questions.length+1));
    game = false;
}