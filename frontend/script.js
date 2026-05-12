const button = document.querySelector("button");

button.addEventListener("click", function () {

    const name = document.querySelector(
        'input[type="text"]'
    ).value;

    const email = document.querySelector(
        'input[type="email"]'
    ).value;

    if(name === "" || email === "") {
        alert("Please fill all fields");
    }
    else {
        alert(
            "Registration Successful\n" +
            "Name: " + name +
            "\nEmail: " + email
        );
    }

});
