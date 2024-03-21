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


// ROCK PAPER SCISSORS ACTIVITY STARTS HERE


// let userSelection = prompt("rock, paper or scissors?"); 
// let computerSelection = getComputerSelection();                       


// function getComputerSelection() {
// let randomNumber = Math.floor(Math.random() *3) +1;
// if (randomNumber === 1) {
//   return 'rock';
// } else if (randomNumber === 2) {
//   return'paper';
// } else if (randomNumber === 3) {
//   return'scissors';
// } else {
//   console.log('Invalid selection');
//   return null;
// }
// }

// let compare=function(userSelection,computerSelection){
//     if(userSelection === computerSelection) {
//         return "It's a tie!";
//     } else if (
//         (userSelection === 'rock' && computerSelection === 'scissors') ||
//         (userSelection === 'paper' && computerSelection === 'rock') ||
//         (userSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//         return "You win!";
//     } else {
//         return "Computer wins!";
//     }
    
// }
// console.log(compare(userSelection,computerSelection));


// ROCK PAPER SCISSORS ACTIVITY ENDS HERE


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


// ---------------------------------------------------------------------------------------------------------------------------------------------


// COUNTING TRAINS ACTIVITY STARTS HERE

// let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
// let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
// let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

// let totalValue = 0

// for(let i = 0; i < newInventoryYearBuilt.length; i++){
//     totalValue += (2022 - newInventoryYearBuilt[i])
// }

// let averageYear = (totalValue / newInventoryYearBuilt.length)
// console.log('Average age is ' + averageYear + ' years.')





// while loop that iterates newInventroyCarModels
// let i = 0;
// let typeS1Count = 0;
// let lorrieCount = 0;


// Uncomment code below to activate while loop
// while(i < newInventoryCarModels.length) {
//     if(newInventoryCarModels[i] === 'S1') {
//         typeS1Count++;
//     }
//     i++
// }
//     console.log(`Number of S1 cars is: ${typeS1Count}`);

// comment out code below to deactivate for loop
// for(let i = 0; i < newInventoryCarModels.length; i++) {
//         if(newInventoryCarTypes[i] === 'Lorrie') {
//             lorrieCount++;
//         } 
//     }

//     console.log(`Number of S1 cars is: ${typeS1Count}`);
//     console.log(`Number of Lorrie cars is: ${lorrieCount}`);

    

// COUNTING TRAINS ACTIVITY ENDS HERE


// ---------------------------------------------------------------------------------------------------------------------------------------------


// Array Iterators callback functions in action STARTS HERE

//PART 1 STARTS -----------------------------------------------------------------------------------------------

// og code to edit
// let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
// let monthList = document.querySelector('.month-list')

// for(let i = 0; i < monthlyProfitLabels.length; i++){
//     let label = monthlyProfitLabels[i]
//     let monthLi = document.createElement('li')
//     monthLi.textContent = label
//     monthList.append(monthLi)
// }
//og code to edit ends

//new code 


// let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
// let monthList = document.querySelector('.month-list')

// monthlyProfitLabels.forEach(function(label){
//     let monthLi = document.createElement('li')
//     monthLi.textContent = label
//     monthList.append(monthLi)
// });


//new code ends
// PART 1 ENDS------------------------------------------------------------------------------------------------

// PART 2 STARTS

// let selectedMonths = [ 
//     { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
//     { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
//     { name: 'March', revenue: 15, expenses: 3, quarter: 1 } 
// ]

// let monthlyProfitLabels = selectedMonths.map(function(month) {
//     let label = `${month.name}: ${month.revenue - month.expenses}`
//     return label
//     });

//     console.log(monthlyProfitLabels)

// for(let i = 0; i < selectedMonths.length; i++){
//     let month = selectedMonths[i]
//     let label = `${month.name}: ${month.revenue - month.expenses}`
//     monthlyProfitLabels.push(label)
// }

// console.log(monthlyProfitLabels)


// PART 2 ENDS

// Array Iterators callback functions in action ENDS HERE

//------------------------------------------------------------------------------------------------------------

// PART 3 STARTS 

//OG CODE 
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

// let selectedQuarter = 1
// let selectedMonths = []
// for(let i = 0; i < allMonths.length; i++){
//     let month = allMonths[i]
//     if(month.quarter === selectedQuarter){
//         selectedMonths.push(month)
//     }
// }

// console.log(selectedMonths)

//NEW CODE STARTS 
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

// let selectedQuarter = 1
// let selectedMonths = allMonths.filter(function(month){
//     return month.quarter === selectedQuarter
// })

// console.log(selectedMonths)
// PART 3 ENDS

//------------------------------------------------------------------------------------------------------------


// PART 4 STARTS HERE 


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


// PART 4 ENDS HERE

// --------------------------------------------------------------------------------------------------------------


// Activity (js-4-array-iterator-practice) starts here

// question  1
// let users = [
//     { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
//     { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
//     { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
//     { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
// ]


// function getFirstNames(users){
//     let firstName = users.map(function(user){
//         return user.firstName;
// });
//     return firstName;
// }
    
//     console.log(getFirstNames(users))
// end question 1

//question 2
// let users = [
//     { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
//     { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
//     { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
//     { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
// ]

// function getFullNames(users){
//     let fullNames = users.map(function(user){
//         return user.firstName + ' ' + user.lastName;
//     });
//     return fullNames;
// }
// console.log(getFullNames(users));

//end question 2


//question 3 start

// let users = [
//     { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
//     { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
//     { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
//     { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
// ]

// function getTeenagers(users){
//     let age = users.filter(function(teenager){
//         if(teenager.age >= 13 && teenager.age <= 18)
//             return teenager;
//     });
//     return age;
// }

// console.log(getTeenagers(users))


//question 3 ends


// Question 4 starts 

// let users = [
//     { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
//     { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
//     { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
//     { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
// ]

// function getChildren(users){
//     let age = users.filter(function(children){
//         if(children.age <= 13)
//         return children
//     });
//     return age
// }

// console.log(getChildren(users));


// Question 4 ends

// Question 5 starts 

// let users = [
//     { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
//     { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
//     { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
//     { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
// ]
// function getAges(users){
//     let ages = users.map(function(user){
//         return user.age
// });
//     return ages
// }

// console.log(getAges(users))

// Question 5 ends


// Question 6 starts ASK FOR HELP

// let users = [
//     { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
//     { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
//     { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
//     { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
// ]

// function getOldest(users){
//     let oldestUser = users[0]; 
//     users.forEach(function(user){
//         if (user.age > oldestUser.age) {
//             oldestUser = user;
//         }
//     });
//     return oldestUser;
// }

// console.log(getOldest(users));



// Question 6 ends

// Question 7 starts 

// function getFavoriteColorList(users){
// 	let colors = users.map(function(userColor){
//     	return userColor
//     });
//   return colors
// }

// console.log(getFavoriteColorList(users))

// Question 7 ends

// Question 8 starts 



// Question 8 ends LEFT OFF HERE LEFT OFF HERE
// let users = [
//     { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
//     { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
//     { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
//     { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
// ]

// function getInitials(users) {
//     let initials = [];
//     for (let user of users) {
//         if (user.firstName.length > 0 && user.lastName.length > 0) {
//             initials.push(`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`);
//         }
//     }
//     return initials;
// }

// let userInitials = getInitials(users);
// for (let initial of userInitials) {
//     console.log(`This person's initial is: '${initial}'`);
// }



/* Almost working code 

function getInitials(users){
    let initials = users.map(function(userInitials){
        if(getInitials.length <= 1)
        return userInitials
    });
    return initials
}

console.log(getInitials(users))*/

// Activity (js-4-array-iterator-practice) ends here

//-------------------------------------------------------------------------------------------------------------------------
// Activity (js-4-using-the-this-keyword) STARTS HERE

//Question 1 starts ask for help on this one 

// function forEach(array, callback) {
//     array.forEach(callback);
// }

// forEach([1, 2, 3], function(number) {
//     console.log('iteration', number);
// });

// Question 1 ends

// Question 2 starts 

// let rectangle = {
//     width: 100,
//     height: 100, 
//     area: function(){
//         return this.width * this.height;
//     }
// }

// console.log(rectangle.area())

//question 2 ends

// let dog = {
//     sound: 'Arrrf!',
//     playSound: function() {
//         console.log(this.sound)
//     }
// }

// let cat = {
//     sound: 'Meoowww!',
//     playsound: dog.playSound
// }

// cat.playSound()

//Activity (js-4-using-the-this-keyword) ENDS HERE


// CREATING AN OBJECT EXAMPLE VERY IMPORTANT 

// this will be the car class
class Car {
    constructor (make, model, color, driver = 'Unknown') {
        this.make = make;
        this.model = model;
        this.color = color;
        this.driver = driver;
        
    }
    greet() {
        console.log(`Hello, ${this.driver}!`)
    }
}

// this keyword? YES
// return keyword? 
// parameter necessary? NOPE

let newJag = new Car('Jaguar', 'Turbo XE', 'Black', 'Caleb');
let otherNewJag = new Car('Audi', 'A8', 'Midnight Green');
let otherotherNewJag = new Car('Mazda', 'Speed 3', 'Blue Pearl Micah');
newJag.greet();

console.log(newJag);
console.log(otherNewJag);
console.log(otherotherNewJag);
console.log(typeof(newJag));

// OBJECT EXAMPLE
// TWO OBJECTS EVEN IF THEY ARE COMPLETELY IDENTICAL CAN NEVER === ONE ANOTHER TO BE TRUE

let demoObject = {
    make: 'Jaguar', 
    model: 'Turbo Xe',
    color: 'Black'
}

console.log(demoObject);
console.log(typeof(demoObject));

console.log(newJag === demoObject); 
// should always return false as a single object is different from a class object
// this would have to be duplicated over and over and over again this is  why class is used 