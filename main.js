const messageParagraph = document.getElementById("message");
const messageName = document.getElementById("message-name");
const messageSurname = document.getElementById("message-surname");
const messageEmail = document.getElementById("message-email");

document.getElementById("formForInfo").addEventListener("submit", validation);

function validation() {
    let name = document.forms["formForInfo"]["name"].value;
    let surname = document.forms["formForInfo"]["surname"].value;
    let email = document.forms["formForInfo"]["email"].value;
    messageParagraph.innerHTML = "";
    messageName.innerHTML = "";
    messageSurname.innerHTML = "";
    messageEmail.innerHTML = "";

    if(name === "" || surname === "" || email === "")
    {
        if (name === "") 
        {
            messageName.innerHTML += "Name must be filled out";
            messageName.style.color="red";
        }
        if (surname === "")
        {
            messageSurname.innerHTML += "Surname must be filled out";
            messageSurname.style.color="red";
        }
        if (email === "")
        {
            messageEmail.innerHTML += "Email must be filled out";
            messageEmail.style.color="red";
        }
    }
    else
    {
        let message = "Ad: " + name + "<br>" +
        "Soyad: " + surname + "<br>" +
        "Email: " + email + "<br>";

        messageParagraph.style.color="green";
        messageParagraph.innerHTML += message;
    }
    return false;
}