
const readButton = document.getElementById("readButton");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeButton");

readButton.addEventListener("click", () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", closeNote);

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closeNote();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNote();
    }
});

function closeNote() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}
