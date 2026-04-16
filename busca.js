link.addEventListener("click", (event) => {
    event.preventDefault();

    const productId = Number(link.dataset.productId);
    const selectedProduct = equipmentData.find((item) => item.id === productId);
    if (!selectedProduct) return;

    const termo = encodeURIComponent(selectedProduct.nome);
    window.location.href = `catalogo.html?busca=${termo}`;
});

inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        const term = inputElement.value.trim();
        if (!term) return;

        const termo = encodeURIComponent(term);
        window.location.href = `catalogo.html?busca=${termo}`;
    }
});

function obterTermoBuscaDaURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("busca") || "";
}

function aplicarBuscaInicialDaURL() {
    const termo = obterTermoBuscaDaURL().trim();
    if (!termo) return;

    const inputDesktop = document.getElementById("catalogSearchInput");
    const inputMobile = document.getElementById("catalogSearchInputMobile");

    if (inputDesktop) inputDesktop.value = termo;
    if (inputMobile) inputMobile.value = termo;

    if (typeof renderFilteredProductsBySearch === "function") {
        renderFilteredProductsBySearch(termo);
    }

    const searchFeedback = document.getElementById("searchFeedback");
    if (searchFeedback) {
        searchFeedback.innerHTML = `Resultado da busca por: <strong>${termo}</strong>`;
    }
}aplicarBuscaInicialDaURL();