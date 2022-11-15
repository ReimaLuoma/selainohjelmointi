let convertTimeToMinuteFormat = (givenTime) => {

    let converted_minutes = 0;
    let converted_seconds = 0;

    if(givenTime.indexOf(",") != -1){
        converted_minutes = givenTime.substring(0, givenTime.indexOf(","));
        converted_seconds = givenTime.substring(givenTime.indexOf(",")+1);
    }

    if(givenTime.indexOf(".") != -1){
        converted_minutes = givenTime.substring(0, givenTime.indexOf("."));
        converted_seconds = givenTime.substring(givenTime.indexOf(".") + 1);
    }

    converted_seconds = parseInt(converted_seconds)/100*60;

    if(converted_seconds.toString().indexOf(".")){
        converted_seconds = Math.round(converted_seconds);
    }

    console.log(converted_minutes + ":" + converted_seconds.toString().padStart(2,0));
    let result = converted_minutes + ":" + converted_seconds.toString().padStart(2,0);

    return document.getElementById("returnStatement").innerHTML = givenTime + " hours is in hours and minutes equal to " + result;

}