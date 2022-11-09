let deposits = [ 12.11, 34.22, 31.95, 50.00, 22.50, 200.00 ];

function SumOfNumbersInArray(numbers){

    let sum = 0.00;

    for(i = 0; ++i; i < numbers.length){ // i++ return before increment, ++i return after increment : i++ will not work in this instance
        sum += numbers[i];
        console.log("Summa: ", sum);

        if(sum >= 100.00){
            break;
        }
    }
}

SumOfNumbersInArray(deposits);