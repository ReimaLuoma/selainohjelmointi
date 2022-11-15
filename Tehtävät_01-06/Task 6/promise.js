const getMembers = count => //XXXXXXXXXXXX

    

        const apiUrl = `https://api.randomuser.me/?nat=FI&results=${count}`;

        const request = new XMLHttpRequest();

        request.open('GET', apiUrl);

        request.onload = () => (request.status === 200) ?

    //XXXXXXX

        request.onerror = //XXXXXXXXXXXXXXXXX

        request.send();

    })

    var displayFiveFinnishFakeMembers = () => {

    //We’ll implement this!

    }

    

    function initiateApplication() {

        var requireBtn = document.querySelector('#b1');

        requireBtn.addEventListener('click', displayFiveFinnishFakeMembers);

    }
    

    window.addEventListener('load', () => {

        initiateApplication();

    });