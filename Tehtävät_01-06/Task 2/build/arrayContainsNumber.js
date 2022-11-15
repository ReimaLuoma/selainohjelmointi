"use strict";

var containNumber = function(numbers, aNumber) {

  if(Array.prototype.indexOf.call(numbers, parseInt(aNumber)) != -1){
    return document.getElementById("returnStatement").innerHTML = "Array does contain the number " + aNumber + ".";
  } else {
    return document.getElementById("returnStatement").innerHTML = "Array does not contain the number " + aNumber + ".";
  }

};