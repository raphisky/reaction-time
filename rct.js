
var reactionTimeResult;
var startingClickTimeStamp;
var finalClickTimeStamp;
var gameIsOn = false;
var gameIsStarted = false;
var scoreSeries = [];
var seriesPlayed;

$('#actionButton').click( function( event ){

  if (!gameIsStarted) {
    seriesPlayed = 0;
    gameIsStarted = true;
    $('#actionButton').text("READY");
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

$('#reactionZone').click( function( event ){

  if (gameIsOn) {
    finalClickTimeStamp = event.timeStamp;
    console.log("second click : " + finalClickTimeStamp);
    reactionTimeResult = finalClickTimeStamp - startingClickTimeStamp - randomDelay;
    console.log("reaction time = " + reactionTimeResult);
    processScore(reactionTimeResult);
    $('#reactionZone').css('background','#0f380f');
    $('#instructionsContent').text("Appuie sur Ready quand tu es prêt(e).");
    gameIsOn = false;
  }
});

function processScore(result) {
  $('#lastScoreDisplay').append("<span>" + result.toFixed() + "ms&nbsp;" + "</span>");
  scoreSeries.push(result);
  seriesPlayed += 1;
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

setInterval(nowBlinkMotherFucker, 500);
