const inputBox = document.querySelectorAll("input");
inputBox.forEach((obj) => {
    obj.addEventListener("input", ()=> {
        if (!obj.checkValidity()) obj.classList.add("error");
        else obj.classList.remove("error");
    })}
)