'use strict';

var userName = prompt('Hi. May I know Your Name, Please?');
log.console('The user name is,' + userName + );
alert('Hello,' +userName);

var userType = prompt('Hi. Are You not a Robot?');
if(userType.toLowerCase() === 'no'){
  alert('Welcome to My Website.');
} else {
  alert('Nooo! You are not meant to be Here!!');
}

