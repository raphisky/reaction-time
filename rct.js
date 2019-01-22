
var reactionTimeResult;
var startingClickTimeStamp;
var finalClickTimeStamp;
var gameIsOn = false;
var gameIsStarted = false;
var scoreSeries = [];
var seriesPlayed;
var isReady = false;

var leaderboard = [];

//fitty('#sml_lettering');
//fitty('#rt_lettering');

$('#actionButton').mousedown( function( event ){

  if (!gameIsStarted) {
    seriesPlayed = 0;
    gameIsStarted = true;
    $('#actionButton').text("READY");
    $('#actionButton').removeClass("blinking-button");
    $('#instructionsContent').text("Appuie sur Ready quand tu es prêt(e).");

  }

  else {
        if (!gameIsOn) {
            startingClickTimeStamp = event.timeStamp;
            console.log("starting click = " + startingClickTimeStamp);
            testReactionTime(startingClickTimeStamp);
        }
    }
});

$('#reactionZone').mousedown( function( event ){

  if (gameIsOn) {

    finalClickTimeStamp = event.timeStamp;
    console.log("second click : " + finalClickTimeStamp);
    reactionTimeResult = finalClickTimeStamp - startingClickTimeStamp - randomDelay;
    console.log("reaction time = " + reactionTimeResult);
    processScore(reactionTimeResult);
    $('#reactionZone').css('background','#0f380f');
    $('#instructionsContent').text(" ");
    $('#instructionsContent').append(reactionTimeResult.toFixed() + "ms" + "<br>" + "Manche : " + seriesPlayed + "<br>" + "Clique sur Ready");
    gameIsOn = false;
  }
});

var averageReactionTime ;
var total = 0;

function processScore(result) {
  $('#lastScoreDisplay').append("<span>" + result.toFixed() + "ms&nbsp;" + "</span>");
  scoreSeries.push(result);
  console.log(scoreSeries);
  seriesPlayed += 1;
  console.log(seriesPlayed);

  if (seriesPlayed == 3) {
        for (var i = 0; i < scoreSeries.length; i++) {
          total += scoreSeries[i];
        }
        averageReactionTime = total / scoreSeries.length;
        endGame(averageReactionTime);
  }

  else {


  }
}

function endGame(averageReactionTime) {
  showResult(averageReactionTime);
  showRankingOf(averageReactionTime);
  resetInterface();
}

function resetInterface() {
  scoreSeries = [];
  gameIsStarted = false;
  gameIsOn = false;
  $('#actionButton').text("START");
  $('#actionButton').addClass(".please-blink");

  // also, make the fucking dots blink.

  $('#instructionsContent').text("Clique (ou tape) quand la couleur change.<br> Au bout de 3 essais, ta moyenne sera calculée.<br>");
}

function showResult(r) {
  console.log("Your average score is : " + r);
}

function showRankingOf(r) {
  leaderboard.push(r);
  // sort leaderboard with new value in;
  // return position of r within the array; be careful of ties.
  console.log("time to show the leaderboard")
}



function spawnReactionSignal() {
  $('#reactionZone').css('background','blue');
}

var triggerReaction;
var randomDelay;

function testReactionTime(u) {
    gameIsOn = true;
    reactionTimeResult = 0;
    $('#instructionsContent').text("Clique quand la couleur change !");
    randomDelay = Math.floor((Math.random() * 4000) + 2000);
    console.log("random delay = " + randomDelay);
    triggerReaction = setTimeout(spawnReactionSignal, randomDelay);
};

function nowBlinkMotherFucker(whichDot) {
    $('.dot').addClass("lit");
    setTimeout(nowUnBlinkMotherFucker, 300);
}

function nowUnBlinkMotherFucker() {
  $('.dot').removeClass("lit");
}

//setInterval(nowBlinkMotherFucker, 500);

// before clicking start, all blinking
// after clicking start, one blinks.
// after first result is processed,

function blinkThemMotherfuckers(a,b,c) {
  while (gameIsOn = true) {

  }
}
