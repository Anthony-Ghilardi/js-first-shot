// Activity Code Review 1 types and objects STARTS 


// let meats = ['beef', 'pork', 'chicken', 'ham', 'bacon,', 'filet'];
// let vegetables = ['carrots', 'corn', 'lettuce', 'tomato'];
// let desserts = ['pudding', 'icecream', 'brownie', 'cookie', 'pazookie'];


// meats.pop();
// vegetables.pop();
// let dessert = desserts[3];

// let mondayMenu = meats.concat(vegetables);
//     mondayMenu.push(dessert);
//      console.log("Monday's Menu: " + mondayMenu);


// Activity Code Review 1 types and objects ENDS 


// Rock Paper Scissors activity STARTS HERE

let userSelection = prompt("rock, paper or scissors?"); 
let computerSelection = getComputerSelection();                       


function getComputerSelection() {
let randomNumber = Math.floor(Math.random() *3) +1;
if (randomNumber === 1) {
  return 'rock';
} else if (randomNumber === 2) {
  return'paper';
} else if (randomNumber === 3) {
  return'scissors';
} else {
  console.log('Invalid selection');
  return null;
}
}

let compare=function(userSelection,computerSelection){
    if(userSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'paper' && computerSelection === 'rock') ||
        (userSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
    
}
console.log(compare(userSelection,computerSelection));

// Rock Paper Scissors activity ENDS HERE


/* Arrays, declaring variables, console.log 
// Day one start

let jerseyColors = ['Red', 'Black', 'Orange', 'Blue', 'Purple', 'Yellow', 'Brown']

console.log (`The team's jersey color will be ${jerseyColors[3]}, ${jerseyColors[2]}, ${jerseyColors[4]}.`)

console.log(jerseyColors)

jerseyColors.push('Maroon')
console.log(jerseyColors)

// console.log("The team's jersey color will be " + jerseyColors[3] + '.')

// alternatively you could type console.log('The team/'s jersey color will b ' + jerseyColor[3] + '.') to continue using all single quotes ' ' 

// ADVANCED ALTERNATIVE USING THE GRAVE KEY AKA SHIFT + TILDA console.log (`The team's jersey color will be ${jerseyColors[3]}.`) 

// Day one ends 
*/

// Day two starts

// console.log (0 == false)
// console.log ('' == false)

// let a = 0
// let b = 0

// console.log (a === b)

// let a = '0'
// let b = '0'

// console.log (a === b)

// if (a==b){
//     console.log('A is the same as b. The value of a is ${a} and the value of b is {b}')
// }

// Select the following elements from our HTML page:
// let myHandUl = document.querySelector('.my-hand')
// let playedCardsUl = document.querySelector('.played-cards')
// let drawCardButton = document.querySelector('.draw-card')

// function addCardToHand(){
//     // Make an li and give it the text of its suit and number.
//     let cardLi = document.createElement('li')
//     let cardName = drawCard()
//     cardLi.textContent = cardName

//     // Create a button to play the card.
//     let playButton = document.createElement('button')
//     playButton.textContent = 'Play'

//     // Add the play button to the Li card.
//     cardLi.append(playButton)

//     // Add the Li card to the list of all cards.
//     myHandUl.append(cardLi)

//     // When the play button is clicked, remove the Li card.
//     playButton.addEventListener('click', function(){
//         cardLi.remove()
//         playCard(cardName)
//     })
// }

// function playCard(cardName){
//     let cardLi = document.createElement('li')

//     cardLi.textContent = cardName // <-- TO DO: Change this to the name of the card played.

//     playedCardsUl.append(cardLi)
// }

// // Create three cards for the player to start with.
// for(let i = 0; i < 3; i++){                    
//     addCardToHand()
// }

// // When the user clicks "Draw Card," they get a new card.
// drawCardButton.addEventListener('click', function(){
//     addCardToHand()
// })

// Module 4 iteration practice activity 4

// let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
// let monthList = document.querySelector('.month-list')

// /* Old Code
// for(let i = 0; i < monthlyProfitLabels.length; i++){
//     let label = monthlyProfitLabels[i]
//     let monthLi = document.createElement('li')
//     monthLi.textContent = label
//     monthList.append(monthLi)
// } */

// // Refined code using .forEach

// let selectedMonths = [ 
//     { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
//     { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
//     { name: 'March', revenue: 15, expenses: 3, quarter: 1 } 
// ]

// let monthlyProfitLabels = selectedMonths.map(function(month){
//     let label = `${month.name}: ${month.revenue - month.expenses}`
//     return label
// })

// Array iterators using filter solution

// let allMonths = [ 
//     { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
//     { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
//     { name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
//     { name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
//     { name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
//     { name: 'June', revenue: 19, expenses: 18, quarter: 2 },
//     { name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
//     { name: 'August', revenue: 19, expenses: 20, quarter: 3 },
//     { name: 'September', revenue: 21, expenses: 23, quarter: 3 },
//     { name: 'October', revenue: 21, expenses: 20, quarter: 4 },
//     { name: 'November', revenue: 21, expenses: 20, quarter: 4 },
//     { name: 'December', revenue: 18, expenses: 20, quarter: 4 } 
// ]

// // After completing the exercise, try changing this number to 2:
// let selectedQuarter = 1; 

// let selectedMonths = allMonths.filter(function(month){
//     return month.quarter === selectedQuarter
// })

// console.log(selectedMonths)


// Using all 3 array iterators at once 


// let quarterDropdown = document.querySelector('.quarter-dropdown')

// quarterDropdown.addEventListener('change', function(e){
//     let quarter = parseInt(e.target.value)
//     displayQuarter(quarter)
// })

// function displayQuarter(quarter){
//     let selectedMonths = getSelectedMonths(quarter)
//     let profitLabels = getProfitLabels(selectedMonths)
//     renderLabels(profitLabels)
// }

// function getSelectedMonths(quarter){
//     return allMonths.filter(function(month){
//         return month.quarter === quarter
//     })
// }

// function getProfitLabels(selectedMonths){
//     return selectedMonths.map(function(month){
//         return `${month.name}: ${month.revenue - month.expenses}`
//     })
// }

// function renderLabels(profitLabels){
//     let monthList = document.querySelector('.month-list')
//     monthList.innerHTML = '' // This empties the list before we append new items to it.
//     profitLabels.forEach(function(label){
//         let monthLi = document.createElement('li')
//         monthLi.textContent = label
//         monthList.append(monthLi)
//     })
// }

// let allMonths = [ 
//     { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
//     { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
//     { name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
//     { name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
//     { name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
//     { name: 'June', revenue: 19, expenses: 18, quarter: 2 },
//     { name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
//     { name: 'August', revenue: 19, expenses: 20, quarter: 3 },
//     { name: 'September', revenue: 21, expenses: 23, quarter: 3 },
//     { name: 'October', revenue: 21, expenses: 20, quarter: 4 },
//     { name: 'November', revenue: 21, expenses: 20, quarter: 4 },
//     { name: 'December', revenue: 18, expenses: 20, quarter: 4 } 
// ]

// displayQuarter(1)