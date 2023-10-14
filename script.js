const inputBox = document.querySelectorAll("input");
inputBox.forEach((obj) => {
    obj.addEventListener("input", ()=> {
        if (!obj.checkValidity()) obj.classList.add("error");
        else obj.classList.remove("error");
    })}
)

const pass1 = document.querySelector("#pass_1")
const pass2 = document.getElementById("pass_2")
pass2.addEventListener("input", () => {
    if (pass1.value.localeCompare(pass2.value)) {
        pass2.classList.add("error");
        pass2.setCustomValidity("Passwords are not matching.");
    }
    else {
        pass2.classList.remove("error");
        pass2.setCustomValidity("");
    }
})

pass1.addEventListener("input", () => {
    if (pass1.value.localeCompare(pass2.value)) {
        pass2.classList.add("error");
        pass2.setCustomValidity("Passwords are not matching.");
    }
    else {
        pass2.classList.remove("error");
        pass2.setCustomValidity("");
    }
})