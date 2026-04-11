

// =========================
// HEADER RESPONSIVO
// =========================
const menuToggle = document.getElementById("menuToggle");
const menuToggleMobile = document.getElementById("menuToggleMobile");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const mobileMenuClose = document.getElementById("mobileMenuClose");

function openMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;

    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");

    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    if (menuToggleMobile) menuToggleMobile.setAttribute("aria-expanded", "true");

    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;

    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");

    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    if (menuToggleMobile) menuToggleMobile.setAttribute("aria-expanded", "false");

    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (menuToggle) menuToggle.addEventListener("click", openMobileMenu);
if (menuToggleMobile) menuToggleMobile.addEventListener("click", openMobileMenu);
if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMobileMenu);
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener("click", closeMobileMenu);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu && mobileMenu.classList.contains("active")) {
        closeMobileMenu();
    }
});

// =========================
// BUSCA
// =========================
const searchInputDesktop = document.getElementById("catalogSearchInput");
const searchSuggestionsDesktop = document.getElementById("searchSuggestions");

const searchInputMobile = document.getElementById("catalogSearchInputMobile");
const searchSuggestionsMobile = document.getElementById("searchSuggestionsMobile");

function normalizeText(text) {
    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function getSearchableText(item) {
    const fichaTecnicaText = item.fichaTecnica
        ? Object.entries(item.fichaTecnica)
            .map(([key, value]) => `${key} ${value}`)
            .join(" ")
        : "";

    return normalizeText(`
        ${item.nome}
        ${item.categoria}
        ${item.descricao || ""}
        ${fichaTecnicaText}
    `);
}

function searchProducts(term) {
    const normalizedTerm = normalizeText(term.trim());
    if (!normalizedTerm) return [];

    return equipmentData.filter((item) => {
        const searchableText = getSearchableText(item);
        return searchableText.includes(normalizedTerm);
    });
}

function highlightMatch(text, term) {
    const normalizedText = normalizeText(text);
    const normalizedTerm = normalizeText(term);
    const index = normalizedText.indexOf(normalizedTerm);

    if (index === -1) return text;

    const end = index + term.length;

    return (
        text.slice(0, index) +
        `<span class="search-suggestion-highlight">${text.slice(index, end)}</span>` +
        text.slice(end)
    );
}

function renderFilteredProductsBySearch(term) {
    const results = searchProducts(term);

    if (!productsContainer) return;

    if (results.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products-found">
                <p>Nenhum equipamento encontrado para "<strong>${term}</strong>".</p>
            </div>
        `;
        return;
    }

    productsContainer.innerHTML = results
        .map(
            (item) => `
            <article class="product-card" data-id="${item.id}">
                <div class="product-image">
                    <img src="${item.imagens[0]}" alt="${item.nome}">
                </div>

                <div class="product-body">
                    <span>${item.categoria}</span>
                    <h3>${item.nome}</h3>

                    <div class="product-card-actions">
                        <button class="add-to-cart-btn" data-add-id="${item.id}">
                            Adicionar
                        </button>
                    </div>
                </div>
            </article>
        `
        )
        .join("");

    attachProductEvents();
}

function attachProductEvents() {
    const cards = productsContainer.querySelectorAll(".product-card");
    const addButtons = productsContainer.querySelectorAll(".add-to-cart-btn");

    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            if (event.target.closest(".add-to-cart-btn")) return;

            const productId = Number(card.dataset.id);
            const selectedProduct = equipmentData.find((item) => item.id === productId);
            if (selectedProduct) openModal(selectedProduct);
        });
    });

    addButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();

            const productId = Number(button.dataset.addId);
            const selectedProduct = equipmentData.find((item) => item.id === productId);
            if (!selectedProduct) return;

            addToCart(selectedProduct);

            button.classList.add("added");
            button.textContent = "Adicionado";

            setTimeout(() => {
                button.classList.remove("added");
                button.textContent = "Adicionar";
            }, 900);
        });
    });
}

function renderSearchSuggestions(results, term, inputElement, suggestionsElement) {
    if (!suggestionsElement) return;

    if (!term.trim()) {
        suggestionsElement.classList.remove("active");
        suggestionsElement.innerHTML = "";
        return;
    }

    if (results.length === 0) {
        suggestionsElement.classList.add("active");
        suggestionsElement.innerHTML = `
            <div class="no-search-results">
                Nenhum equipamento encontrado para "${term}".
            </div>
        `;
        return;
    }

    const limitedResults = results.slice(0, 6);

    suggestionsElement.innerHTML = limitedResults
        .map(
            (item) => `
            <a href="#" class="search-suggestion-link" data-product-id="${item.id}">
                <div class="search-suggestion-title">
                    ${highlightMatch(item.nome, term)}
                </div>
                <div class="search-suggestion-meta">
                    ${item.categoria}
                </div>
            </a>
        `
        )
        .join("");

    suggestionsElement.classList.add("active");

    const suggestionLinks = suggestionsElement.querySelectorAll(".search-suggestion-link");

    suggestionLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const productId = Number(link.dataset.productId);
            const selectedProduct = equipmentData.find((item) => item.id === productId);
            if (!selectedProduct) return;

            inputElement.value = selectedProduct.nome;
            suggestionsElement.classList.remove("active");

            currentCategory = "Todos";
            if (typeof renderCategories === "function") renderCategories();
            renderFilteredProductsBySearch(selectedProduct.nome);

            const catalogSection = document.getElementById("catalogo");
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            if (window.innerWidth <= 1024 && mobileMenu && mobileMenu.classList.contains("active")) {
                closeMobileMenu();
            }
        });
    });
}

function setupSearch(inputElement, suggestionsElement) {
    if (!inputElement || !suggestionsElement) return;

    inputElement.addEventListener("input", () => {
        const term = inputElement.value;
        const results = searchProducts(term);
        renderSearchSuggestions(results, term, inputElement, suggestionsElement);
    });

    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const term = inputElement.value.trim();
            if (!term) return;

            suggestionsElement.classList.remove("active");
            renderFilteredProductsBySearch(term);

            const catalogSection = document.getElementById("catalogo");
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            if (window.innerWidth <= 1024 && mobileMenu && mobileMenu.classList.contains("active")) {
                closeMobileMenu();
            }
        }
    });
}

setupSearch(searchInputDesktop, searchSuggestionsDesktop);
setupSearch(searchInputMobile, searchSuggestionsMobile);

document.addEventListener("click", (event) => {
    const clickedInsideSearch = event.target.closest(".store-search-box");

    if (!clickedInsideSearch) {
        if (searchSuggestionsDesktop) searchSuggestionsDesktop.classList.remove("active");
        if (searchSuggestionsMobile) searchSuggestionsMobile.classList.remove("active");
    }
});

// chama uma vez caso o catálogo já esteja renderizado
if (typeof attachProductEvents === "function") {
    attachProductEvents();
}