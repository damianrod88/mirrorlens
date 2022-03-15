let carts = document.querySelectorAll(".add-cart");
/* getDevices = async () => {
    const fetchResponse = await fetch(`http://localhost:3001/api/products`);
    const data = await fetchResponse.json();
    return data.data;
}; */
fetch(`http://localhost:3001/api/products`)
    .then(function (response) {
        return response.json();
    })
    .then(function (text) {
        for (let i = 0; i < carts.length; i++) {
            carts[i].addEventListener("click", function () {
                cartNumbers(text.data[i]);
                totalCost(text.data[i]);
            });
        }

        function onLoadCartNumbers() {
            let productNumbers = localStorage.getItem("cartNumbers");
            if (productNumbers) {
                document.querySelector(".cart span").textContent =
                    productNumbers;
            }
        }
        function cartNumbers(product) {
            console.log(product);
            let productNumbers = localStorage.getItem("cartNumbers");
            console.log(productNumbers);

            productNumbers = parseInt(productNumbers);
            console.log(typeof productNumbers);
            if (productNumbers) {
                localStorage.setItem("cartNumbers", productNumbers + 1);
                document.querySelector(".cart span").textContent =
                    productNumbers + 1;
            } else {
                localStorage.setItem("cartNumbers", 1);
                document.querySelector(".cart span").textContent = 1;
            }
            setItems(product);

            function setItems(product) {
                let cartItems = localStorage.getItem("productsInCart");
                cartItems = JSON.parse(cartItems);
                if (cartItems != null) {
                    if (cartItems[product.name] == undefined) {
                        cartItems = {
                            ...cartItems,
                            [product.name]: product,
                        };
                    }
                    cartItems[product.name].inCart += 1;
                } else {
                    product.inCart = 1;
                    cartItems = {
                        [product.name]: product,
                    };
                }
                localStorage.setItem(
                    "productsInCart",
                    JSON.stringify(cartItems)
                );
            }
        }
        function totalCost(product) {
            let cartCost = localStorage.getItem("totalCost");
            console.log(cartCost);
            if (cartCost != null) {
                cartCost = parseInt(cartCost);
                product.price = parseInt(product.price);
                localStorage.setItem("totalCost", cartCost + product.price);
            } else {
                localStorage.setItem("totalCost", product.price);
            }
        }
        /* let delete2 = document.querySelector("#idDelete"); */

        /* delete1.addEventListener("click", function () {
            e.closest('tr').remove();
                        window.location.reload()
        });
 */
        function displayCart() {
            let cartItems = localStorage.getItem("productsInCart");
            cartItems = JSON.parse(cartItems);
            let productContainer = document.querySelector("tbody");
            console.log(cartItems);
            let cartCost = localStorage.getItem("totalCost");
            let total = document.querySelector(".total");
            if (cartItems && productContainer) {
                productContainer.innerHTML = "";

                Object.values(cartItems).map((item) => {
                    productContainer.innerHTML += `
                    
					<tbody>
						<tr>
							<td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs"><img src=${
                                        item.imageProducts.image1
                                    } alt="..." class="img-responsive"/>
                                    
                                    </div>
									<div class="col-sm-10">
										<h4 class="nomargin">${item.name}</h4>
										<p>${item.description}</p>
									</div>
								</div>
							</td>
							<td class ="d-none">${item.id}</td>
							<td data-th="Price">${item.price}</td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value="${item.inCart}">
							</td>
							<td data-th="Subtotal" class="text-center">$${item.inCart * item.price}</td>
							<td class="actions" data-th="">
								
								<a href="#" class="btn btn-danger btn-sm" onClick = "delete1(this)"
                                id="idDelete"value= "${
                                    item.id
                                }"><i class="fa fa-trash-o"></i></a>								
							</td>
						</tr>
					</tbody>
					
                    
                `;

                    total.innerHTML = `<strong>Total $${cartCost}</strong>`;
                });
            } else {
                productContainer.innerHTML = "<h3>Tu carrito esta vacío</h2>";
            }
        }
        onLoadCartNumbers();
        displayCart();
    });
