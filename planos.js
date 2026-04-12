let selectedRentalPeriod = "diaria";
let selectedRentalQty = 1;

const rentalPriceLabel = document.getElementById("rentalPriceLabel");
const rentalPriceNote = document.getElementById("rentalPriceNote");
const rentalTotal = document.getElementById("rentalTotal");
const rentalQtyValue = document.getElementById("rentalQtyValue");

function formatCurrency(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function getRentalPeriodLabel(period) {
    const labels = {
        diaria: "diária",
        semanal: "semanal",
        quinzenal: "quinzenal",
        mensal: "mensal"
    };

    return labels[period] || period;
}

function updateRentalUI() {
    if (!currentProduct || !currentProduct.locacao) return;

    const unitPrice = currentProduct.locacao[selectedRentalPeriod] || 0;
    const total = unitPrice * selectedRentalQty;

    document.querySelectorAll(".rental-period-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.period === selectedRentalPeriod);
    });

    if (rentalQtyValue) {
        rentalQtyValue.textContent = selectedRentalQty;
    }

    if (rentalPriceLabel) {
        rentalPriceLabel.textContent = `A partir de ${formatCurrency(unitPrice)} / ${getRentalPeriodLabel(selectedRentalPeriod)}`;
    }

    if (rentalPriceNote) {
        rentalPriceNote.textContent = `* Valor referente ao plano selecionado`;
    }

    if (rentalTotal) {
        rentalTotal.textContent = `Total: ${formatCurrency(total)}`;
    }
}

if (modal) {
    modal.addEventListener("click", (event) => {
        const periodButton = event.target.closest(".rental-period-btn");
        const decreaseButton = event.target.closest("#decreaseRentalQty");
        const increaseButton = event.target.closest("#increaseRentalQty");

        if (periodButton) {
            selectedRentalPeriod = periodButton.dataset.period;
            updateRentalUI();
            return;
        }

        if (decreaseButton) {
            if (selectedRentalQty > 1) {
                selectedRentalQty -= 1;
                updateRentalUI();
            }
            return;
        }

        if (increaseButton) {
            selectedRentalQty += 1;
            updateRentalUI();
            return;
        }
    });
}

