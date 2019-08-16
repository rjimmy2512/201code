'use strict';

var userName = prompt('Hello. What is your name?');
console.log('The user name is, ' + userName);
alert('Hello, ' + userName + '.');


var userType = prompt('Hi. Are You not a Robot, ' + userName + '?');
console.log('The user type is, ' + userType);
if(userType.toLowerCase() === 'no'){
  alert('Welcome to My Website, ' + userName + '.');
} else {
  alert('Noooo! You were not meant to be Here, ' + userName +'!!');
}

var userGender = prompt('Are You a Male , ' + userName +'?');
console.log('The user gender is, ' + userGender);
if(userGender.toLowerCase() === 'yes'){
  alert('I am a Male, Too.');
} else {
  alert('That\'s cool. I am a Male!!');
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

