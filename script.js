
//==================================================================================================================================
//MARKETPLACE JS
const equipmentData = [
    {
        id: 101,
        nome: "Betoneira 400L",
        categoria: "Betoneiras",
        descricao: "Betoneira Menegotti de 400 litros ideal para preparo de concreto e argamassa em obras de pequeno e médio porte.",
        imagens: [
            "./assets/images/betoneira-400-1.png",
            "./assets/images/betoneira-400-2.png"
        ],
        fichaTecnica: {
            Marca: "Menegotti",
            Capacidade: "400 litros",
            Aplicação: "Concreto e argamassa",
            Uso: "Obras residenciais e comerciais",
            Alimentação: "Elétrica",
            Disponibilidade: "Sob consulta"
        },
        locacao: {
            diaria: 120,
            semanal: 650,
            quinzenal: 1100,
            mensal: 1800
        }
    },
    {
        id: 102,
        nome: "Betoneira 600L",
        categoria: "Betoneiras",
        descricao: "Betoneira Menegotti de 600 litros para maior produtividade em obras de médio e grande porte.",
        imagens: [
            "./assets/images/betoneira-600-1.jpg",
            "./assets/images/betoneira-600-2.png",
            "./assets/images/betoneira-600-3.png"
        ],
        fichaTecnica: {
            Marca: "Menegotti",
            Capacidade: "600 litros",
            Aplicação: "Concreto e argamassa",
            Uso: "Obras de médio e grande porte",
            Alimentação: "Elétrica",
            Disponibilidade: "Sob consulta"
        },
        locacao: {
            diaria: 100,
            semanal: 420,
            quinzenal: 800,
            mensal: 1200
        }
    },
    {
        id: 103,
        nome: "Mini Grua",
        categoria: "Elevação",
        descricao: "Mini grua para movimentação vertical de materiais em obras, trazendo mais agilidade e segurança.",
        imagens: [
            "./assets/images/minigrua-1.jpg",
            "./assets/images/minigrua-2.jpg"
        ],
        fichaTecnica: {
            Aplicação: "Elevação de materiais",
            Estrutura: "Metálica",
            Uso: "Obras residenciais e comerciais",
            Instalação: "Em andaime ou laje",
            Capacidade: "Sob consulta"
        }
    },
    {
        id: 104,
        nome: "Guarda Corpo",
        categoria: "Segurança",
        descricao: "Sistema de guarda corpo para proteção em áreas elevadas e bordas de lajes.",
        imagens: [
            "./assets/images/guardacorpo-1.png",
            "./assets/images/guardacorpo-2.png",
            "./assets/images/guardacorpo-3.png"
        ],
        fichaTecnica: {
            Material: "Aço galvanizado",
            Aplicação: "Proteção em altura",
            Uso: "Lajes, sacadas e andaimes",
            Norma: "NR-18",
            Disponibilidade: "Sob consulta"
        }
    },

    {
        id: 105,
        nome: "Piso Metálico",
        categoria: "Estrutura",
        descricao: "Piso metálico para andaimes e estruturas temporárias, oferecendo segurança e estabilidade.",
        imagens: [
            "./assets/images/piso-metalico-1.jpg",
            "./assets/images/piso-metalico-2.jpg"
        ],
        fichaTecnica: {
            Material: "Aço",
            Aplicação: "Andaimes e passarelas",
            Acabamento: "Galvanizado",
            Uso: "Obras em altura"
        }
    },
    {
        id: 106,
        nome: "Escora 2m a 3,5m",
        categoria: "Estrutura",
        descricao: "Escora metálica regulável de 2 a 3,5 metros para sustentação de lajes e formas.",
        imagens: [
            "./assets/images/escora-35-1.png",
            "./assets/images/escora-35-2.png"
        ],
        fichaTecnica: {
            Altura: "2,0 a 3,5 metros",
            Material: "Aço",
            Aplicação: "Escoramento de lajes",
            Regulagem: "Manual"
        }
    },
    {
        id: 107,
        nome: "Escora 2m a 4,5m",
        categoria: "Estrutura",
        descricao: "Escora metálica regulável de 2 a 4,5 metros para escoramento em grandes alturas.",
        imagens: [
            "./assets/images/escora-45-1.png",
            "./assets/images/escora-45-2.jpg"
        ],
        fichaTecnica: {
            Altura: "2,0 a 4,5 metros",
            Material: "Aço",
            Aplicação: "Escoramento de lajes e vigas",
            Regulagem: "Manual"
        }
    },
    {
        id: 108,
        nome: "Gerador 5,5 kVA",
        categoria: "Energia",
        descricao: "Gerador portátil de 5,5 kVA para alimentação de ferramentas e equipamentos em obra.",
        imagens: [
            "./assets/images/gerador-55-1.jpg",
            "./assets/images/gerador-55-2.jpg",
            "./assets/images/gerador-55-3.jpg"
        ],
        fichaTecnica: {
            Potência: "5,5 kVA",
            Combustível: "Gasolina",
            Uso: "Ferramentas e iluminação",
            Partida: "Manual"
        }
    },
    {
        id: 109,
        nome: "Gerador 6 kVA",
        categoria: "Energia",
        descricao: "Gerador de 6 kVA indicado para canteiros de obra e equipamentos de maior consumo.",
        imagens: [
            "./assets/images/gerador-6-1.png",
            "./assets/images/gerador-6-2.png",
            "./assets/images/gerador-6-3.png"
        ],
        fichaTecnica: {
            Potência: "6 kVA",
            Combustível: "Gasolina",
            Uso: "Equipamentos de obra",
            Partida: "Manual"
        }
    },
    {
        id: 110,
        nome: "Gerador 8 kVA",
        categoria: "Energia",
        descricao: "Gerador de 8 kVA para maior autonomia e alimentação de múltiplos equipamentos.",
        imagens: [
            "./assets/images/gerador-8-1.png",
            "./assets/images/gerador-8-2.png",
            "./assets/images/gerador-8-3.png"
        ],
        fichaTecnica: {
            Potência: "8 kVA",
            Combustível: "Gasolina/Diesel",
            Uso: "Canteiros de obra",
            Partida: "Elétrica"
        }
    },
    {
        id: 111,
        nome: "Compactador de Percussão",
        categoria: "Compactação",
        descricao: "Compactador de percussão marca Buffalo para compactação de solo em áreas menores.",
        imagens: [
            "./assets/images/compactador-percussao-1.png",
            "./assets/images/compactador-percussao-2.png",
            "./assets/images/compactador-percussao-3.png"
        ],
        fichaTecnica: {
            Marca: "Buffalo",
            Aplicação: "Compactação de solo",
            Uso: "Valas e áreas estreitas",
            Combustível: "Gasolina"
        }
    },
    {
        id: 112,
        nome: "Compactador de Placa",
        categoria: "Compactação",
        descricao: "Compactador de placa para compactação de pisos, brita e solo em áreas planas.",
        imagens: [
            "./assets/images/compactador-placa-1.png",
            "./assets/images/compactador-placa-2.png",
            "./assets/images/compactador-placa-3.png"
        ],
        fichaTecnica: {
            Aplicação: "Solo e pavimentação",
            Uso: "Áreas planas",
            Combustível: "Gasolina",
            Estrutura: "Base metálica"
        }
    },
    {
        id: 113,
        nome: "Cortador de Piso Serra Clip",
        categoria: "Corte",
        descricao: "Cortador de piso tipo Serra Clip para cortes precisos em concreto e asfalto.",
        imagens: [
            "./assets/images/cortador-piso-1.png",
            "./assets/images/cortador-piso-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Corte de concreto e asfalto",
            Disco: "Sob consulta",
            Combustível: "Gasolina",
            Uso: "Obras e pavimentação"
        }
    },
    {
        id: 114,
        nome: "Talha 1 Tonelada",
        categoria: "Elevação",
        descricao: "Talha para elevação de cargas de até 1 tonelada.",
        imagens: [
            "./assets/images/talha-1t-1.png",
            "./assets/images/talha-1t-2.png",
            "./assets/images/talha-1t-3.png"
        ],
        fichaTecnica: {
            Capacidade: "1 tonelada",
            Aplicação: "Movimentação de cargas",
            Estrutura: "Metálica"
        }
    },
    {
        id: 115,
        nome: "Talha 3 Toneladas",
        categoria: "Elevação",
        descricao: "Talha reforçada para movimentação de cargas de até 3 toneladas.",
        imagens: [
            "./assets/images/talha-3t-1.jpg"
        ],
        fichaTecnica: {
            Capacidade: "3 toneladas",
            Aplicação: "Elevação de cargas pesadas",
            Estrutura: "Metálica"
        }
    },
    {
        id: 116,
        nome: "Balancinho",
        categoria: "Elevação",
        descricao: "Balancinho suspenso para trabalhos em fachadas e manutenção predial.",
        imagens: [
            "./assets/images/balancinho-1.png"
        ],
        fichaTecnica: {
            Aplicação: "Trabalhos em altura",
            Uso: "Fachadas e manutenção",
            Capacidade: "Sob consulta"
        }
    },
    {
        id: 117,
        nome: "Cadeira Suspensa",
        categoria: "Elevação",
        descricao: "Cadeira suspensa para trabalhos de acabamento e manutenção em altura.",
        imagens: [
            "./assets/images/cadeira-1.png",
            "./assets/images/cadeira-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Pintura e manutenção",
            Uso: "Trabalhos em altura",
            Segurança: "Compatível com cinto e trava-quedas"
        }
    },
    {
        id: 118,
        nome: "Alisadora de Piso",
        categoria: "Acabamento",
        descricao: "Alisadora de piso para acabamento e nivelamento de concreto fresco.",
        imagens: [
            "./assets/images/alisadora-1.png",
            "./assets/images/alisadora-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Acabamento de concreto",
            Combustível: "Gasolina",
            Uso: "Pisos industriais e residenciais"
        }
    },
    {
        id: 119,
        nome: "Politriz",
        categoria: "Acabamento",
        descricao: "Politriz para polimento e acabamento de superfícies.",
        imagens: [
            "./assets/images/politriz-1.png",
            "./assets/images/politriz-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Polimento",
            Uso: "Pisos e superfícies",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 120,
        nome: "Motor Acionador para Mangote",
        categoria: "Concreto",
        descricao: "Motor acionador utilizado em mangotes vibradores para concretagem.",
        imagens: [
            "./assets/images/motor-acionador-1.png",
            "./assets/images/motor-acionador-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Mangote vibrador",
            Alimentação: "Elétrica",
            Uso: "Concretagem"
        }
    },
    {
        id: 121,
        nome: "Motobomba",
        categoria: "Hidráulico",
        descricao: "Motobomba para sucção e remoção de água em obras e terrenos.",
        imagens: [
            "./assets/images/motobomba-1.png",
            "./assets/images/motobomba-2.png",
            "./assets/images/motobomba-3.png"
        ],
        fichaTecnica: {
            Aplicação: "Remoção de água",
            Combustível: "Gasolina",
            Uso: "Obras e drenagem"
        }
    },
    {
        id: 122,
        nome: "Martelete 2,5kg",
        categoria: "Demolição",
        descricao: "Martelete leve de 2,5kg ideal para pequenos reparos e demolições leves.",
        imagens: [
            "./assets/images/martelete-25-1.png",
            "./assets/images/martelete-25-2.png",
            "./assets/images/martelete-25-3.png"
        ],
        fichaTecnica: {
            Peso: "2,5 kg",
            Uso: "Pequenas demolições",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 123,
        nome: "Martelete 11kg",
        categoria: "Demolição",
        descricao: "Martelete de 11kg para demolições pesadas e abertura de canaletas.",
        imagens: [
            "./assets/images/martelete-11-1.png",
            "./assets/images/martelete-11-2.png",
            "./assets/images/martelete-11-3.png"
        ],
        fichaTecnica: {
            Peso: "11 kg",
            Uso: "Demolições pesadas",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 124,
        nome: "Martelete 15kg",
        categoria: "Demolição",
        descricao: "Martelete de 15kg para rompimento de concreto e pisos.",
        imagens: [
            "./assets/images/martelete-15-1.png",
            "./assets/images/martelete-15-2.png",
            "./assets/images/martelete-15-3.png"
        ],
        fichaTecnica: {
            Peso: "15 kg",
            Uso: "Rompimento de concreto",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 125,
        nome: "Martelete 30kg",
        categoria: "Demolição",
        descricao: "Martelete de 30kg para demolições pesadas e alto desempenho.",
        imagens: [
            "./assets/images/martelete-30-1.png",
            "./assets/images/martelete-30-2.png",
        ],
        fichaTecnica: {
            Peso: "30 kg",
            Uso: "Demolição pesada",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 126,
        nome: "Barra de Ancoragem",
        categoria: "Segurança",
        descricao: "Barra de ancoragem para sistemas de proteção e trabalho em altura.",
        imagens: [
            "./assets/images/barra-ancoragem-1.png",
            "./assets/images/barra-ancoragem-2.png",
            "./assets/images/barra-ancoragem-3.jpg"
        ],
        fichaTecnica: {
            Material: "Aço",
            Aplicação: "Trabalho em altura",
            Compatibilidade: "Cintos e trava-quedas"
        }
    },
    {
        id: 127,
        nome: "Container Almoxarifado",
        categoria: "Containers",
        descricao: "Container para gurdar e administrar equipamentos.",
        imagens: [
            "./assets/images/container-1.png",
            "./assets/images/container-2.png",
            "./assets/images/container-3.png"
        ],
        fichaTecnica: {
            Material: "Aço corten",
            Altura: "2,97 m",
            Largura: "2,35 m",
            Comprimento: "6 m"
        }
    },
    {
        id: 128,
        nome: "Politriz 7 pol",
        categoria: "Acabamento",
        descricao: "Politriz para polimento e acabamento de superfícies.",
        imagens: [
            "./assets/images/politriz7-1.png",
            "./assets/images/politriz7-2.png",
            "./assets/images/politriz7-3.png"
        ],
        fichaTecnica: {
            Aplicação: "Polimento",
            Uso: "Pisos e superfícies",
            Alimentação: "Elétrica",
            Potência: "1200 watts"

        }
    }

];


const categoriesContainer = document.getElementById("categories");
const productsContainer = document.getElementById("products");

const modal = document.getElementById("productModal");
const modalOverlay = document.getElementById("productModalOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalMainImage = document.getElementById("modalMainImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const galleryThumbs = document.getElementById("galleryThumbs");
const prevImageBtn = document.getElementById("prevImageBtn");
const nextImageBtn = document.getElementById("nextImageBtn");


let activeCategory = "Todos";
let currentProduct = null;
let currentImageIndex = 0;

//FUNÇÕES DO CARRINHO

const floatingCart = document.getElementById("floatingCart");
const floatingCartCount = document.getElementById("floatingCartCount");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItems = document.getElementById("cartItems");
const cartTotalItems = document.getElementById("cartTotalItems");
const finishOnWhatsapp = document.getElementById("finishOnWhatsapp");

let cart = [];


function openCart() {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}


function closeCart() {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function addToCart(product, rentalData = null) {
    const key = rentalData
        ? `${product.id}-${rentalData.periodo}`
        : `${product.id}`;

    const existingItem = cart.find(item => item.key === key);

    if (existingItem) {
        existingItem.quantidade += rentalData ? rentalData.quantidade : 1;
    } else {
        cart.push({
            key,
            id: product.id,
            nome: product.nome,
            categoria: product.categoria,
            imagem: product.imagens[0],
            quantidade: rentalData ? rentalData.quantidade : 1,
            periodo: rentalData ? rentalData.periodo : null,
            valorUnitario: rentalData ? rentalData.valorUnitario : null,
            valorTotal: rentalData ? rentalData.valorTotal : null
        });
    }

    updateCartUI();
}

function increaseItem(productKey) {
    const item = cart.find(product => product.key === productKey);
    if (!item) return;

    item.quantidade += 1;

    if (item.valorUnitario) {
        item.valorTotal = item.valorUnitario * item.quantidade;
    }

    updateCartUI();
}

function decreaseItem(productKey) {
    const item = cart.find(product => product.key === productKey);
    if (!item) return;

    item.quantidade -= 1;

    if (item.quantidade <= 0) {
        cart = cart.filter(product => product.key !== productKey);
    } else if (item.valorUnitario) {
        item.valorTotal = item.valorUnitario * item.quantidade;
    }

    updateCartUI();
}


function removeItem(productKey) {
    cart = cart.filter(product => product.key !== productKey);
    updateCartUI();
}

function getCartTotalItems() {
    return cart.reduce((total, item) => total + item.quantidade, 0);
}

function updateCartUI() {
    const totalItems = getCartTotalItems();

    if (floatingCartCount) {
        floatingCartCount.textContent = totalItems;
    }

    if (cartTotalItems) {
        cartTotalItems.textContent = totalItems;
    }

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <p>Seu carrinho está vazio.</p>
                <span>Adicione equipamentos para montar seu pedido.</span>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart
        .map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>

                <div class="cart-item-info">
                    <h4>${item.nome}</h4>

                    <div class="cart-item-meta">
                        <span>${item.categoria}</span>
                        ${item.periodo ? `<small>Plano: ${getRentalPeriodLabel(item.periodo)}</small>` : ""}
                    </div>

                    ${item.valorUnitario ? `
                        <div class="cart-item-pricing">
                            <p><strong>Valor unitário:</strong> ${formatCurrency(item.valorUnitario)}</p>
                            <p><strong>Total:</strong> ${formatCurrency(item.valorTotal)}</p>
                        </div>
                    ` : ""}

                    <div class="cart-item-actions">
                        <div class="qty-controls">
                            <button class="qty-btn" data-decrease-key="${item.key}">-</button>
                            <div class="qty-value">${item.quantidade}</div>
                            <button class="qty-btn" data-increase-key="${item.key}">+</button>
                        </div>

                        <button class="remove-item-btn" data-remove-key="${item.key}">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        `)
        .join("");

    const increaseButtons = cartItems.querySelectorAll("[data-increase-key]");
    const decreaseButtons = cartItems.querySelectorAll("[data-decrease-key]");
    const removeButtons = cartItems.querySelectorAll("[data-remove-key]");

    increaseButtons.forEach(button => {
        button.addEventListener("click", () => {
            increaseItem(button.dataset.increaseKey);
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener("click", () => {
            decreaseItem(button.dataset.decreaseKey);
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            removeItem(button.dataset.removeKey);
        });
    });
}


function generateWhatsappMessage() {
    if (cart.length === 0) return "";

    const lines = cart.map(item => {
        if (item.periodo) {
            return `- ${item.nome} | Plano: ${getRentalPeriodLabel(item.periodo)} | Quantidade: ${item.quantidade} | Valor unitário: ${formatCurrency(item.valorUnitario)} | Total: ${formatCurrency(item.valorTotal)}`;
        }

        return `- ${item.nome} — Quantidade: ${item.quantidade}`;
    });

    const message = `Olá! Gostaria de solicitar um orçamento para locação dos seguintes equipamentos:\n\n${lines.join("\n")}`;

    return encodeURIComponent(message);
}

function finishOrderOnWhatsapp() {
    if (cart.length === 0) {
        alert("Adicione pelo menos um equipamento ao pedido.");
        return;
    }
    //NUMERO WHATS----------------------------------------------------------------------------------------------------------------------
    const phone = "5598991713898"; // troque pelo número real
    const message = generateWhatsappMessage();
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");
}
function getCategories() {
    return ["Todos", ...new Set(equipmentData.map(item => item.categoria))];
}

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
        });
    });
}

function getFilteredProducts() {
    if (activeCategory === "Todos") return equipmentData;
    return equipmentData.filter(item => item.categoria === activeCategory);
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();

    function openModal(product) {
        currentProduct = product;
        currentImageIndex = 0;

        modalCategory.textContent = product.categoria;
        modalTitle.textContent = product.nome;
        modalDescription.textContent = product.descricao;

        renderSpecs(product);
        updateMainImage();

        if (modal) {
            modal.classList.add("active");
        }

        document.body.style.overflow = "hidden";
    }

    productsContainer.innerHTML = filteredProducts
        .map(item => `
            <article class="product-card" data-id="${item.id}">
            <div class="product-image">
                <img src="${item.imagens[0]}" alt="${item.nome}">
            </div>

            <div class="product-body">
                <h3>${item.nome}</h3>
                <span>${item.categoria}</span>

                <div class="product-card-actions">
                    <button class="add-to-cart-btn" data-add-id="${item.id}">
                        Ver opções
                    </button>
                </div>
            </div>
            </article>
        `)
        .join("");

    const cards = productsContainer.querySelectorAll(".product-card");
    const addButtons = productsContainer.querySelectorAll(".add-to-cart-btn");

    cards.forEach(card => {
        card.addEventListener("click", (event) => {
            if (event.target.closest(".add-to-cart-btn")) return;

            const productId = Number(card.dataset.id);
            const selectedProduct = equipmentData.find(item => item.id === productId);
            openModal(selectedProduct);
        });
    });

    addButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();

            const productId = Number(button.dataset.addId);
            const selectedProduct = equipmentData.find(item => item.id === productId);

            if (!selectedProduct) return;

            openModal(selectedProduct);
        });
    });
}

function renderThumbs(product) {
    galleryThumbs.innerHTML = product.imagens
        .map((image, index) => `
      <button class="gallery-thumb ${index === currentImageIndex ? "active" : ""}" data-index="${index}">
        <img src="${image}" alt="${product.nome} foto ${index + 1}">
      </button>
    `)
        .join("");

    const thumbs = galleryThumbs.querySelectorAll(".gallery-thumb");

    thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {
            currentImageIndex = Number(thumb.dataset.index);
            updateMainImage();
        });
    });
}

function updateMainImage() {
    if (!currentProduct) return;

    modalMainImage.src = currentProduct.imagens[currentImageIndex];
    modalMainImage.alt = `${currentProduct.nome} foto ${currentImageIndex + 1}`;

    renderThumbs(currentProduct);
}

//MODAL==================================================================================================
function openModal(product) {
    currentProduct = product;
    currentImageIndex = 0;
    selectedRentalPeriod = "diaria";
    selectedRentalQty = 1;

    modalCategory.textContent = product.categoria;
    modalTitle.textContent = product.nome;
    modalDescription.textContent = product.descricao;

    renderSpecs(product);
    updateMainImage();
    updateRentalUI();

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    setupRentalEvents();
}


function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function showNextImage() {
    if (!currentProduct) return;
    currentImageIndex = (currentImageIndex + 1) % currentProduct.imagens.length;
    updateMainImage();
}

function showPrevImage() {
    if (!currentProduct) return;
    currentImageIndex = (currentImageIndex - 1 + currentProduct.imagens.length) % currentProduct.imagens.length;
    updateMainImage();
}

closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
nextImageBtn.addEventListener("click", showNextImage);
prevImageBtn.addEventListener("click", showPrevImage);

document.addEventListener("keydown", event => {
    if (!modal.classList.contains("active")) return;

    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowRight") showNextImage();
    if (event.key === "ArrowLeft") showPrevImage();
});

const addToOrderBtn = document.getElementById("addToOrderBtn");
const modalSpecs = document.getElementById("modalSpecs");

//ficha tecnica do modal---------------------------------------------
function renderSpecs(product) {
    if (!modalSpecs) return;

    if (!product.fichaTecnica) {
        modalSpecs.innerHTML = `
      <div class="product-spec-item">
        <div class="product-spec-label">Informações</div>
        <div class="product-spec-value">Ficha técnica disponível sob consulta.</div>
      </div>
    `;
        return;
    }

    modalSpecs.innerHTML = Object.entries(product.fichaTecnica)
        .map(([label, value]) => `
      <div class="product-spec-item">
        <div class="product-spec-label">${label}</div>
        <div class="product-spec-value">${value}</div>
      </div>
    `)
        .join("");
}
//-------------------------------------------------------

addToOrderBtn.addEventListener("click", () => {
    if (!currentProduct || !currentProduct.locacao) return;

    const valorUnitario = currentProduct.locacao[selectedRentalPeriod] || 0;
    const valorTotal = valorUnitario * selectedRentalQty;

    addToCart(currentProduct, {
        periodo: selectedRentalPeriod,
        quantidade: selectedRentalQty,
        valorUnitario,
        valorTotal
    });

    closeModal();
    openCart();
});

if (floatingCart) {
    floatingCart.addEventListener("click", openCart);
}

if (cartClose) {
    cartClose.addEventListener("click", closeCart);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCart);
}

if (finishOnWhatsapp) {
    finishOnWhatsapp.addEventListener("click", finishOrderOnWhatsapp);
}

//ICONES DE NAVEGAÇÃO PÓS HERO SECTION
function obterCategoriaDaURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("categoria") || "";
}

function aplicarCategoriaInicialDaURL() {
    const categoria = obterCategoriaDaURL().trim();
    if (!categoria) return;

    activeCategory = categoria;
    renderCategories();
    renderProducts();

    const feedback = document.getElementById("searchFeedback");
    if (feedback) {
        feedback.innerHTML = `<p>Categoria selecionada: <strong>${categoria}</strong></p>`;
    }
}



renderCategories();
renderProducts();
updateCartUI();
aplicarBuscaInicialDaURL();
aplicarCategoriaInicialDaURL();


