// ======================================
// MO's Area - cart.js
// ======================================

const rows = document.querySelectorAll("tbody tr");
const subtotalElement = document.querySelector(".summary-card p span");
const totalElement = document.querySelector(".summary-card h3 span");
const checkoutBtn = document.getElementById("checkoutBtn");

function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}

function updateCart() {

    let subtotal = 0;

    rows.forEach(row => {

        if (row.style.display === "none") return;

        const priceCell = row.children[1];
        const quantityElement = row.querySelector(".quantity");
        const totalCell = row.querySelector(".price");

        let price = parseInt(
            priceCell.textContent.replace(/[₹,]/g, "")
        );

        let quantity = parseInt(quantityElement.textContent);

        let total = price * quantity;

        totalCell.textContent = formatPrice(total);

        subtotal += total;

    });

    subtotalElement.textContent = formatPrice(subtotal);
    totalElement.textContent = formatPrice(subtotal);

}

// ==============================
// Quantity Buttons
// ==============================

rows.forEach(row => {

    const minus = row.querySelector(".minus");
    const plus = row.querySelector(".plus");
    const quantity = row.querySelector(".quantity");

    plus.addEventListener("click", () => {

        quantity.textContent = Number(quantity.textContent) + 1;

        updateCart();

    });

    minus.addEventListener("click", () => {

        let value = Number(quantity.textContent);

        if (value > 1) {

            quantity.textContent = value - 1;

            updateCart();

        }

    });

});

// ==============================
// Remove Item
// ==============================

const removeButtons = document.querySelectorAll(".remove");

removeButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (confirm("Remove this product from cart?")) {

            button.closest("tr").style.display = "none";

            updateCart();

        }

    });

});

// ==============================
// Checkout
// ==============================

checkoutBtn.addEventListener("click", () => {

    alert(
        "🎉 Thank you for shopping at MO's Area!\n\nYour order has been placed successfully."
    );

});

// ==============================
// Initial Calculation
// ==============================

updateCart();

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#6c63ff";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

console.log("MO's Area Cart Loaded Successfully!");