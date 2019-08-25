'use strict';

var answers = 0;
function plus1(){
  answers++;
}

var userName = prompt('Hello. What is your name?');
console.log('The user name is, ' + userName);
alert('Hello, ' + userName + '.');

var userLikesToPlayAboutMe = prompt('I want to play a Guessing Game About Me. Do you want to play it with me, ' + userName + '?');
console.log('The user response is, ' + userLikesToPlayAboutMe);
if(userLikesToPlayAboutMe.toLowerCase() === 'yes'){
  alert('Alright, ' + userName + '. Let\'s start.');
} else {
  alert('Noooo! Let\'s give it a try ' + userName +', You will find it very interesting.');
}

for(var i = 0; i < 4; i++) {
  var userTriesMyName = prompt('My name is an english male name starting with \'Ja\'. Can you name it ' + userName +'?');

  function correct(){
    alert('Yees! You have got it easily ' + userName + '! Cool.');
    plus1();
    console.log('Added 1 to answers.');
  }
  function incorrect(){
    alert('Sorry, ' + userName + ', you got it wrong. Please try again.');
  }
  function logGuess(){
    console.log('On attempt ' + i + ' to guess my name, ' + userName + ' guessed ' + userTriesMyName);
  }
  
  if(userTriesMyName.toLowerCase() === 'james'){
    correct();
    logGuess();
    i = 4;
  } else if(i === 3){
    if(userTriesMyName != 'James' || userTriesMyName.toLowerCase() != 'james'){
      alert('Nope. You are totally wrong ' +userName + '! My name is James.');
      logGuess();
    }    
  } else {
    incorrect();
    logGuess();
  }
}

var userCountry = prompt('Which Country do you live in, ' + userName +'?');
console.log('The user country is, ' + userCountry)
if(userCountry.toLowerCase() === 'usa'){
  alert('Waaw! I live in USA too!!!');
} else {
  alert('Waaw. ' + userCountry + ' is great. I will visit one day. God willing!');
}

for(var i = 0; i < 4; i++){
  var countryComeFrom = prompt('I come from Africa, in a small country also known as \'Country of thousand hills\'. Can you guess it, ' + userName + '?');

  function correct(){
    alert('Waaw! You are genious, ' + userName + '! How did you come to find it out fast?');
    plus1();
    console.log('Added 1 to answers.');
  }
  function incorrect(){
    alert('Sorry, ' + userName + ', you got it wrong. Please try again.');
  }
  function logGuess(){
    console.log('On attempt ' + i + ' to guess my country, ' + userName + ' guessed ' + countryComeFrom)
  }

  if(countryComeFrom.toLowerCase() === 'rwanda'){
    correct();
    logGuess();
    i = 4;
  } else if(i === 3){
    if(countryComeFrom.toLowerCase() != 'rwanda'){
      alert('Wrong answer, ' + userName + '! I am from Rwanda.');
      logGuess();
    }
  } else {
    incorrect();
    logGuess();
  }
}


var iPlayGuitar = prompt('Do you think I play guitar?');
console.log('The user answer is, ' + iPlayGuitar);
if(iPlayGuitar.toLowerCase() === 'Yes'){
    alert('And Yees! You got it!');
    plus1();
    console.log('Added 1 to answers.');
  } else{
    alert('Well, I guess you didn\'t know, ' + userName + ', but playing guitar is one of my hobby!');
   } 


if(answers === 0){
  alert('Darn, you didn\'t guess any of my questions correct. ' + userName + ', you should really get to know me better! Come check out my \'About Me\' website!');
} else if(answers === 1){
  alert('Hey, ' + userName + ' you got one of two questions about me correct, not bad! You should come check out my \'About Me\' website!');
} else{
  alert(userName + ', you guessed both of my question correctly! You must already know me! You should check out my \'About Me\' website and learn even more!');
}

