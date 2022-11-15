let size = 16;
var object = document.getElementsByTagName("p");

window.addEventListener("keydown", (event) => {
    handleSize(event);
}, false)

function handleSize(event){
    if(event.key == "ArrowUp"){
        //inflate 10 %
        event.preventDefault();
        size *= 1.1;
        object[0].style.fontSize = size + "px";

        if(size > 60){
            object[0].innerHTML = "💥";
            object[0].style.fontSize = "60px";
            window.removeEventListener("keydown", handleSize(event) );
        }
    }

    if(event.key == "ArrowDown"){
        //deflate 10 %
        event.preventDefault();
        size *= 0.9;
        object[0].style.fontSize = size + "px";
    }
}