const CONTACT_FORM = document.getElementById("contact-form")
const NAME = document.getElementById("name")
const EMAIL = document.getElementById("email")
const SUBJECT = document.getElementById("subject")
const MESSAGE = document.getElementById("message")
const NAME_ERR = document.getElementById("name-err")
const EMAIL_ERR = document.getElementById("email-err")
const SUBJECT_ERR = document.getElementById("subject-err")
const MESSAGE_ERR = document.getElementById("message-err")

$(CONTACT_FORM).submit(e => {
    let inputs = [NAME, SUBJECT, MESSAGE]
    let errors = [NAME_ERR, SUBJECT_ERR, MESSAGE_ERR]

    inputs.forEach((input, i) => {
        if (input.value === "" || input.value === null) {
            e.preventDefault()
            errors[i].innerText = "Please fill in this field"
        } else {
            errors[i].innerText = ""
        }
    })

    if (EMAIL.value === "" || EMAIL.value === null) {
        e.preventDefault()
        EMAIL_ERR.innerText = "Please fill in this field"
    } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(EMAIL.value)) {
        e.preventDefault()
        EMAIL_ERR.innerText = "The format is not valid"
    } else {
        EMAIL_ERR.innerText = ""
    }
})