var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var arrow = this.firstElementChild;
        if (panel.style.display == "none") {
            panel.style.display = "block";
            this.classList.add("active");
            arrow.classList.add("inverted");

        } else {
            panel.style.display = "none";
            this.classList.remove("active");
            arrow.classList.remove("inverted");
        }
    });
}