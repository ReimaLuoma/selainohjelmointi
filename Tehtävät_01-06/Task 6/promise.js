const getMembers = count => {

    const apiUrl = `https://api.randomuser.me/?nat=FI&results=${count}`;

    let promise = new Promise(fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(err => console.log(err))
    );
}

var displayFiveFinnishFakeMembers = () => {

//We’ll implement this!

}

/*

function initiateApplication() {

    var requireBtn = document.querySelector('#b1');

    requireBtn.addEventListener('click', displayFiveFinnishFakeMembers);

}


window.addEventListener('load', () => {

    initiateApplication();

});
*/