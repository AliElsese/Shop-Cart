const cart = JSON.parse(localStorage.getItem('cart')) || [];

let cartNumber = document.querySelector('.cart-number');
let cartCounter = document.querySelector('.cart-counter');
let cartSection = document.querySelector('.cart-section');
let cartTotal = document.querySelector('.cart-total');

function displayCart() {
    cartNumber.innerText = cart.length;
    cartCounter.innerText = `${cart.length} items`; 

    cartSection.innerHTML = '';

    cart.forEach((product, index) => {
        cartSection.innerHTML += `
            <div class="card-item d-flex justify-content-between align-items-center rounded-3 shadow-lg p-3 mb-4">
                <img class="rounded" src=${product.image} width="90">
                <p class="m-0 fw-bold">${product.name}</p>
                <div class="item-qty d-flex align-items-center gap-3">
                    <button class="fw-bold text-danger bg-transparent border-0" onClick="decreaseQuantity(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
                        </svg>
                    </button>
                    <h5 class="text-grey m-0">${product.qty}</h5>
                    <button class="fw-bold text-primary bg-transparent border-0" onClick="increaseQuantity(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z" />
                        </svg>
                    </button>
                </div>
                <div class="item-price d-flex align-items-center">
                    <h5 class="text-grey m-0">${product.price * product.qty} $</h5>
                </div>
                <button class="text-danger bg-transparent border-0" onClick="removeItem(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
                    </svg>
                </button>
            </div>
        `;
    });

    totalPrice();
};

function increaseQuantity(itemIndex) {
    cart[itemIndex].qty += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Your item increased in cart');
    displayCart();
};

function decreaseQuantity(itemIndex) {
    if(cart[itemIndex].qty == 1) {
        removeItem(itemIndex);
    }
    else {
        cart[itemIndex].qty -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Your item decreased in cart');
        displayCart();
    }
};

function removeItem(itemIndex) {
    cart.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Your item removed from cart');
    displayCart();
};

function totalPrice() {
    let sum = 0;

    cart.forEach((item) => {
        sum += (item.qty * item.price);
    })

    cartTotal.innerHTML = `
        <div class="d-flex justify-content-between align-items-center rounded-3 shadow-lg p-3">
            <h4 class="m-0 fw-bold">Total Price</h4>
            <div class="item-price d-flex align-items-center">
                <h5 class="text-grey m-0">${sum} $</h5>
            </div>
        </div>
    `
};

displayCart();