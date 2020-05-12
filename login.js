const REG_FORM = document.getElementById("reg-form")
const REG_EMAIL = document.getElementById("reg-email")
const REG_PASS = document.getElementById("reg-password")
const REPEAT_PASS = document.getElementById("rep-password")
const SELECT_PROVINCE = document.getElementById("select-province")
const REG_EMAIL_ERR = document.getElementById("reg-email-err")
const REG_PASS_ERR = document.getElementById("reg-pass-err")
const REPEAT_PASS_ERR = document.getElementById("repeat-pass-err")
const SELECT_PROVINCE_ERR = document.getElementById("select-province-err")

$(REG_FORM).submit(e => {
    // ********** EMAIL **********
    if (REG_EMAIL.value === "" || REG_EMAIL.value === null) {
        e.preventDefault()
        REG_EMAIL_ERR.innerText = "Please fill in this field"
    } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(REG_EMAIL.value)) {
        e.preventDefault()
        REG_EMAIL_ERR.innerText = "The format is not valid"
    } else {
        REG_EMAIL_ERR.innerText = ""
    }

    // ********** PASSWORD **********
    if (REG_PASS.value === "" || REG_PASS.value === null || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/.test(REG_PASS.value)) {
        e.preventDefault()
        REG_PASS_ERR.innerText = "The password must have at least 8 characters and has to contain both letters and numbers"
    } else {
        REG_PASS_ERR.innerText = ""
    }

    // ********** REPEAT PASSWORD **********
    if (REPEAT_PASS.value === "" || REPEAT_PASS.value === "" || REPEAT_PASS.value !== REG_PASS.value) {
        e.preventDefault()
        REPEAT_PASS_ERR.innerText = "The passwords do not match"
    } else {
        REPEAT_PASS_ERR.innerText = ""
    }

    // ********** CHOOSE PROVINCE **********
    if (SELECT_PROVINCE.value === "0") {
        e.preventDefault()
        SELECT_PROVINCE_ERR.innerText = "Please select a province"
    } else {
        SELECT_PROVINCE_ERR.innerText = ""
    }
})