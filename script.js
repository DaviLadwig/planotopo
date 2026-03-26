const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav a");

function openMobileMenu() {
    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (menuToggle) {
    menuToggle.addEventListener("click", openMobileMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
}

if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", closeMobileMenu);
}

mobileMenuLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 12) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("active")) {
        closeMobileMenu();
    }
});
//============================================
//HERO SECTION CARROSSEL

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function startAutoSlide() {
    autoSlide = setInterval(() => {
        nextSlide();
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

if (slides.length > 0) {
    showSlide(currentSlide);
    startAutoSlide();
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoSlide();
    });
});

//==================================================================================
//MARKETPLACE JS
const equipmentData = [
    {
        id: 1,
        nome: "Andaimes",
        categoria: "Estrutura",
        descricao: "Solução ideal para trabalhos em altura com mais estabilidade, segurança e praticidade na obra.",
        imagens: [
            "./assets/images/andaimes-1.WEBP",
            "./assets/images/andaimes-2.WEBP",
            "./assets/images/andaimes-3.WEBP"
        ]
    },
    {
        id: 2,
        nome: "Betoneira 400L Menegote",
        categoria: "Betoneiras",
        descricao: "Indicada para preparo de concreto e argamassa em obras de pequeno e médio porte, com excelente desempenho e robustez.",
        imagens: [
            "./assets/images/betoneira-400-1.WEBP",
            "./assets/images/betoneira-400-2.WEBP",
            "./assets/images/betoneira-400-3.WEBP"
        ]
    },
    {
        id: 3,
        nome: "Betoneira 600L Menegote",
        categoria: "Betoneiras",
        descricao: "Modelo com maior capacidade para obras com alta demanda, oferecendo produtividade e resistência no uso contínuo.",
        imagens: [
            "./assets/images/betoneira-600-1.jpg",
            "./assets/images/betoneira-600-2.JFIF",
            "./assets/images/betoneira-600-3.png"
        ]
    },
    {
        id: 4,
        nome: "Mini Grua",
        categoria: "Elevação",
        descricao: "Equipamento ideal para elevação de materiais em obras, trazendo mais agilidade e segurança na movimentação.",
        imagens: [
            "./assets/images/minigrua-1.jpg",
            "./assets/images/minigrua-2.WEBP",
            "./assets/images/minigrua-3.WEBP"
        ]
    },
    {
        id: 5,
        nome: "Guarda Corpo",
        categoria: "Segurança",
        descricao: "Sistema de proteção coletiva para áreas elevadas, fundamental para reduzir riscos e atender normas de segurança.",
        imagens: [
            "./assets/images/guardacorpo-1.WEBP",
            "./assets/images/guardacorpo-2.WEBP",
            "./assets/images/guardacorpo-3.WEBP"
        ]
    },
    {
        id: 6,
        nome: "Container",
        categoria: "Estrutura",
        descricao: "Container para apoio de obra com dimensões aproximadas de 2,97m de altura, 6,0m de profundidade e 2,35m de comprimento.",
        imagens: [
            "./assets/images/container-1.WEBP",
            "./assets/images/container-2.WEBP",
            "./assets/images/container-3.WEBP"
        ]
    },
    {
        id: 7,
        nome: "Gerador 8kVA",
        categoria: "Energia",
        descricao: "Gerador robusto para alimentar equipamentos e estruturas temporárias em obras e eventos.",
        imagens: [
            "./assets/images/gerador-8kva-1.jpg",
            "./assets/images/gerador-8kva-2.jpg",
            "./assets/images/gerador-8kva-3.jpg"
        ]
    },
    {
        id: 8,
        nome: "Compactador de Percussão Búfalo",
        categoria: "Compactação",
        descricao: "Compactador indicado para solo e áreas de difícil acesso, entregando eficiência e alto rendimento no serviço.",
        imagens: [
            "./assets/images/compactador-bufalo-1.jpg",
            "./assets/images/compactador-bufalo-2.jpg",
            "./assets/images/compactador-bufalo-3.jpg"
        ]
    },
    {
        id: 9,
        nome: "Martelete 11kg",
        categoria: "Demolição",
        descricao: "Equipamento versátil para demolições e perfurações em concreto, alvenaria e superfícies de alta resistência.",
        imagens: [
            "./assets/images/martelete-11kg-1.jpg",
            "./assets/images/martelete-11kg-2.jpg",
            "./assets/images/martelete-11kg-3.jpg"
        ]
    },
    {
        id: 10,
        nome: "Bomba Submersa",
        categoria: "Hidráulico",
        descricao: "Ideal para drenagem e retirada de água em valas, poços, reservatórios e áreas alagadas na obra.",
        imagens: [
            "./assets/images/bomba-submersa-1.jpg",
            "./assets/images/bomba-submersa-2.jpg",
            "./assets/images/bomba-submersa-3.jpg"
        ]
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

    productsContainer.innerHTML = filteredProducts
        .map(item => `
      <article class="product-card" data-id="${item.id}">
        <div class="product-image">
          <img src="${item.imagens[0]}" alt="${item.nome}">
        </div>
        <div class="product-body">
          <h3>${item.nome}</h3>
          <span>${item.categoria}</span>
        </div>
      </article>
    `)
        .join("");

    const cards = productsContainer.querySelectorAll(".product-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const productId = Number(card.dataset.id);
            const selectedProduct = equipmentData.find(item => item.id === productId);
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

function openModal(product) {
    currentProduct = product;
    currentImageIndex = 0;

    modalCategory.textContent = product.categoria;
    modalTitle.textContent = product.nome;
    modalDescription.textContent = product.descricao;

    updateMainImage();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
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

renderCategories();
renderProducts();