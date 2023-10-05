let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let button = document.getElementById("open");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let age = document.querySelector("#age").value;
    if (parseInt(age) >= 18) {
        closeModal();
    } else {
        alert("Je moet ouder dan 18 zijn")
    }
});

const closeModal = () => {
    modal.classList.add("hidden");
};

button.addEventListener("click", () => {
    modal.classList.remove("hidden");
});