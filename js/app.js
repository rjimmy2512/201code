'use strict';

var userType = prompt('Hi. Are You not a Robot?');
if(userType.toLowerCase() === 'no'){
  alert('Welcome to My Website.');
} else {
  alert('Noooo! You were not meant to be Here!!');
}

var userGender = prompt('Are You a Male?');
if(userGender.toLowerCase() === 'yes'){
  alert('I am a Male, Too.');
} else {
  alert('That\'s cool. I am a Male!!');
}

var userCountry = prompt('Which Country do you live in?');
if(userCountry.toLowerCase() === 'usa'){
  alert('Waaw! I live in USA too!!!');
} else {
  alert('Waaw. Your country is great. I will visit one day!');
}

var userLikesCoding = prompt('Do you like Coding?');
if(userLikesCoding.toLowerCase() === 'yes'){
  alert('Waaw! It is My Hoobby!!!');
} else {
  alert('Try it! It is very interesting!!');
}

var userWannaGoAhead = prompt('This site is about Coding. Do you want to go ahead and learn more?');
if(userWannaGoAhead.toLowerCase() === 'yes'){
  alert('Alright. Go ahead and Click Ok.');
} else {
  alert('It is okey. Maybe we will meet again when you change your mind.');
}
