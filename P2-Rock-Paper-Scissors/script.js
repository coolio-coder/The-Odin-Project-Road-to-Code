
//Define all variables

let playerScore, computerScore, playerPick, computerPick, tests, choices; 

//Default Settings

// window.addEventListener('load', (event) => {
//   var playerName = prompt('What is your name', 'name');
//   document.querySelector('#playerName').textContent = playerName;
// })

playerScore = 0;
computerScore = 0;

playerPick =  document.querySelector('#playerPick').textContent;
computerPick = document.querySelector('#computerPick').textContent;

var setPlayerPick = document.querySelector('#playerPick');
var setComputerPick = document.querySelector('#computerPick');
var setPlayerScore = document.querySelector('#playerScore');
var setComputerScore = document.querySelector('#computerScore');

//Rules
tests = {
      '✋' : {
         '✊': 'true',
         '✋': 'tie',
         '✌️': 'false'
      },
        '✊' : {
         '✊': 'tie',
         '✋': 'false',
         '✌️': 'true'        
       },
        '✌️' : {
         '✊': 'false',
         '✋': 'true',
         '✌️': 'tie'
      }
    }

const comparePicks = function(playerPick, comparePick) {
  if (tests[playerPick][computerPick] === 'true') {
    playerScore++;
    setPlayerScore.textContent = playerScore;

    //Update scoreboard
    var node = document.createElement("li");
    var textnode = document.createTextNode('Player: '+playerPick+' - Computer: '+computerPick);
    node.appendChild(textnode);
    document.getElementById("scores").appendChild(node);

    //Color winner
    document.querySelector('#scores').style.color = '#00FF00'
  } else if (tests[playerPick][computerPick] === 'false') {
    computerScore++;
    setComputerScore.textContent = computerScore;

    var node = document.createElement("li");
    var textnode = document.createTextNode('Player: '+playerPick+' - Computer: '+computerPick);
    node.appendChild(textnode);
    document.getElementById("scores").appendChild(node);

    document.querySelector('#scores').style.color = '#ffcccb'
  }
}


document.body.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {

    if (document.querySelector('#playerScore').textContent < 5 && document.querySelector('#computerScore').textContent < 5) {
    //ROCK
    if(event.target.textContent === '✊') {
      //Player Value
      playerPick = '✊';
      setPlayerPick.textContent = playerPick;

      //Computer Picks a value
      choices = ['✊', '✋', '✌️'];
      computerPick = choices[Math.floor(Math.random() * 3)];
      setComputerPick.textContent = computerPick;
  
      //Compare values
      comparePicks(playerPick,computerPick);
      console.log(playerPick)
      console.log(computerPick)
    //PAPER
    } else if (event.target.textContent === '✋') {
      //Player Value
      playerPick = '✋';
      setPlayerPick.textContent = playerPick;

      //Computer Picks a value
      choices = ['✊', '✋', '✌️'];
      computerPick = choices[Math.floor(Math.random() * 3)];
      setComputerPick.textContent = computerPick;
  
      //Compare values
      comparePicks(playerPick,computerPick);
      console.log(playerPick)
      console.log(computerPick)
    //SCISSOR
    } else if (event.target.textContent === '✌️') {
      //Player Value
      playerPick = '✌️';
      setPlayerPick.textContent = playerPick;

      //Computer Picks a value
      choices = ['✊', '✋', '✌️'];
      computerPick = choices[Math.floor(Math.random() * 3)];
      setComputerPick.textContent = computerPick;
  
      //Compare values
      comparePicks(playerPick,computerPick);
      console.log(playerPick)
      console.log(computerPick)
    }
  } else if (playerScore > computerScore) {
    document.getElementById("announce").innerHTML += 'You Win';

    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (computerScore > playerScore) {
    document.getElementById("announce").innerHTML += 'You Lose';

    document.querySelector('body').style.backgroundColor = 'red';
  }
}});


/**VERSION 1 */

// //Pick a value
//   //Rock
//   document.querySelector('#rock').addEventListener('click', function () {
//     //Player Picks a value
//     playerPick = '✊';
//     setPlayerPick.textContent = playerPick;

//     //Computer Picks a value
//     choices = ['✊', '✋', '✌️'];
//     computerPick = choices[Math.floor(Math.random()*3)];
//     setComputerPick.textContent = computerPick;
 
//     //Compare values
//     comparePicks(playerPick,computerPick)
//   })

//   //Paper
//   document.querySelector('#paper').addEventListener('click', function () {
//     //Player Picks a value
//     playerPick = '✋'
//     setPlayerPick.textContent = playerPick;
//     //Computer Picks a value
//     choices = ['✊', '✋', '✌️'];
//     computerPick = choices[Math.floor(Math.random()*3)];
//     setComputerPick.textContent = computerPick;

//     //Compare values
//     comparePicks(playerPick,computerPick)
//   })

//   //Scissor
//   document.querySelector('#scissors').addEventListener('click', function () {
//     //Player Picks a value
//     playerPick = '✌️'
//     setPlayerPick.textContent = playerPick;
//     //Computer Picks a value
//     choices = ['✊', '✋', '✌️'];
//     computerPick = choices[Math.floor(Math.random()*3)];
//     setComputerPick.textContent = computerPick;

//     //Compare values
//     comparePicks(playerPick,computerPick)
//   })

  /**INITIAL PSEUDO CODE*/

//document.querySelector('#playerPick').textContent = '?'

//Define all variables

// let playerScore, computerScore, playerPick, computerPick; 

// //Default Settings

// playerScore = 0;
// computerScore = 0;

// //Loop Until someone gets 5 points
// for(i = 0; playerScore == 5 || computerScore == 5; i++) {
  
//   //Default Picks
//   playerPick = 0;
//   computerPick = 0;
  
//   //Pick a value
//     //Player Value
//     playerPick = (prompt('Pick a choice')).toUpperCase;
//     //Computer Value
//     choices = ['Rock', 'Paper', 'Scissors'];
//     computerPick = choices[Math.floor(Math.random()*3)];
    
//   //Compare Values
//     //Define the Rules
//     tests = {
//       'Paper' : {
//          Rock: 'true',
//          Paper: 'tie',
//          Scissors: 'false'
//       },
//        'Rock' : {
//          Rock: 'tie',
//          Paper: 'false',
//          Scissors: 'true'        
//        },
//         'Scissors' : {
//          Rock: 'false',
//          Paper: 'true',
//          Scissors: 'tie'
//       }
//     }
//      //Compare the results and give points
//      if (tests[playerPick][computer] === 'true') {
//        playerScore++;
//      } else if (tests[playerPick][computer] === 'false') {
//        computerScore++;
//      } 
// }

// if (playerScore === 5) {
//   console.log('You won!')
// } else {console.log('You Lost!')}


/**IDEAS FOR SIMPLIFYING THE CODE*/

// //shortcut
// document.querySelector('#rock').addEventListener('click', function () {
//     playerPick = '✊'
//     document.querySelector('#playerPick').textContent = playerPick;
// })

// document.querySelector('#paper').addEventListener('click', function () {
//     playerPick = '✋'
//     document.querySelector('#playerPick').textContent = playerPick;
// })
// document.querySelector('#scissors').addEventListener('click', function () {
//     playerPick = '✌️'
//     document.querySelector('#playerPick').textContent = playerPick;
// })

//     //Computer Picks a value
//     choices = ['✊', '✋', '✌️'];
//     computerPick = choices[Math.floor(Math.random()*2)+1];
//     document.querySelector('#computerPick').textContent = computerPick;

//     //Compare values
//     if (tests[playerPick][computerPick] === 'true') {
//         playerScore++;
//         document.querySelector('#playerScore').textContent = playerScore;
//       } else if (tests[playerPick][computerPick] === 'false') {
//         computerScore++;
//         document.querySelector('#computerScore').textContent = computerScore;
//       }