const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const modal = document.getElementById("donationModal");
const openBtns = [
    document.getElementById("donateBtn"),
    document.getElementById("donateBtn2"),
    document.getElementById("donateBtn3")
];
const closeBtn = document.getElementById("closeModal");

openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.remove("active");
    }
});


