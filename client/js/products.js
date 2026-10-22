/* =========================================================
   SMART STORE - PRODUCTS PAGE
========================================================= */


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let allProducts = [];

let filteredProducts = [];

let currentCategory = "All";

let currentSearch = "";

let currentSort = "default";


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


        return Array.isArray(cart)
            ? cart
            : [];

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
            "✅ Cart saved successfully:",
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
   UPDATE CART COUNT
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
   GET PRODUCT ID
========================================================= */

function getProductId(product) {

    if (!product) {

        return null;

    }


    /* -----------------------------------------
       MongoDB _id
    ----------------------------------------- */

    if (product._id) {

        /* Normal string ID */

        if (
            typeof product._id === "string"
        ) {

            return product._id;

        }


        /* MongoDB {$oid: "..."} */

        if (
            product._id.$oid
        ) {

            return product._id.$oid;

        }


        /* ObjectId-like value */

        return String(
            product._id
        );

    }


    /* -----------------------------------------
       Fallback ID
    ----------------------------------------- */

    if (product.id) {

        return String(
            product.id
        );

    }


    if (product.productId) {

        return String(
            product.productId
        );

    }


    return null;

}


/* =========================================================
   LOAD PRODUCTS FROM SERVER
========================================================= */

async function loadProducts() {

    const loadingMessage =
        document.getElementById(
            "loadingMessage"
        );


    const errorMessage =
        document.getElementById(
            "errorMessage"
        );


    const noProducts =
        document.getElementById(
            "noProducts"
        );


    if (loadingMessage) {

        loadingMessage.style.display =
            "block";

    }


    if (errorMessage) {

        errorMessage.style.display =
            "none";

    }


    if (noProducts) {

        noProducts.style.display =
            "none";

    }


    try {

        console.log(
            "🔄 Loading products..."
        );


        const response =
            await fetch(
                "/api/products"
            );


        console.log(
            "📡 Products API Status:",
            response.status
        );


        if (!response.ok) {

            throw new Error(
                "Failed to load products. Status: " +
                response.status
            );

        }


        const data =
            await response.json();


        console.log(
            "📦 Products API Response:",
            data
        );


        /* -----------------------------------------
           HANDLE DIFFERENT API RESPONSE FORMATS
        ----------------------------------------- */

        if (Array.isArray(data)) {

            allProducts =
                data;

        }

        else if (
            data.products &&
            Array.isArray(data.products)
        ) {

            allProducts =
                data.products;

        }

        else if (
            data.data &&
            Array.isArray(data.data)
        ) {

            allProducts =
                data.data;

        }

        else {

            allProducts = [];

        }


        console.log(
            "✅ Products loaded:",
            allProducts.length
        );


        /* -----------------------------------------
           CHECK PRODUCT IDs
        ----------------------------------------- */

        allProducts.forEach(
            function(product, index) {

                console.log(
                    "Product " +
                    (index + 1),
                    {
                        id:
                            getProductId(product),

                        name:
                            product.name,

                        price:
                            product.price
                    }
                );

            }
        );


        filteredProducts =
            [...allProducts];


        if (loadingMessage) {

            loadingMessage.style.display =
                "none";

        }


        applyFilters();

    }

    catch (error) {

        console.error(
            "❌ Product loading error:",
            error
        );


        if (loadingMessage) {

            loadingMessage.style.display =
                "none";

        }


        if (errorMessage) {

            errorMessage.style.display =
                "block";

        }

    }

}


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts(products) {

    const container =
        document.getElementById(
            "productsContainer"
        );


    const noProducts =
        document.getElementById(
            "noProducts"
        );


    const productCount =
        document.getElementById(
            "productCount"
        );


    if (!container) {

        console.error(
            "❌ productsContainer not found."
        );

        return;

    }


    container.innerHTML = "";


    /* -----------------------------------------
       PRODUCT COUNT
    ----------------------------------------- */

    if (productCount) {

        productCount.textContent =
            products.length +
            " Products Found";

    }


    /* -----------------------------------------
       NO PRODUCTS
    ----------------------------------------- */

    if (products.length === 0) {

        if (noProducts) {

            noProducts.style.display =
                "block";

        }

        return;

    }


    if (noProducts) {

        noProducts.style.display =
            "none";

    }


    /* -----------------------------------------
       CREATE PRODUCT CARDS
    ----------------------------------------- */

    products.forEach(
        function(product) {

            const productId =
                getProductId(product);


            const productName =
                product.name ||
                "Product";


            const price =
                Number(product.price) || 0;


            const image =
                product.image ||
                "images/placeholder.jpg";


            const brand =
                product.brand ||
                "";


            const category =
                product.category ||
                "";


            const rating =
                Number(product.rating) || 0;


            /* -----------------------------------------
               PRODUCT ID CHECK
            ----------------------------------------- */

            if (!productId) {

                console.error(
                    "❌ Product has no ID:",
                    product
                );

            }


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${image}"
                        alt="${productName}"
                        onerror="
                            this.src='images/placeholder.jpg'
                        "
                    >

                </div>


                <div class="product-info">

                    <p class="product-brand">
                        ${brand}
                    </p>


                    <h3>
                        ${productName}
                    </h3>


                    <p class="product-category">
                        ${category}
                    </p>


                    <div class="product-rating">

                        ⭐ ${rating}

                    </div>


                    <div class="product-bottom">

                        <span class="product-price">

                            ₹${price}

                        </span>


                        <button
                            type="button"
                            class="add-to-cart-btn"
                            data-id="${productId || ""}"
                            ${!productId ? "disabled" : ""}
                        >

                            🛒 Add to Cart

                        </button>

                    </div>

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );


    /* -----------------------------------------
       ADD TO CART BUTTON EVENTS
    ----------------------------------------- */

    const buttons =
        document.querySelectorAll(
            ".add-to-cart-btn"
        );


    buttons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const productId =
                        this.getAttribute(
                            "data-id"
                        );


                    console.log(
                        "🛒 Add button clicked:",
                        productId
                    );


                    if (!productId) {

                        alert(
                            "Product ID is missing."
                        );

                        return;

                    }


                    addToCart(
                        productId
                    );

                }
            );

        }
    );

}


/* =========================================================
   ADD PRODUCT TO CART
========================================================= */

function addToCart(productId) {

    console.log(
        "🛒 Adding product:",
        productId
    );


    /* -----------------------------------------
       FIND PRODUCT
    ----------------------------------------- */

    const product =
        allProducts.find(
            function(item) {

                const id =
                    getProductId(item);


                return String(id) ===
                    String(productId);

            }
        );


    if (!product) {

        console.error(
            "❌ Product not found:",
            productId
        );


        console.log(
            "Available products:",
            allProducts
        );


        alert(
            "Product not found."
        );

        return;

    }


    /* -----------------------------------------
       GET EXISTING CART
    ----------------------------------------- */

    const cart =
        getCart();


    console.log(
        "🛒 Cart before adding:",
        cart
    );


    /* -----------------------------------------
       CHECK WHETHER PRODUCT ALREADY EXISTS
    ----------------------------------------- */

    const existingProduct =
        cart.find(
            function(item) {

                const itemId =
                    item.productId ||
                    item._id ||
                    item.id;


                return String(itemId) ===
                    String(productId);

            }
        );


    /* -----------------------------------------
       PRODUCT ALREADY IN CART
    ----------------------------------------- */

    if (existingProduct) {

        existingProduct.quantity =
            (Number(
                existingProduct.quantity
            ) || 1) + 1;


        console.log(
            "➕ Quantity increased:",
            existingProduct
        );

    }


    /* -----------------------------------------
       NEW PRODUCT
    ----------------------------------------- */

    else {

        const newCartItem = {

            productId:
                productId,

            _id:
                productId,

            name:
                product.name ||
                "Product",

            brand:
                product.brand ||
                "",

            price:
                Number(product.price) || 0,

            image:
                product.image ||
                "images/placeholder.jpg",

            category:
                product.category ||
                "",

            rating:
                Number(product.rating) || 0,

            quantity: 1

        };


        cart.push(
            newCartItem
        );


        console.log(
            "✅ New product added:",
            newCartItem
        );

    }


    /* -----------------------------------------
       SAVE CART
    ----------------------------------------- */

    saveCart(
        cart
    );


    /* -----------------------------------------
       UPDATE CART COUNT
    ----------------------------------------- */

    updateCartCount();


    /* -----------------------------------------
       VERIFY LOCAL STORAGE
    ----------------------------------------- */

    console.log(
        "💾 localStorage cart:",
        localStorage.getItem("cart")
    );


    /* -----------------------------------------
       SUCCESS MESSAGE
    ----------------------------------------- */

    alert(
        product.name +
        " added to cart!"
    );

}


/* =========================================================
   SEARCH PRODUCTS
========================================================= */

function searchProducts() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    currentSearch =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    applyFilters();

}


/* =========================================================
   FILTER + SEARCH + SORT
========================================================= */

function applyFilters() {

    filteredProducts =
        allProducts.filter(
            function(product) {

                /* -----------------------------------------
                   CATEGORY
                ----------------------------------------- */

                const categoryMatch =
                    currentCategory === "All" ||
                    product.category ===
                        currentCategory;


                /* -----------------------------------------
                   PRODUCT NAME
                ----------------------------------------- */

                const name =
                    String(
                        product.name || ""
                    ).toLowerCase();


                /* -----------------------------------------
                   BRAND
                ----------------------------------------- */

                const brand =
                    String(
                        product.brand || ""
                    ).toLowerCase();


                /* -----------------------------------------
                   SEARCH
                ----------------------------------------- */

                const searchMatch =
                    currentSearch === "" ||
                    name.includes(
                        currentSearch
                    ) ||
                    brand.includes(
                        currentSearch
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    /* -----------------------------------------
       SORT LOW TO HIGH
    ----------------------------------------- */

    if (
        currentSort === "low"
    ) {

        filteredProducts.sort(
            function(a, b) {

                return (
                    Number(a.price || 0) -
                    Number(b.price || 0)
                );

            }
        );

    }


    /* -----------------------------------------
       SORT HIGH TO LOW
    ----------------------------------------- */

    else if (
        currentSort === "high"
    ) {

        filteredProducts.sort(
            function(a, b) {

                return (
                    Number(b.price || 0) -
                    Number(a.price || 0)
                );

            }
        );

    }


    /* -----------------------------------------
       SORT BY RATING
    ----------------------------------------- */

    else if (
        currentSort === "rating"
    ) {

        filteredProducts.sort(
            function(a, b) {

                return (
                    Number(b.rating || 0) -
                    Number(a.rating || 0)
                );

            }
        );

    }


    displayProducts(
        filteredProducts
    );

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

function setupCategoryButtons() {

    const buttons =
        document.querySelectorAll(
            ".category-btn"
        );


    buttons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    /* -----------------------------------------
                       REMOVE ACTIVE
                    ----------------------------------------- */

                    buttons.forEach(
                        function(btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* -----------------------------------------
                       ADD ACTIVE
                    ----------------------------------------- */

                    this.classList.add(
                        "active"
                    );


                    /* -----------------------------------------
                       GET CATEGORY
                    ----------------------------------------- */

                    currentCategory =
                        this.getAttribute(
                            "data-category"
                        );


                    applyFilters();

                }
            );

        }
    );

}


/* =========================================================
   SEARCH EVENT
========================================================= */

function setupSearch() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        function() {

            searchProducts();

        }
    );

}


/* =========================================================
   SORT EVENT
========================================================= */

function setupSort() {

    const sortProducts =
        document.getElementById(
            "sortProducts"
        );


    if (!sortProducts) {

        return;

    }


    sortProducts.addEventListener(
        "change",
        function() {

            currentSort =
                this.value;


            applyFilters();

        }
    );

}


/* =========================================================
   PAGE INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "🚀 Products page started"
        );


        /* -----------------------------------------
           LOAD EXISTING CART
        ----------------------------------------- */

        updateCartCount();


        /* -----------------------------------------
           SETUP SEARCH
        ----------------------------------------- */

        setupSearch();


        /* -----------------------------------------
           SETUP CATEGORIES
        ----------------------------------------- */

        setupCategoryButtons();


        /* -----------------------------------------
           SETUP SORT
        ----------------------------------------- */

        setupSort();


        /* -----------------------------------------
           LOAD PRODUCTS
        ----------------------------------------- */

        loadProducts();

    }
);