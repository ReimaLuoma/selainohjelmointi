const url = "https://eloquentjavascript.net/author";

window.addEventListener("load", event => {

    fetch(url, {headers: {Accept: "text/plain"} })
    .then(response => {
        console.log(response);
    });

    fetch(url, {headers: {Accept: "text/html"} })
    .then(response => {
        console.log(response);
    });

    fetch(url, {headers: {Accept: "application/json"} })
    .then(response => {
        console.log(response);
    });

    fetch(url, {headers: {Accept: "application/rainbows+unicorns"} })
    .then(response => {
        console.log(response.status); 
        //--> 406
    });
})