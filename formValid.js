function validateForm() {
    const fname = document.forms["myForm"]["firstName"].value;
    const lname = document.forms["myForm"]["lastName"].value;
    const email = document.forms["myForm"]["email"].value;
    if (fname == "" || lname =="") {
        alert("Name must be filled out");
        return false;
    } else if (email == "") {
        alert("Email must be filled out");
        return false;
    }
}