//================================================================================================================================
//FUNCIONAMENTO DO FAQ PARA ABIR E FECHAR DUVIDA
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((faq) => faq.classList.remove("active"));

        if (!isActive) {
            item.classList.add("active");
        }
    });
});


function mostrarFeedbackBusca(termo, quantidade) {
    const feedback = document.getElementById("searchFeedback");
    if (!feedback) return;

    if (!termo) {
        feedback.innerHTML = "";
        return;
    }

    feedback.innerHTML = `
        <p>Busca por: <strong>${termo}</strong> • ${quantidade} resultado(s)</p>
    `;
}