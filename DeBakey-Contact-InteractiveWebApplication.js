var $ = function(id) { return document.getElementById(id); };
const subject = $("subject");
const content = $("message");
var error = $("error");
var form = $("myForm");

form.addEventListener('submit', (e) => {
    let message = [];

    if (subject.value.length <= 6) {
        message.push("The subject line is too short.");
    }

    if (content.value.length <= 140) {
        message.push("Your message is too short.");
    }

    if (message.length > 0) {
        e.preventDefault();
        error.innerHTML = message.join("<br />");
        error.style.padding = "10px";
    }
});