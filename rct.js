
var reactionTimeResult;
var startingClickTimeStamp;
var finalClickTimeStamp;
var gameIsOn = false;
var scoreSeries = [];

$('#actionButton').click( function( event ){

  if (!gameIsOn) {
    startingClickTimeStamp = event.timeStamp;
    console.log("starting click = " + startingClickTimeStamp);
    testReactionTime(startingClickTimeStamp);
  }


});

$('#reactionZone').click( function( event ){

  if (gameIsOn) {
    finalClickTimeStamp = event.timeStamp;
    console.log("second click : " + finalClickTimeStamp);
    reactionTimeResult = finalClickTimeStamp - startingClickTimeStamp - randomDelay;
    console.log("reaction time = " + reactionTimeResult);
    processScore(reactionTimeResult);
    $('#reactionZone').css('background-color','#0f380f');
    gameIsOn = false;
  }
});

function processScore(result) {
  $('#lastScoreDisplay').append("<span>" + result.toFixed() + "ms" + " <br> </span>");
  scoreSeries.push(reactionTimeResult);
}


function spawnReactionSignal() {
  $('#reactionZone').css('background-color','blue');
}

var triggerReaction;
var randomDelay;

function testReactionTime(u) {
    gameIsOn = true;
    reactionTimeResult = 0;
    randomDelay = Math.floor((Math.random() * 4000) + 2000);
    console.log("random delay = " + randomDelay);
    triggerReaction = setTimeout(spawnReactionSignal, randomDelay);
};
