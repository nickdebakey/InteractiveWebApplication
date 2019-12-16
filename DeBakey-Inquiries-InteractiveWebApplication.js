$(document).ready(function () {
    $("#datepicker").datepicker({
        showButtonPanel: true,
        minDate: new Date(),
        changeMonth: true,
        changeYear: true
    });

});

var $ = function(id) { return document.getElementById(id); };
const content = $("message");
var error = $("error");
var date = $("datepicker");
var form = document.forms[0];
let formNum = 0;

form.addEventListener('submit', (e) => {
    let message = [];

    if (formNum === 0) {
        for (let i = 0; i < form.length; i++) {
            if (form[i].checked) {
                formNum = 1;
            }
        }
        if (formNum === 0) {
            message.push("Please select a package.")
        }
    }

    if (content.value.length <= 140) {
        message.push("Your message is too short.");
    }

    if (date.value.length === 0) {
        message.push("Please pick a date.");
    }

    if (message.length > 0) {
        e.preventDefault();
        error.innerHTML = message.join("<br />");
        error.style.padding = "10px";
        error.scrollIntoView();
    }
});