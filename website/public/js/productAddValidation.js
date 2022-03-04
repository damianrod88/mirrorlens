window.onload = function () {
    let brand = document.querySelector("#brand_id");
    let name = document.querySelector("#name");
    name.focus();

    let form = document.querySelector("form.create-form");
    form.addEventListener("submit", function (e) {
        let errors = [];

        if (name.value == "") {
            name.classList.add("is-invalid");
            errors.push("El nombre es obligatorio");
        } else {
            name.classList.replace("is-invalid", "is-valid");
        }

        let img = document.querySelector("#img");
        if (img.value == "") {
            img.classList.add("is-invalid");
            errors.push("Sube las imágenes");
        } else if (img.files.length != 3) {
            errors.push("Sube 3 imágenes");
            img.classList.add("is-invalid");
        } else {
            img.classList.replace("is-invalid", "is-valid");
        }

        let type = document.querySelector("#type_id_0");
        let type1 = document.querySelector("#type_id_1");

        if (!(type.checked || type1.checked)) {
            type.classList.add("is-invalid");
            type1.classList.add("is-invalid");
            errors.push("Selecciona un tipo de lente");
        } else {
            type.classList.replace("is-invalid", "is-valid");
            type1.classList.replace("is-invalid", "is-valid");
        }

        let model = document.querySelector("#model");
        if (model.value == "") {
            model.classList.add("is-invalid");
            errors.push("Escribe el modelo de lente");
        } else {
            model.classList.replace("is-invalid", "is-valid");
        }
        let gender = document.querySelector("#gender_id");
        if (gender.value == "") {
            gender.classList.add("is-invalid");
            errors.push("Selecciona el género");
        } else {
            gender.classList.replace("is-invalid", "is-valid");
        }

        if (brand.value == "") {
            brand.classList.add("is-invalid");
            errors.push("Selecciona la marca");
        } else {
            brand.classList.replace("is-invalid", "is-valid");
        }

        let borderColor = document.querySelector("#border_color");
        if (borderColor.value == "") {
            borderColor.classList.add("is-invalid");
            errors.push("Escribe el color del borde");
        } else {
            borderColor.classList.replace("is-invalid", "is-valid");
        }

        let glassColor = document.querySelector("#glass_color");
        if (glassColor.value == "") {
            glassColor.classList.add("is-invalid");
            errors.push("Escribe el color del lente");
        } else {
            glassColor.classList.replace("is-invalid", "is-valid");
        }
        let price = document.querySelector("#price");
        if (price.value == "") {
            price.classList.add("is-invalid");
            errors.push("Escribe un precio");
        } else if (/\D/.test(price.value)) {
            errors.push("Escribe un valor numérico");
            img.classList.add("is-invalid");
        } else {
            price.classList.replace("is-invalid", "is-valid");
        }
        let description = document.querySelector("#description");
        if (description.value == "") {
            description.classList.add("is-invalid");
            errors.push("Escribe una breve descripción");
        } else {
            description.classList.replace("is-invalid", "is-valid");
        }
        let btn = document.querySelector("button.button-form");
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector("ul.errors");
            ulErrors.classList.add("alert-warning");
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            }

            btn.onclick = function () {
                ulErrors.innerHTML = "";
            };
        } else {
            btn.onclick = alert();
            function alert() {
                e.preventDefault();
                Swal.fire(
                    "Excelente!",
                    `Se guardó ${name.value}`,
                    "success"
                ).then(() => {
                    form.submit();
                });
            }
        }
    });
};
