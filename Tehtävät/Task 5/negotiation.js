const url = "https://eloquentjavascript.net/author";

window.addEventListener("load", event => {

    fetch(url, {Accept: "text/*, application/json"})
    .then(response => {
        console.log(response);
        for (let [key, value] of response.headers){
            console.log(`${key} = ${value}`);
        }
    });
})