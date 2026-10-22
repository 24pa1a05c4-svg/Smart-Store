/* =========================================================
   SMART STORE - SHOPPING CART
========================================================= */


/* =========================================================
   GET CART FROM LOCAL STORAGE
========================================================= */

function getCart() {

    try {

        const savedCart =
            localStorage.getItem("cart");


        if (!savedCart) {

            return [];

        }


        const cart =
            JSON.parse(savedCart);


        if (!Array.isArray(cart)) {

            return [];

        }


        return cart;

    }

    catch (error) {

        console.error(
            "❌ Unable to read cart:",
            error
        );

        return [];

    }

}


/* =========================================================
   SAVE CART TO LOCAL STORAGE
========================================================= */

function saveCart(cart) {

    try {

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );


        console.log(
            "✅ Cart saved:",
            cart
        );

    }

    catch (error) {

        console.error(
            "❌ Unable to save cart:",
            error
        );

    }

}


/* =========================================================
   UPDATE NAVIGATION CART COUNT
========================================================= */

function updateCartCount() {

    const cart =
        getCart();


    const totalQuantity =
        cart.reduce(
            function(total, item) {

                return total +
                    (Number(item.quantity) || 1);

            },
            0
        );


    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }


    console.log(
        "🛒 Cart quantity:",
        totalQuantity
    );

}


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {

    const amount =
        Number(price) || 0;


    return "₹" +
        amount.toLocaleString("en-IN");

}


/* =========================================================
   DISPLAY CART
========================================================= */

function displayCart() {

    console.log(
        "🛒 Loading cart..."
    );


    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const cartSubtotal =
        document.getElementById(
            "cartSubtotal"
        );


    const cartDelivery =
        document.getElementById(
            "cartDelivery"
        );


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    if (!cartItems) {

        console.error(
            "❌ cartItems element not found."
        );

        return;

    }


    /*
       GET CART FROM LOCAL STORAGE
    */

    const cart =
        getCart();


    console.log(
        "🛒 CART FROM LOCAL STORAGE:",
        cart
    );


    /*
       CLEAR CURRENT CART DISPLAY
    */

    cartItems.innerHTML = "";


    /*
       EMPTY CART
    */

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Your Cart is Empty
                </h2>

                <p>
                    You haven't added any products yet.
                </p>

                <a
                    href="products.html"
                    class="btn btn-primary"
                >
                    Continue Shopping
                </a>

            </div>

        `;


        if (cartSubtotal) {

            cartSubtotal.textContent =
                formatPrice(0);

        }


        if (cartDelivery) {

            cartDelivery.textContent =
                formatPrice(0);

        }


        if (cartTotal) {

            cartTotal.textContent =
                formatPrice(0);

        }


        updateCartCount();

        return;

    }


    /*
       CALCULATE SUBTOTAL
    */

    let subtotal = 0;


    /*
       DISPLAY EACH PRODUCT
    */

    cart.forEach(
        function(item, index) {

            const price =
                Number(item.price) || 0;


            const quantity =
                Number(item.quantity) || 1;


            const itemTotal =
                price * quantity;


            subtotal +=
                itemTotal;


            const productName =
                item.name ||
                "Product";


            const brand =
                item.brand ||
                "";


            const image =
                item.image ||
                "images/placeholder.jpg";


            const rating =
                Number(item.rating) || 0;


            const category =
                item.category ||
                "";


            /*
               CREATE CART ITEM
            */

            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${image}"
                        alt="${productName}"
                        onerror="
                            this.src='images/placeholder.jpg'
                        "
                    >

                </div>


                <div class="cart-item-details">

                    <h3>
                        ${productName}
                    </h3>


                    ${
                        brand
                        ? `
                            <p>
                                Brand:
                                ${brand}
                            </p>
                          `
                        : ""
                    }


                    ${
                        category
                        ? `
                            <p>
                                Category:
                                ${category}
                            </p>
                          `
                        : ""
                    }


                    ${
                        rating
                        ? `
                            <p>
                                ⭐ ${rating}
                            </p>
                          `
                        : ""
                    }


                    <p class="cart-item-price">

                        ${formatPrice(price)}

                    </p>


                    <div class="cart-item-actions">

                        <button
                            type="button"
                            class="quantity-btn decrease-btn"
                            data-index="${index}"
                        >
                            −
                        </button>


                        <span class="quantity">

                            ${quantity}

                        </span>


                        <button
                            type="button"
                            class="quantity-btn increase-btn"
                            data-index="${index}"
                        >
                            +
                        </button>


                        <button
                            type="button"
                            class="remove-cart-btn"
                            data-index="${index}"
                        >
                            🗑️ Remove
                        </button>

                    </div>

                </div>


                <div class="cart-item-total">

                    <strong>

                        ${formatPrice(itemTotal)}

                    </strong>

                </div>

            `;


            cartItems.appendChild(
                cartItem
            );

        }
    );


    /*
       DELIVERY CHARGE
    */

    const delivery =
        subtotal > 0
            ? 40
            : 0;


    /*
       TOTAL
    */

    const total =
        subtotal +
        delivery;


    /*
       UPDATE SUMMARY
    */

    if (cartSubtotal) {

        cartSubtotal.textContent =
            formatPrice(subtotal);

    }


    if (cartDelivery) {

        cartDelivery.textContent =
            formatPrice(delivery);

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total);

    }


    /*
       UPDATE CART COUNT
    */

    updateCartCount();


    /*
       SETUP BUTTONS
    */

    setupCartButtons();


    console.log(
        "✅ Cart displayed successfully."
    );

}


/* =========================================================
   SETUP CART BUTTONS
========================================================= */

function setupCartButtons() {

    /*
       INCREASE QUANTITY
    */

    const increaseButtons =
        document.querySelectorAll(
            ".increase-btn"
        );


    increaseButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const index =
                        Number(
                            this.getAttribute(
                                "data-index"
                            )
                        );


                    increaseQuantity(
                        index
                    );

                }
            );

        }
    );


    /*
       DECREASE QUANTITY
    */

    const decreaseButtons =
        document.querySelectorAll(
            ".decrease-btn"
        );


    decreaseButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const index =
                        Number(
                            this.getAttribute(
                                "data-index"
                            )
                        );


                    decreaseQuantity(
                        index
                    );

                }
            );

        }
    );


    /*
       REMOVE PRODUCT
    */

    const removeButtons =
        document.querySelectorAll(
            ".remove-cart-btn"
        );


    removeButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const index =
                        Number(
                            this.getAttribute(
                                "data-index"
                            )
                        );


                    removeFromCart(
                        index
                    );

                }
            );

        }
    );

}


/* =========================================================
   INCREASE QUANTITY
========================================================= */

function increaseQuantity(index) {

    const cart =
        getCart();


    if (!cart[index]) {

        return;

    }


    cart[index].quantity =
        (Number(
            cart[index].quantity
        ) || 1) + 1;


    saveCart(cart);


    displayCart();

}


/* =========================================================
   DECREASE QUANTITY
========================================================= */

function decreaseQuantity(index) {

    const cart =
        getCart();


    if (!cart[index]) {

        return;

    }


    const currentQuantity =
        Number(
            cart[index].quantity
        ) || 1;


    if (currentQuantity > 1) {

        cart[index].quantity =
            currentQuantity - 1;

    }

    else {

        /*
           Remove item if quantity
           becomes zero.
        */

        cart.splice(
            index,
            1
        );

    }


    saveCart(cart);


    displayCart();

}


/* =========================================================
   REMOVE PRODUCT
========================================================= */

function removeFromCart(index) {

    const cart =
        getCart();


    if (!cart[index]) {

        return;

    }


    const productName =
        cart[index].name ||
        "Product";


    const confirmRemove =
        confirm(
            "Remove " +
            productName +
            " from your cart?"
        );


    if (!confirmRemove) {

        return;

    }


    cart.splice(
        index,
        1
    );


    saveCart(cart);


    displayCart();


    console.log(
        "🗑️ Product removed:",
        productName
    );

}


/* =========================================================
   PAGE INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "🚀 Cart page started"
        );


        /*
           UPDATE CART COUNT
        */

        updateCartCount();


        /*
           DISPLAY CART
        */

        displayCart();

    }
);