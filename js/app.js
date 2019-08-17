'use strict';

var userName = prompt('Hello. What is your name?');
console.log('The user name is, ' + userName);
alert('Hello, ' + userName + '.');


var userLikesToPlayAboutMe = prompt('I want to play a Guessing Game About Me. Do you want to play it with me, ' + userName + '?');
console.log('The user response is, ' + userLikesToPlayAboutMe);
if(userType.toLowerCase() === 'yes'){
  alert('ALright, ' + userName + '. Let\'s do it.');
} else {
  alert('Noooo! Let\'s do some try ' + userName +', It is interesting.');
}

var userTriesMyName = ['James', 'Jacob', 'Jack', 'Jason'];
prompt('Question 1: My name is an english male name starting with \'Ja\'. Could you name it ' + userName +'?');
console.log('The user response is, ' + userTriesMyName);
if(userTriesMyName.toLowerCase() === 'James'){
  alert('Yeah! You have easly got it!')
}else if (userTriesMyName.toLowerCase() === ['Jacob', 'Jack', 'Jason']){
  alert('You are too close, ' + userName);
} else {
  alert('Nope. Try again, ' +userName);
}

var userCountry = prompt('Which Country do you live in, ' + userName +'?');
console.log('The user country is, ' + userCountry);
if(userCountry.toLowerCase() === 'usa'){
  alert('Waaw! I live in USA too!!!');
} else {
  alert('Waaw. Your country is great. I will visit one day. God willing!');
}

var userLikesCoding = prompt('Do you like Coding, ' + userName +'?');
console.log('The user choice is, ' + userLikesCoding);
if(userLikesCoding.toLowerCase() === 'yes'){
  alert('Waaw! It is My Hoobby!!!');
} else {
  alert('Try it! It is very interesting!!');
}

var userWannaGoAhead = prompt('This site is about Coding. Do you want to go ahead and learn more?');
console.log('The user will to go ahead is , ' + userWannaGoAhead);
if(userWannaGoAhead.toLowerCase() === 'yes'){
  alert('Alright, ' + userName +'. Let\'s go ahead. Click Ok.');
} else {
  alert('It is okey, ' + userName +'. Take a tour on my website maybe you can change your mind. Click Ok.');
}

