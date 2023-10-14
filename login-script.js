const email = document.getElementById("email");
const phone = document.getElementById("phone");
email.addEventListener("input", () => {
    phone.value = "";
})
phone.addEventListener("input", () => {
    email.value = "";
})

const inputBox = document.querySelectorAll("input");
inputBox.forEach((obj) => {
    obj.addEventListener("input", ()=> {
        if (!obj.checkValidity()) obj.classList.add("error");
        else obj.classList.remove("error");
    })}
)