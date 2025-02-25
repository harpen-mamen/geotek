document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Kampus Hijau siap!");

    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Navigasi ke: " + this.textContent);
        });
    });
});
