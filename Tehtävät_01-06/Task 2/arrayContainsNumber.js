let numbers = [6,4,2,5,9,7,5,7,2];

let containNumber = (numbers, aNumber) => {
    if(numbers.includes(aNumber)){
        return document.getElementById("returnStatement").innerHTML = "Array contains the number " + aNumber + ".";
    }
    else{
        return document.getElementById("returnStatement").innerHTML = "Array does not contain the number " + aNumber + ".";
    }
};