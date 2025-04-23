
document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".logo-exp");
    const contents = document.querySelectorAll(".logo-content");
    const BReset = document.getElementById("BReset");

    logos.forEach(logo => {
        logo.addEventListener("click", () => {
            // Oculta todos los contenidos
            contents.forEach(content => content.style.display = "none");

            // Muestra solo el contenido correspondiente
            const id = logo.alt.toLowerCase().replace(/\s+/g, '') + "-content";
            const contentToShow = document.getElementById(id);
            if (contentToShow) contentToShow.style.display = "block";

            // Anima los otros logos
            logos.forEach(otherLogo => {
                if (otherLogo !== logo) {
                    otherLogo.classList.add("move-away");
                } else {
                    otherLogo.classList.add("selected-logo");
                }
            });

            // Muestra el botón "Volver"
            BReset.style.display = "block";
        });
    });
});

function resetLogos() {
    const logos = document.querySelectorAll(".logo-exp");
    const contents = document.querySelectorAll(".logo-content");
    const BReset = document.getElementById("BReset");

    logos.forEach(logo => {
        logo.classList.remove("move-away", "selected-logo");
    });

    contents.forEach(content => content.style.display = "none");

    // Oculta el botón "Volver"
    BReset.style.display = "none";
}


