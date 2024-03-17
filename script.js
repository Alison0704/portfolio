const form = document.querySelector ('form');
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodymessage = `Full Name: ${fullname.value} <br> Email: ${email.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "alison.emilien43@gmail.com",
        Password : "965B160469B00D15E6A2D58A1C60E04D0397",
        To : 'alison.emilien43@gmail.com',
        From :  "alison.emilien43@gmail.com",
        Subject : subject.value,
        Body : bodymessage
    }).then(
      message => {
        if (message === "OK") {
            Swal.fire({
                title: "Thank you!",
                text: "Message sent!",
                icon: "success"
              });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});