const cart = JSON.parse(localStorage.getItem('cart')) || [];

let cartNumber = document.querySelector('.cart-number');
let productsSection = document.querySelector('.products-section');

const products = [
    {
        name: 'item 1',
        price: 100,
        image: './images/t-shirt1.jpg'
    },
    {
        name: 'item 2',
        price: 120,
        image: './images/t-shirt2.jpg'
    },
    {
        name: 'item 3',
        price: 130,
        image: './images/t-shirt3.jpg'
    },
    {
        name: 'item 4',
        price: 140,
        image: './images/t-shirt8.jpg'
    },
    {
        name: 'item 5',
        price: 150,
        image: './images/t-shirt5.webp'
    },
    {
        name: 'item 6',
        price: 160,
        image: './images/t-shirt1.jpg'
    },
    {
        name: 'item 7',
        price: 170,
        image: './images/t-shirt2.jpg'
    },
    {
        name: 'item 8',
        price: 180,
        image: './images/t-shirt3.jpg'
    },
    {
        name: 'item 9',
        price: 190,
        image: './images/t-shirt8.jpg'
    },
    {
        name: 'item 10',
        price: 115,
        image: './images/t-shirt5.webp'
    },
    {
        name: 'item 11',
        price: 125,
        image: './images/t-shirt1.jpg'
    },
    {
        name: 'item 12',
        price: 155,
        image: './images/t-shirt2.jpg'
    },
    {
        name: 'item 13',
        price: 168,
        image: './images/t-shirt3.jpg'
    },
    {
        name: 'item 14',
        price: 192,
        image: './images/t-shirt8.jpg'
    },
    {
        name: 'item 15',
        price: 143,
        image: './images/t-shirt5.webp'
    }
];

function showProducts() {
    cartNumber.innerText = cart.length;

    products.forEach((product, index) => {
        productsSection.innerHTML += `
            <div class="col">
                <div class="card ">
                    <img src=${product.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price} $</p>
                        <button class="btn btn-primary" onClick="addToCart(${index})">Add To Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
};

function addToCart(productIndex) {
    let product = products.find((product, index) => {
        return index === productIndex;
    });
    
    const existingProduct = cart.findIndex((item) => {
        return item.name === product.name
    });

    if(existingProduct > -1) {
        cart[existingProduct].qty += 1;
        alert('Your item quantity increased');
    }
    else {
        product.qty = 1;
        cart.push(product);
        alert('Your item added to cart');
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    cartNumber.innerText = cart.length;
};

showProducts();