pragma solidity ^0.8.6;

 contract Inbox {
     string public message;

     constructor(string initialMessage) public {
         message = initialMessage;
     }

     function setMessage(string newMessage) public {
         message = newMessage;
     }
 } 