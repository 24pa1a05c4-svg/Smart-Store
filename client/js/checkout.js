// ==========================================
// SMART STORE - CHECKOUT
// ==========================================

const checkoutForm =
    document.getElementById(
        "checkoutForm"
    );


// ==========================================
// LOAD CHECKOUT CART
// ==========================================

async function getCart() {

    const token =
        localStorage.getItem(
            "token"
        );


    if (!token) {

        return null;

    }


    const response =
        await fetch(
            "/api/cart",
            {

                method: "GET",

                headers: {

                    "Authorization":
                        `Bearer ${token}`

                }

            }
        );


    const data =
        await response.json();


    console.log(
        "========== CART RESPONSE =========="
    );


    console.log(data);


    if (
        response.status === 401
    ) {

        localStorage.removeItem(
            "token"
        );


        localStorage.removeItem(
            "user"
        );


        return null;

    }


    if (!response.ok) {

        throw new Error(
            data.message ||
            "Unable to load cart."
        );

    }


    return Array.isArray(data.cart)
        ? data.cart
        : [];

}


// ==========================================
// LOAD CHECKOUT SUMMARY
// ==========================================

async function loadCheckoutSummary() {

    try {

        const cart =
            await getCart();


        if (!cart) {

            window.location.href =
                "login.html";


            return null;

        }


        let subtotal = 0;


        cart.forEach(item => {

            if (!item.product) {

                return;

            }


            const price =
                Number(
                    item.product.price
                ) || 0;


            const quantity =
                Number(
                    item.quantity
                ) > 0
                    ? Number(item.quantity)
                    : 1;


            subtotal +=
                price * quantity;

        });


        const delivery =
            cart.length > 0
                ? 40
                : 0;


        const total =
            subtotal +
            delivery;


        const subtotalElement =
            document.getElementById(
                "subtotal"
            );


        const deliveryElement =
            document.getElementById(
                "delivery"
            );


        const totalElement =
            document.getElementById(
                "total"
            );


        if (subtotalElement) {

            subtotalElement.textContent =
                `₹${subtotal.toLocaleString(
                    "en-IN"
                )}`;

        }


        if (deliveryElement) {

            deliveryElement.textContent =
                `₹${delivery.toLocaleString(
                    "en-IN"
                )}`;

        }


        if (totalElement) {

            totalElement.textContent =
                `₹${total.toLocaleString(
                    "en-IN"
                )}`;

        }


        return {

            cart,

            subtotal,

            delivery,

            total

        };

    }

    catch (error) {

        console.error(
            "❌ CHECKOUT SUMMARY ERROR:",
            error
        );


        alert(
            error.message ||
            "Unable to load cart."
        );


        return null;

    }

}


// ==========================================
// CHECKOUT FORM
// ==========================================

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            // ==================================
            // LOGIN CHECK
            // ==================================

            const token =
                localStorage.getItem(
                    "token"
                );


            if (!token) {

                alert(
                    "Please login before placing an order."
                );


                window.location.href =
                    "login.html";


                return;

            }


            // ==================================
            // GET FORM VALUES
            // ==================================

            const name =
                document
                    .getElementById(
                        "name"
                    )
                    ?.value
                    .trim();


            const address =
                document
                    .getElementById(
                        "address"
                    )
                    ?.value
                    .trim();


            const phone =
                document
                    .getElementById(
                        "phone"
                    )
                    ?.value
                    .trim();


            // ==================================
            // VALIDATE NAME
            // ==================================

            if (
                !name ||
                name.length < 3
            ) {

                alert(
                    "Please enter a valid name."
                );


                return;

            }


            // ==================================
            // VALIDATE ADDRESS
            // ==================================

            if (
                !address ||
                address.length < 10
            ) {

                alert(
                    "Please enter a complete delivery address."
                );


                return;

            }


            // ==================================
            // VALIDATE PHONE
            // ==================================

            if (
                !/^[0-9]{10}$/.test(
                    phone
                )
            ) {

                alert(
                    "Please enter a valid 10-digit phone number."
                );


                return;

            }


            // ==================================
            // GET CART FROM MONGODB
            // ==================================

            let summary;


            try {

                summary =
                    await loadCheckoutSummary();

            }

            catch (error) {

                console.error(
                    error
                );


                return;

            }


            if (!summary) {

                return;

            }


            const cart =
                summary.cart;


            // ==================================
            // EMPTY CART
            // ==================================

            if (
                cart.length === 0
            ) {

                alert(
                    "Your cart is empty."
                );


                window.location.href =
                    "cart.html";


                return;

            }


            // ==================================
            // CREATE ORDER ITEMS
            // ==================================

            const items = [];


            for (
                const item of cart
            ) {

                console.log(
                    "Processing cart item:",
                    item
                );


                if (
                    !item.product ||
                    !item.product._id
                ) {

                    console.error(
                        "Invalid cart item:",
                        item
                    );


                    alert(
                        "One product in your cart is invalid. Please remove it and add the product again."
                    );


                    return;

                }


                const quantity =
                    Number(
                        item.quantity
                    ) > 0
                        ? Number(item.quantity)
                        : 1;


                items.push({

                    product:
                        item.product._id,

                    quantity:
                        quantity

                });

            }


            console.log(
                "========== ORDER ITEMS =========="
            );


            console.log(
                items
            );


            // ==================================
            // PAYMENT METHOD
            // ==================================

            const paymentElement =
                document.querySelector(
                    'input[name="payment"]:checked'
                );


            const paymentMethod =
                paymentElement
                    ? paymentElement.value
                    : "COD";


            // ==================================
            // PLACE ORDER
            // ==================================

            try {

                const orderResponse =
                    await fetch(
                        "/api/orders",
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "Authorization":
                                    `Bearer ${token}`

                            },

                            body:
                                JSON.stringify({

                                    items:

                                        items,

                                    totalPrice:

                                        summary.total,

                                    status:
                                        "Pending",

                                    shippingAddress:
                                        address,

                                    phone:
                                        phone,

                                    paymentMethod:
                                        paymentMethod

                                })

                        }
                    );


                const orderData =
                    await orderResponse.json();


                console.log(
                    "========== ORDER RESPONSE =========="
                );


                console.log(
                    orderData
                );


                // ==================================
                // AUTH ERROR
                // ==================================

                if (
                    orderResponse.status === 401
                ) {

                    localStorage.removeItem(
                        "token"
                    );


                    localStorage.removeItem(
                        "user"
                    );


                    alert(
                        "Your login session has expired. Please login again."
                    );


                    window.location.href =
                        "login.html";


                    return;

                }


                // ==================================
                // SUCCESS
                // ==================================

                if (
                    orderResponse.ok &&
                    orderData.success
                ) {

                    alert(
                        "🎉 Order Placed Successfully!"
                    );


                    window.location.href =
                        "order-success.html";


                    return;

                }


                // ==================================
                // ERROR
                // ==================================

                alert(
                    orderData.message ||
                    "Unable to place order."
                );

            }

            catch (error) {

                console.error(
                    "❌ CHECKOUT ERROR:",
                    error
                );


                alert(
                    error.message ||
                    "Unable to place order."
                );

            }

        }
    );

}


// ==========================================
// LOAD SUMMARY WHEN PAGE OPENS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadCheckoutSummary();

    }
);