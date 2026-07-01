// =====================================
// MO's Area - products.js
// =====================================

// Cart Counter
let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");

// Add to Cart Buttons
const cartButtons = document.querySelectorAll(".card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        if (cartDisplay) {
            cartDisplay.textContent = cartCount;
        }

        button.innerHTML = "✓ Added";
        button.style.background = "#16a34a";

        setTimeout(() => {
            button.innerHTML = "Add to Cart";
            button.style.background = "#6c63ff";
        }, 1200);

    });

});

// =============================
// Product Search
// =============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// =============================
// Category Filter
// =============================

function filterProducts(category) {

    const products = document.querySelectorAll(".card");

    products.forEach(product => {

        if (category === "all") {

            product.style.display = "block";

        } else {

            if (product.classList.contains(category)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        }

    });

}

// =============================
// Wishlist
// =============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    const heart = document.createElement("i");

    heart.className = "fa-regular fa-heart";

    heart.style.position = "absolute";
    heart.style.top = "15px";
    heart.style.right = "15px";
    heart.style.fontSize = "22px";
    heart.style.cursor = "pointer";
    heart.style.color = "#555";

    card.style.position = "relative";

    card.appendChild(heart);

    heart.addEventListener("click", () => {

        if (heart.classList.contains("fa-regular")) {

            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");

            heart.style.color = "red";

        } else {

            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");

            heart.style.color = "#555";

        }

    });

});

// =============================
// Product Hover Effect
// =============================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// =============================
// Welcome Message
// =============================

console.log("Welcome to MO's Area Products Page");

// =============================
// Scroll To Top Button
// =============================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#6c63ff";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});