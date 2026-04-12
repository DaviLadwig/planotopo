//FUNCIONAMENTO DE CATEGORIAS

const catalogCategoriesToggle = document.getElementById("catalogCategoriesToggle");
const catalogSidebar = document.getElementById("catalogSidebar");
const catalogSidebarOverlay = document.getElementById("catalogSidebarOverlay");
const catalogSidebarClose = document.getElementById("catalogSidebarClose");

function openCatalogSidebar() {
    if (!catalogSidebar || !catalogSidebarOverlay) return;
    catalogSidebar.classList.add("active");
    catalogSidebarOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCatalogSidebar() {
    if (!catalogSidebar || !catalogSidebarOverlay) return;
    catalogSidebar.classList.remove("active");
    catalogSidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

if (catalogCategoriesToggle) {
    catalogCategoriesToggle.addEventListener("click", openCatalogSidebar);
}

if (catalogSidebarClose) {
    catalogSidebarClose.addEventListener("click", closeCatalogSidebar);
}

if (catalogSidebarOverlay) {
    catalogSidebarOverlay.addEventListener("click", closeCatalogSidebar);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && catalogSidebar && catalogSidebar.classList.contains("active")) {
        closeCatalogSidebar();
    }
});

//FECHA O PAINEL QUANDO É ESCOLHIDO A CATEGORIA

function renderCategories() {
    const categories = getCategories();

    categoriesContainer.innerHTML = categories
        .map(category => `
            <button class="category-btn ${category === activeCategory ? "active" : ""}" data-category="${category}">
                ${category}
            </button>
        `)
        .join("");

    const buttons = categoriesContainer.querySelectorAll(".category-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.category;
            renderCategories();
            renderProducts();

            if (window.innerWidth <= 900 && catalogSidebar && catalogSidebar.classList.contains("active")) {
                closeCatalogSidebar();
            }
        });
    });
}

