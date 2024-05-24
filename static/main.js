
function contact() {
    debugger
    const nameInput = document.getElementById("name_input");
    const numPeopleInput = document.getElementById("people_input");
    // const dateInput = document.getElementById("date_input");
    const messageInput = document.getElementById("message_input");

    //console.log("sending!!!!!")
    // Create object with user input
    const userData = {
        name: nameInput.value,
        people: numPeopleInput.value,
        //date: dateInput.value,
        message: messageInput.value
    };

    // Send data to server as POST request
    fetch('http://127.0.0.1/contact_submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    }).then(r => {
        alert(r.text());
    });
}

// function teamSelect() {
//     scores = [Atlanta, Boston, Dallas, Houston, Kansas_City, Los_Angeles, Miami, New_Jersey, Philadelphia, San_Francisco, Seattle, Mexico_City, Guadalajara, Monterrey,Toronto, Vancouver]
//     for (i in scores) {
//         console.log(scores[i]);
//     }
// }
