document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main section");
    const navButtons = document.querySelectorAll("nav button");
    const cards = document.querySelectorAll(".card");

    function showSection(sectionId) {
        sections.forEach(section => section.classList.add("hidden"));
        document.getElementById(sectionId).classList.remove("hidden");
    }

    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const subCategoryId = this.getAttribute("data-subcategory");
            if (subCategoryId) {
                showSection(subCategoryId);
            }
        });
    });

    // Инициализация Telegram WebApp
    const tg = window.Telegram.WebApp;
    tg.expand();
    
    showSection("home");
});
