window.onload = function () {
    let minusButton = document.getElementsByClassName("cart-minus");
    for (let i = 0; i < minusButton.length; i++) {
        let button = minusButton[i];

        button.addEventListener("click", function () {
            let productNumbers = localStorage.getItem("cartNumbers");
            let cartItems = localStorage.getItem("productsInCart");
            let cartCost = localStorage.getItem("totalCost");
            cartItems = JSON.parse(cartItems);
            cartCost = parseInt(cartCost);
            productNumbers = parseInt(productNumbers);
            let item = Object.values(cartItems);

            for (let i = 0; i < item.length; i++) {
                let newItem = item[i];

                if (newItem.inCart > 1 && button.id == newItem.id) {
                    newItem.inCart -= 1;

                    localStorage.setItem(
                        "totalCost",
                        cartCost - parseInt(newItem.price)
                    );
                    localStorage.setItem("cartNumbers", productNumbers - 1);
                    window.location.reload();
                }
            }

            localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        });
    }

    let plusButton = document.getElementsByClassName("cart-plus");
    for (let i = 0; i < plusButton.length; i++) {
        let button = plusButton[i];

        button.addEventListener("click", function () {
            let productNumbers = localStorage.getItem("cartNumbers");
            let cartItems = localStorage.getItem("productsInCart");
            let cartCost = localStorage.getItem("totalCost");
            cartItems = JSON.parse(cartItems);
            cartCost = parseInt(cartCost);
            productNumbers = parseInt(productNumbers);
            let item = Object.values(cartItems);

            for (let i = 0; i < item.length; i++) {
                let newItem = item[i];
                if (button.id == newItem.id) {
                    newItem.inCart += 1;

                    localStorage.setItem(
                        "totalCost",
                        cartCost + parseInt(newItem.price)
                    );
                    localStorage.setItem("cartNumbers", productNumbers + 1);
                    window.location.reload();
                }
            }

            localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        });
    }
    let iDelete = document.getElementsByClassName("idelete");
    for (let i = 0; i < iDelete.length; i++) {
        let button = iDelete[i];
        button.addEventListener("click", function (e) {
            e.preventDefault();
            Swal.fire({
                title: "¿Estás seguro?",

                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, borralo!",
            }).then((result) => {
                if (result.isConfirmed) {
                    let items = [];

                    let productNumbers = localStorage.getItem("cartNumbers");
                    let cartItems = localStorage.getItem("productsInCart");
                    let cartCost = localStorage.getItem("totalCost");

                    items.price = parseInt(items.price);
                    cartItems = JSON.parse(cartItems);
                    let item = Object.values(cartItems);
                    for (let i = 0; i < item.length; i++) {
                        let newItem = item[i];
                        if (button.id != newItem.id) {
                            items.push(item[i]);
                        } else if (button.id == newItem.id) {
                            localStorage.setItem(
                                "totalCost",
                                cartCost - newItem.price * newItem.inCart
                            );
                            localStorage.setItem(
                                "cartNumbers",
                                productNumbers - newItem.inCart
                            );
                        }
                    }

                    localStorage.setItem(
                        "productsInCart",
                        JSON.stringify(items)
                    );
                    Swal.fire(
                        "Eliminado!",
                        "Tu producto fue eliminado del carrito.",
                        "success"
                    ).then(function () {
                        window.location.reload();
                    });
                }
            });
        });
    }
};
