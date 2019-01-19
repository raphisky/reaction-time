
var reactionTimeResult;
var startingClickTimeStamp;
var finalClickTimeStamp;
var gameIsOn = false;
var scoreSeries = [];

$('#actionButton').click( function( event ){

  gameIsOn = true;
  startingClickTimeStamp = event.timeStamp;
  console.log("starting click = " + startingClickTimeStamp);
  testReactionTime(startingClickTimeStamp);

});

function spawnReactionSignal() {
  $('#reactionZone').css('background-color','blue');
}

var triggerReaction;

function testReactionTime(u) {
    var randomDelay = Math.floor((Math.random() * 4000) + 2000);
    console.log("random delay = " + randomDelay);
    triggerReaction = setTimeout(spawnReactionSignal, randomDelay);

    $('#reactionZone').click( function( event ){

          if (gameIsOn) {
            finalClickTimeStamp = event.timeStamp;
            console.log("second click : " + finalClickTimeStamp);
            reactionTimeResult = finalClickTimeStamp - startingClickTimeStamp - randomDelay;
            console.log("reaction time = " + reactionTimeResult);
            gameIsOn = false;
            $('#reactionZone').css('background-color','pink');
            scoreSeries.push(reactionTimeResult);
            return reactionTimeResult;
          }
    });
};
