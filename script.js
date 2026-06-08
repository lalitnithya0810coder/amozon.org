/* ==========================
   HERO IMAGE SLIDER
========================== */

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 4000);

/* ==========================
   CART FUNCTIONALITY
========================== */

let cartCount = 0;

function addToCart(){

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    let cartItems = document.getElementById("cart-items");

    if(cartCount === 1){
        cartItems.innerHTML = "";
    }

    let item = document.createElement("p");

    item.innerHTML = "🛍 Product " + cartCount;

    item.style.marginBottom = "10px";

    cartItems.appendChild(item);

    alert("Product Added To Cart!");
}

/* ==========================
   CART SIDEBAR
========================== */

function openCart(){

    document
    .getElementById("cart-sidebar")
    .classList.add("active");
}

function closeCart(){

    document
    .getElementById("cart-sidebar")
    .classList.remove("active");
}

/* ==========================
   SEARCH PRODUCTS
========================== */

function searchProducts(){

    let input =
    document
    .getElementById("search")
    .value
    .toLowerCase();

    let cards =
    document.querySelectorAll(".product-card");

    cards.forEach(card => {

        let title =
        card.querySelector("h3")
        .innerText
        .toLowerCase();

        if(title.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }

    });
}

/* ==========================
   DARK / LIGHT MODE
========================== */

function toggleTheme(){

    document.body.classList.toggle("light");

    let btn =
    document.querySelector(".theme-btn");

    if(document.body.classList.contains("light")){

        btn.innerHTML = "☀️";

    }else{

        btn.innerHTML = "🌙";
    }
}

/* ==========================
   DEAL COUNTDOWN TIMER
========================== */

let dealEndDate =
new Date("December 31, 2026 23:59:59").getTime();

let countdown = setInterval(() => {

    let now = new Date().getTime();

    let distance =
    dealEndDate - now;

    let days =
    Math.floor(
    distance /
    (1000 * 60 * 60 * 24)
    );

    let hours =
    Math.floor(
    (distance %
    (1000 * 60 * 60 * 24))
    /
    (1000 * 60 * 60)
    );

    let minutes =
    Math.floor(
    (distance %
    (1000 * 60 * 60))
    /
    (1000 * 60)
    );

    let seconds =
    Math.floor(
    (distance %
    (1000 * 60))
    /
    1000
    );

    document.getElementById("timer")
    .innerHTML =
    days + "d : " +
    hours + "h : " +
    minutes + "m : " +
    seconds + "s";

    if(distance < 0){

        clearInterval(countdown);

        document.getElementById("timer")
        .innerHTML = "DEAL EXPIRED";
    }

},1000);

/* ==========================
   BACK TO TOP BUTTON
========================== */

let topBtn =
document.getElementById("topBtn");

window.onscroll = function(){

    if(
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }
};

function topFunction(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });
}

/* ==========================
   WISHLIST BUTTONS
========================== */

let wishButtons =
document.querySelectorAll(".wish");

wishButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.classList.contains("active")){

            button.classList.remove("active");

            button.innerHTML = "❤️";

        }else{

            button.classList.add("active");

            button.innerHTML = "💖";
        }

    });

});

/* ==========================
   NEWSLETTER SUBSCRIBE
========================== */

let newsletterBtn =
document.querySelector(".newsletter button");

newsletterBtn.addEventListener("click", () => {

    let email =
    document.querySelector(".newsletter input")
    .value;

    if(email === ""){

        alert("Please enter your email.");

        return;
    }

    alert(
    "Thank you for subscribing!\n" +
    email
    );

    document.querySelector(
    ".newsletter input"
    ).value = "";
});

/* ==========================
   PRODUCT HOVER EFFECT
========================== */

let products =
document.querySelectorAll(".product-card");

products.forEach(product => {

    product.addEventListener("mouseenter", () => {

        product.style.transform =
        "translateY(-15px) scale(1.03)";
    });

    product.addEventListener("mouseleave", () => {

        product.style.transform =
        "translateY(0) scale(1)";
    });

});

/* ==========================
   PAGE LOADED MESSAGE
========================== */

window.addEventListener("load", () => {

    console.log(
    "Shop Clone Pro Loaded Successfully!"
    );

});