function FizzBuzz(number){
    if(IsDivisibleBy(number, 3) && IsDivisibleBy(number, 5)){
        console.log(number, "FizzBuzz");
    }
    else {
        if(IsDivisibleBy(number, 3)){
            console.log(number, "Fizz");
        }
        if(IsDivisibleBy(number, 5)){
            console.log(number, "Buzz");
        }
    }
}

function IsDivisibleBy(number, divNumber){
    if(number %divNumber == 0){
        return true;
    }
    return false;
}

for(i = 1; i++; i<100){
    FizzBuzz(i);

    if(i == 100){
        break;
    }
}