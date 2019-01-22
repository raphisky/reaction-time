var isReady = false;
var gameIsStarted = false;
var gameHasEnded = false;
var seriesRound = 0;

$('#actionButton').click( function( event ){

  // START : Case if Player needs to click Start

  if (!gameIsStarted  || gameHasEnded) {
    newGame();
  }

  // READY : Case if player has started Game but needs to click Ready

  else if (gameIsStarted && !isReady) {
    startTest(event);
    console.log("seriesPlayed = " + seriesPlayed);
  }

  // REACT : Case where player has Started Game, Started Test and is Ready

  else if (isReady && gameIsStarted && hasSpawned) {

    endRound(event);

        if (scoreSeries.length < 3) {
          startNewRound(seriesPlayed);
        }

        else if (scoreSeries.length == 3) {
            gameIsStarted = false;
            gameHasEnded = true;
            calculateAverageReactionTime(scoreSeries);
            $('#instructionsContent').append("<br> Your average reaction time : " + reactionTimeResult.toFixed() + "ms ");
            $('#actionButton').text("RESTART");
            saveScore(scoreSeries,averageReactionTime);
        }
  }

});




// When Player Clicks Start
function newGame(gameMode) {
  seriesPlayed = 1;
  gameIsStarted = true;
  gameHasEnded = false;
  isReady = false;
  $('#instructionsContent').text("Clique quand la couleur change");
  $('#actionButton').text("START");

  console.log("New Game starting.")

}

function saveScore(serie,average) {
  console.log("saving game, flushing data");
  serie = [];
}

// When Player clicks Ready

var startingClickTimeStamp;
var finalClickTimeStamp;
var hasSpawned;
var randomDelay = 0;

function startTest(e) {
  isReady = true;
  $('#actionButton').text('...');
  $('#instructionsContent').text("tiens-toi prêt...");
  startingClickTimeStamp = e.timeStamp;
  randomDelay = Math.floor((Math.random() * 3000) + 2000);
  triggerReaction = setTimeout(spawnReactionSignal, randomDelay);

  console.log("Round : " + seriesPlayed + " | First click :" + startingClickTimeStamp + " Random Delay : " + randomDelay);
}

// Change to be made upon delay
function spawnReactionSignal() {
  $('#actionButton').css('background','blue');
  $('#actionButton').css('color','9bbc0f');
  $('#actionButton').text('PUSH !');
  $('#instructionsContent').text("clique !!!!");


  hasSpawned = true;
}

// When player has finished a round that is not final;
function startNewRound(r) {
  $('#actionButton').text("NEXT ROUND >>");
  isReady = false;
}

function endRound(e) {
  hasSpawned = false;
  isReady = false;
  finalClickTimeStamp = e.timeStamp;
  reactionTimeResult = finalClickTimeStamp - startingClickTimeStamp - randomDelay;
  $('#instructionsContent').text("");
  $('#instructionsContent').append("Round " + seriesPlayed + " || " + reactionTimeResult.toFixed() + "ms ");
  scoreSeries.push(reactionTimeResult);

  seriesPlayed +=1;

  $('#actionButton').css("background", "#9bbc0f");
  console.log(reactionTimeResult);
}

// Calculate average score
var averageReactionTime;
var seriesPlayed = 0;
var scoreSeries = [];
var total = 0;

function calculateAverageReactionTime(array) {
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  averageReactionTime = total / array.length;

  console.log("Average Reaction Time = " + averageReactionTime);
}



function testReactionTime() {
  // spawn signal
}
