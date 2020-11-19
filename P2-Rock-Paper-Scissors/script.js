//Define all variables

let playerScore, computerScore, playerPick, computerPick; 

//Default Settings

playerScore = document.querySelector('#playerScore').textContent;
computerScore = document.querySelector('#computerScore').textContent;

playerPick =  document.querySelector('#playerPick').textContent;
computerPick = document.querySelector('#computerPick').textContent;

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


//Pick a value
  //Rock
  document.querySelector('#rock').addEventListener('click', function () {
    //Player Picks a value
    playerPick = '✊'
    document.querySelector('#playerPick').textContent = playerPick;
    //Computer Picks a value
    choices = ['✊', '✋', '✌️'];
    computerPick = choices[Math.floor(Math.random()*2)+1];
    document.querySelector('#computerPick').textContent = computerPick;

    //Compare values
    if (tests[playerPick][computerPick] === 'true') {
        playerScore++;
        document.querySelector('#playerScore').textContent = playerScore;
      } else if (tests[playerPick][computerPick] === 'false') {
        computerScore++;
        document.querySelector('#computerScore').textContent = computerScore;
      }
  })

  //Paper
  document.querySelector('#paper').addEventListener('click', function () {
    //Player Picks a value
    playerPick = '✋'
    document.querySelector('#playerPick').textContent = playerPick;
    //Computer Picks a value
    choices = ['✊', '✋', '✌️'];
    computerPick = choices[Math.floor(Math.random()*2)+1];
    document.querySelector('#computerPick').textContent = computerPick;

    //Compare values
    if (tests[playerPick][computerPick] === 'true') {
        playerScore++;
        document.querySelector('#playerScore').textContent = playerScore;
      } else if (tests[playerPick][computerPick] === 'false') {
        computerScore++;
        document.querySelector('#computerScore').textContent = computerScore;
      }
  })

  //Scissor
  document.querySelector('#scissors').addEventListener('click', function () {
    //Player Picks a value
    playerPick = '✌️'
    document.querySelector('#playerPick').textContent = playerPick;
    //Computer Picks a value
    choices = ['✊', '✋', '✌️'];
    computerPick = choices[Math.floor(Math.random()*2)+1];
    document.querySelector('#computerPick').textContent = computerPick;

    //Compare values
    if (tests[playerPick][computerPick] === 'true') {
        playerScore++;
        document.querySelector('#playerScore').textContent = playerScore;
      } else if (tests[playerPick][computerPick] === 'false') {
        computerScore++;
        document.querySelector('#computerScore').textContent = computerScore;
      }
  })


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