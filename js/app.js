'use strict';

var userName = prompt('Hello. What is your name?');
console.log('The user name is, ' + userName)
alert('Hello, ' + userName + '.');

var userLikesToPlayAboutMe = prompt('I want to play a Guessing Game About Me. Do you want to play it with me, ' + userName + '?');
console.log('The user response is, ' + userLikesToPlayAboutMe)
if(userLikesToPlayAboutMe.toLowerCase() === 'yes'){
  alert('Alright, ' + userName + '. Let\'s start.');
} else {
  alert('Noooo! Let\'s give it a try ' + userName +', You will find it very interesting.');
}

var userTriesMyName = prompt('My name is an english male name starting with \'Ja\'. Can you name it ' + userName +'?');
console.log('The user response is, ' + userTriesMyName)
if(userTriesMyName.toLowerCase() === 'James'){
  alert('Yees! You have got it easily' + userName + '! Cool.');
} else {
  alert('Nope. You are totally wrong ' +userName + '! My name is James.');
}

var userCountry = prompt('Which Country do you live in, ' + userName +'?');
console.log('The user country is, ' + userCountry)
if(userCountry.toLowerCase() === 'usa'){
  alert('Waaw! I live in USA too!!!');
} else {
  alert('Waaw. Your country is great. I will visit one day. God willing!');
}

var countryComeFrom = prompt('I come from Africa, in a small country also known as \'Country of thousand hills\'. Can you guess it, ' + userName +'?');
console.log('The user answer is, ' + countryComeFrom)
if(countryComeFrom.toLowerCase() === 'rwanda'){
  alert('Waaw! You are genious, ' + userName + '! How did you come to find it out fast?');
} else {
  alert('Wrong answer, ' + userName + '! I am from Rwanda.');
}

var userWantGoAhead = prompt('This site is about Coding. Do you want to go ahead and learn more?');
console.log('The user willing to go ahead is , ' + userWantGoAhead)
if(userWantGoAhead.toLowerCase() === 'yes'){
  alert('Alright, ' + userName +'. Let\'s go ahead. Click Ok.');
} else {
  alert('It is okey, ' + userName +'. Take a tour on my website maybe you will change your mind.');
}
