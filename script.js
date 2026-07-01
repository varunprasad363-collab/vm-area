// ================================
// MO's Area - script.js
// ================================

// Dark Mode Toggle
const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}

// ================================
// Cart Counter
// ================================

let cartCount = 0;

const cartNumber = document.getElementById("cart-count");
const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        if(cartNumber){
            cartNumber.textContent = cartCount;
        }

        alert("Product added to cart!");

    });

});

// ================================
// Product Search
// ================================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        let filter = this.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(card=>{

            let title = card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(filter)){
                card.style.display="block";
            }
            else{
                card.style.display="none";
            }

        });

    });

}

// ================================
// Newsletter
// ================================

const newsletterBtn=document.querySelector(".newsletter button");

if(newsletterBtn){

newsletterBtn.addEventListener("click",()=>{

let email=document.querySelector(".newsletter input").value;

if(email===""){
alert("Please enter your email.");
}
else{
alert("Thank you for subscribing to MO's Area!");
document.querySelector(".newsletter input").value="";
}

});

}

// ================================
// Scroll To Top Button
// ================================

const scrollBtn=document.createElement("button");

scrollBtn.innerHTML="↑";

scrollBtn.id="scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.style.position="fixed";
scrollBtn.style.bottom="20px";
scrollBtn.style.right="20px";
scrollBtn.style.width="50px";
scrollBtn.style.height="50px";
scrollBtn.style.border="none";
scrollBtn.style.borderRadius="50%";
scrollBtn.style.background="#6c63ff";
scrollBtn.style.color="white";
scrollBtn.style.fontSize="22px";
scrollBtn.style.cursor="pointer";
scrollBtn.style.display="none";
scrollBtn.style.zIndex="1000";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){
scrollBtn.style.display="block";
}
else{
scrollBtn.style.display="none";
}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ================================
// Hero Button Animation
// ================================

const heroBtn=document.querySelector(".btn");

if(heroBtn){

heroBtn.addEventListener("mouseenter",()=>{

heroBtn.style.transform="scale(1.08)";

});

heroBtn.addEventListener("mouseleave",()=>{

heroBtn.style.transform="scale(1)";

});

}

// ================================
// Welcome Message
// ================================

window.addEventListener("load",()=>{

console.log("Welcome to MO's Area");

});

// ================================
// Footer Year
// ================================

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} MO's Area. All Rights Reserved.`;

}