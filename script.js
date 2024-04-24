let productImage = document.querySelector(".product-image img");
let thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        thumbnails.forEach((thumb) => {
            thumb.classList.remove("active");
        });
        thumb.classList.add("active");
        productImage.src = thumb.src;
    });
});

let percentOff = document.querySelector("#percent-off");
let percent = parseInt(((19999 - 12999) / 19999) * 100);
percentOff.textContent = `${percent}% Off`;

let colorSelectorDivs = document.querySelectorAll(".color-selector div");
colorSelectorDivs.forEach((div) => {
    div.addEventListener("click", () => {
        colorSelectorDivs.forEach((div) => {
            div.classList.remove("active-color");
            div.innerHTML = "";
        });
        div.classList.add("active-color");
        let outColor = div.style.backgroundColor;
        div.style.outlineColor = outColor;
        div.innerHTML = `<i class="bi bi-check2"></i>`;
    });
});

let sizeSelectorDivs = document.querySelectorAll(".size-selector div");
let inputRadios = document.querySelectorAll('input[type="radio"]');
inputRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        inputRadios.forEach((r) => {
            r.parentNode.classList.remove("active-size");
            r.parentNode.style.color = "";
            r.parentNode.style.backgroundColor = "";
        });
        if (radio.checked) {
            radio.parentNode.classList.add("active-size");
            radio.parentNode.style.color = "rgb(58 73 128)";
            radio.parentNode.style.backgroundColor = "rgb(237 240 248)";
        }
    });
});

let valueSpan = document.getElementById("value");
function increment() {
    valueSpan.textContent = parseInt(valueSpan.textContent) + 1;
}
function decrement() {
    if (parseInt(valueSpan.textContent) > 1) {
        valueSpan.textContent = parseInt(valueSpan.textContent) - 1;
    }
}

let colors = {
    "rgb(236, 222, 204)": "Yellow",
    "rgb(187, 210, 120)": "Green",
    "rgb(187, 193, 248)": "Blue",
    "rgb(255, 211, 248)": "Pink"
}
function AddToCart() {
    let cartAdded = document.getElementById('cart-added');
    let color = document.querySelector('.active-color').style.backgroundColor;
    let size = document.querySelector('input[name="size"]:checked').value;
    color = colors[color];
    cartAdded.style.display = "block";
    cartAdded.innerText = `Embrace Sideboard with Color ${color} and Size ${size} added to cart`;
}