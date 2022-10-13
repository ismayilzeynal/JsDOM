const messageParagraph = document.getElementById("message")

function validation() {
    let name = document.forms["formForInfo"]["name"].value;
    let surname = document.forms["formForInfo"]["surname"].value;
    let email = document.forms["formForInfo"]["email"].value;
    messageParagraph.innerHTML = "";

    if(name === "" || surname === "" || email === "")
    {
        messageParagraph.style.color="red";
        if (name === "") 
        messageParagraph.innerHTML += "Name must be filled out <br>";
        if (surname === "")
        messageParagraph.innerHTML += "Surname must be filled out <br>";
        if (email === "")
        messageParagraph.innerHTML += "email must be filled out <br>";

        return false;
    }
    else
    {
        let message = "Ad: " + name + "<br>" +
        "Soyad: " + surname + "<br>" +
        "Email: " + email + "<br>";

        messageParagraph.style.color="green";
        messageParagraph.innerHTML += message;
        return false;
    }

}