let messageID = 1;

function submitMessage(message){

    //create new element
    let newElement = document.createElement("p");
    newElement.id = messageID;
    messageID++;
    newElement.innerHTML = message;

    //append element to parent element
    let parentElement = document.getElementById("messageBoard");
    parentElement.appendChild(newElement);
}