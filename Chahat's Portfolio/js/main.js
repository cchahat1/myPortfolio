function collapseNav() {
    let toggler = document.getElementsByClassName("navbar-toggler");
    let list = document.getElementsByClassName("navbar-collapse");

    // Check if elements were found
    if (toggler.length > 0 && list.length > 0) {
        // Loop through the elements and remove the class
        for (let i = 0; i < toggler.length; i++) {
            toggler[i].classList.add("collapsed");
        }
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("show");
        }

    }
};

const form = document.querySelector(".form-btn");

function validateForm() {
    // Reset error messages
    document.getElementById('fnameError').textContent = '';
    document.getElementById('lnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('msgError').textContent = '';

    // Get form values
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var email = document.getElementById('inputEmail4').value;
    var msg = document.getElementById('textarea').value;

    let isValid = true;

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        isValid = false;
    }

    if (fname === '') {
        document.getElementById('fnameError').textContent = 'First name is required';
        isValid = false;
    }

    if (lname === '') {
        document.getElementById('lnameError').textContent = 'Last name is required';
        isValid = false;
    }

    if (msg === '') {
        document.getElementById('msgError').textContent = 'Message is required';
        isValid = false;
    }

    return isValid;

};



function sendEmail() {
    var fname = document.getElementById('firstName').value;
var lname = document.getElementById('lastName').value;
var email = document.getElementById('inputEmail4').value;
var msg = document.getElementById('textarea').value;
const bMsg=`Full Name: ${fname + lname} <br> Email: ${email} <br> Message:${msg}`
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "chahatchahat259@gmail.com",
            Password: "AD02CE5D8B8556A48150AC675F82910957A0",
            To: 'chahatchahat259@gmail.com',
            From: 'chahatchahat259@gmail.com',
            Subject: "New Message",
            Body: bMsg,
        })
            .then(function (message) {
                alert("Mail sent successfully")
            });
    }
;

form.addEventListener("click", (e) => {
    console.log(document.getElementById('firstName').value)
    e.preventDefault();
    if(validateForm() === true)
    {
        sendEmail()
    }
})
