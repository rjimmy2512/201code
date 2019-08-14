'use strict';

var userName = prompt('Hi. May I know Your Name, Please?')
if(userName.toLowerCase() === ''){
alert('Hello,' +userName);
}

var userType = prompt('Hi. Are You not a Robot?');
if(userType.toLowerCase() === 'no'){
  alert('Welcome to My Website.');
} else {
  alert('Nooo! You are not meant to be Here!!');
}
