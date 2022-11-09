function IsNumberEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

for(i = 20; i++; i < 200){
    if(IsNumberEven(i)){
        console.log(i, "even");
    }
    if(i == 200){
        break;
    }
}