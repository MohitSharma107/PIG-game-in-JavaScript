/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
The == operator tests for loose equality, by checking to see if the left side is the same value as what's to the right. If they are both the same value, then javaScript will convert (coerce) them both into the same type as what's on the right (comes last). So for instance....

0 == '0' // returns true

Both values above will be converted(coerced)  to a string data type. However if you used the strict equality operator ===

0 === '0' // returns false

This returns false because the === checks for both values and type. If either or not the same, then it returns false.  */

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


/*
 For Practice
 var dice = Math.floor(Math.random() * 6 + 1);
 we select something(like an element) with the querySelector and then after that do something over that selction
 document.querySelector('#current-'+ activePlayer).textContent = dice;
 document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'
*/

// var x = document.querySelector('#current-' + activePlayer).textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';


// Here down below document.querySelector('.btn-roll') will select an element basis on class .btn-roll send to it and
// we have added a function i.e addEventListener, accept two arguments(i.e event and the function), and this function will sit there and wait for the event(i.e is 'click' here) to happen and then it will call the function (or function name i.e this function() --> without name [1st case] or  just by calling it through name[2nd case]) 
// callback function :- i.e function that accept another function and call another function as here  document.querySelector('.btn-roll').addEventListener('click', btn); ....here .addEventlistener is a callback function which is calling btn function later

// 1st case
// function btn() {
//   // Do something here
// }
// btn();
// document.querySelector('.btn-roll').addEventListener('click', btn);

// 2nd case --we call this anonymous function because it dont have any name

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//below down is anonymous function and it can only be used in this eventListener, not anywhere else because it dont have any name
document.querySelector('.btn-roll').addEventListener('click', function () {

      // Roll the Dice and get random number
      var dice = Math.floor(Math.random() * 6) + 1;

      // Display the Dice result through image
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

      // 3. Update the round score IF the rolled number was NOT a 1
      //==, != Does type coercion and this !==, === dosent.  
      //  
      if(dice === 1) {
          //NextPlayer
          nextPlayer();
      } else {
          roundScore += dice;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
      }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    /*
    var x = document.getElementById('current-' + activePlayer).textContent;
    document.getElementById('score-'+ activePlayer).textContent = x;
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;

    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     document.querySelector('.dice').style.display = 'none';
    */



    //Add current score to the global score
      scores[activePlayer] += roundScore;

    //Update the UI
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if the player won the game
      if(scores[activePlayer] >= 20){
       document.querySelector('#name-' + activePlayer).textContent = 'Winner';
       document.querySelector('.dice').style.display = 'none';

      //  what toggle will do here is as winner class is not in '.player-'+ activePlayer +'-panel' (say activePlayer is 1) so it will add that class and as we do hold that will make the activeplayer to change to activePlayer to 0  and active class will be on activePlayer 0 but toggle will add the active class if it is not there at activePlayer.
       document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('winner');
       document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
      } else {   
     //Next Player
       nextPlayer();
      }
});

function nextPlayer() {
  roundScore = 0;
  document.querySelector('#current-' + activePlayer).textContent = 0;
  /* if (activePlayer === 1)
  {
    activePlayer = 0;
  }
  else {
    activePlayer = 1;
  } */
  //OR
  activePlayer === 0? activePlayer = 1 : activePlayer = 0;

  // what toggle do is it will add active class in player-0-panel if it there, otherwise if active class is not there it will remove it.
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  /*
  document.querySelector('player-1-panel').classList.add('active');
  document.querySelector('player-1-panel').classList.remove('active');
  */
  
  // Now as soon as the new player get chance we want to hide the dice
  document.querySelector('.dice').style.display = 'none';
}