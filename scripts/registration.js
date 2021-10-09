
function validate() {
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    email = document.getElementById("email").value;
    emailResult = checkEmail(email);
    confirmEmail = document.getElementById("confirmEmail").value;
    phone = document.getElementById("phone").value;
    phoneNumeric = IsNumeric(phone);
    password = document.getElementById("password").value;
    age = document.getElementById("age").value;
    student1Checked = document.getElementById("studentStatus1").checked;
    student2Checked = document.getElementById("studentStatus2").checked;
    employment1Checked = document.getElementById("employmentStatus1").checked;
    employment2Checked = document.getElementById("employmentStatus2").checked;
    studentValue = "No";
    employmentValue = "No";
    fee = 10 * 12;


    //checking for empty inputs and displaying error 
    if (firstname == "") {
        hideAllErrors();
        document.getElementById("firstnameError").style.display = "inline";
        document.getElementById("firstname").select();
        document.getElementById("firstname").focus();
        return false;
    }

    else if (lastname == "") {
        hideAllErrors();
        document.getElementById("lastnameError").style.display = "inline";
        document.getElementById("lastname").select();
        document.getElementById("lastname").focus();
        return false;
    }

    else if ((email == "") || (emailResult == false)) {
        hideAllErrors();
        document.getElementById("emailError").style.display = "inline";
        document.getElementById("email").select();
        document.getElementById("email").focus();
        return false;
    }

    else if ((confirmEmail == "") || (confirmEmail != email)) {
        hideAllErrors();
        document.getElementById("confirmEmailError").style.display = "inline";
        document.getElementById("confirmEmail").select();
        document.getElementById("confirmEmail").focus();
        return false;
    }

    else if ((phone == "") || (phoneNumeric == false)) {
        hideAllErrors();
        document.getElementById("phoneError").style.display = "inline";
        document.getElementById("phone").select();
        document.getElementById("phone").focus();
        return false;
    }

    else if ((age == "0") || (age < 16)) {

        hideAllErrors();
        document.getElementById("ageError").style.display = "inline";
        return false;
    }

    else if ((password == "") || (password.length < 8) || (password.length > 20)) {
        hideAllErrors();
        document.getElementById("passwordError").style.display = "inline";
        document.getElementById("password").select();
        document.getElementById("password").focus();
        return false;
    }

    else if ((student1Checked == false) && (student2Checked == false)) {
        hideAllErrors();
        document.getElementById("studentError").style.display = "inline";
        return false;
    }

    else if ((employment1Checked == false) && (employment2Checked == false)) {
        hideAllErrors();
        document.getElementById("employmentError").style.display = "inline";
        return false;
    }
    if (student1Checked == true) {
        studentValue = "Yes";
    }
    if (employment1Checked == true) {
        employmentValue = "Yes";
    }
   

    fee = calculateAnnualFee();
    document.getElementById("fee").innerHTML = "Annual fee: $" + fee;
    
    
    
    alert("First Name: " + firstname + "\nLastname: " + lastname + "\nEmail: " + email + "\nPhone Number: " + phone + "\nPassword: "
        + password + "\nAge: " + age + "\nStudent Status: " + studentValue + "\nEmployment Status: " + employmentValue + "\nAnnual fee: $" + fee);
    return true;
}

function calculateAnnualFee(){
    feeMonthly= 10;
    discount = 0;
    discountPercentage = 0;
    age = document.getElementById("age").value;
    if(16<=age && age <=20){
        discountPercentage+=10;
    }
    if(student1Checked == true){
        discountPercentage+=5;
    }
    if(employment2Checked){
        discountPercentage+=40;
    }
    discount = (10 / 100) * discountPercentage;
    annualFee = (feeMonthly - discount) * 12;


    return annualFee;
}

//checks via reg ex if age and phone numbers are numbers
function IsNumeric(numstr) {
    mystring = numstr;
    if (mystring.match(/^\+614\d{8}$/)) {

        return true;
    } else {
        return false;
    }
}

//checks if email is in proper email format
function checkEmail(inputvalue) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if (pattern.test(inputvalue)) {
        return true;
    } else {
        return false;
    }

}

function hideAllErrors() {
    document.getElementById("firstnameError").style.display = "none";
    document.getElementById("lastnameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("confirmEmailError").style.display = "none";
    document.getElementById("phoneError").style.display = "none";
    document.getElementById("ageError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("studentError").style.display = "none";
    document.getElementById("employmentError").style.display = "none";
}



function showAge(x) {
    document.getElementById("ageValue").innerHTML = x.value;
}

document.getElementById("age").oninput = "ageValue.innerHTML=this.value"

function bigImg(pic) {

    pic.style.height = "300px";
    pic.style.width = "300px";
}
function normalImg(pic) {
    pic.style.height = "100px";
    pic.style.width = "100px";

}