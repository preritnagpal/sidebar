const toggleBtn = document.querySelector(".sidebar-toggle");
const side = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn")

toggleBtn.addEventListener("click", function(){
    side.classList.toggle("opensidebar");
});

closeBtn.addEventListener("click", function () {
    side.classList.remove("opensidebar");
});
