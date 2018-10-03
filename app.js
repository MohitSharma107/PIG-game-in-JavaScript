/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

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

document.getElementById('socre-0').textContent = '0';
document.getElementById('socre-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {

      // Roll the Dice and get random number
      var dice = Math.floor(Math.random() * 6 + 1);

      // Display the Dice
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

      // 3. Update the round score IF the rolled number was NOT a 1

      if(dice === 1) {
        roundScore = 0;
      } else {
        while(dice != 0) {
          roundScore += dice;
        }
      }
});