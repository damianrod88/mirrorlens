window.onload = function () {
    let name = document.querySelector("#name");
    name.focus();

    let form = document.querySelector("form.create-form");
    form.addEventListener("submit", function (e) {
        let brand = document.querySelector("#brand_id");
        let img = document.querySelector("#img");
        let type = document.querySelector("#type_id_0");
        let type1 = document.querySelector("#type_id_1");
        let model = document.querySelector("#model");
        let gender = document.querySelector("#gender_id");
        let borderColor = document.querySelector("#border_color");
        let glassColor = document.querySelector("#glass_color");
        let price = document.querySelector("#price");
        let description = document.querySelector("#description");
        let btn = document.querySelector("button.button-form");
        let errors = [];

        if (name.value.trim() == "") {
            name.classList.add("is-invalid");
            errors.push("El nombre es obligatorio");
        } else {
            name.classList.replace("is-invalid", "is-valid");
        }

        if (img.value == "") {
            img.classList.add("is-invalid");
            errors.push("Sube las imágenes");
        } else if (img.files.length != 3) {
            errors.push("Sube 3 imágenes");
            img.classList.add("is-invalid");
        } else {
            img.classList.replace("is-invalid", "is-valid");
        }

        if (!(type.checked || type1.checked)) {
            type.classList.add("is-invalid");
            type1.classList.add("is-invalid");
            errors.push("Selecciona un tipo de lente");
        } else {
            type.classList.replace("is-invalid", "is-valid");
            type1.classList.replace("is-invalid", "is-valid");
        }

        if (model.value.trim() == "") {
            model.classList.add("is-invalid");
            errors.push("Escribe el modelo de lente");
        } else {
            model.classList.replace("is-invalid", "is-valid");
        }
        if (brand.value == "") {
            brand.classList.add("is-invalid");
            errors.push("Selecciona la marca");
        } else {
            brand.classList.replace("is-invalid", "is-valid");
        }
        if (gender.value == "") {
            gender.classList.add("is-invalid");
            errors.push("Selecciona el género");
        } else {
            gender.classList.replace("is-invalid", "is-valid");
        }

        if (borderColor.value.trim() == "") {
            borderColor.classList.add("is-invalid");
            errors.push("Escribe el color del borde");
        } else {
            borderColor.classList.replace("is-invalid", "is-valid");
        }

        if (glassColor.value.trim() == "") {
            glassColor.classList.add("is-invalid");
            errors.push("Escribe el color del lente");
        } else {
            glassColor.classList.replace("is-invalid", "is-valid");
        }
        if (price.value == "") {
            price.classList.add("is-invalid");
            errors.push("Escribe un precio");
        } else if (/\D/.test(price.value)) {
            errors.push("Escribe un valor numérico");
            img.classList.add("is-invalid");
        } else {
            price.classList.replace("is-invalid", "is-valid");
        }
        if (description.value.trim() == "") {
            description.classList.add("is-invalid");
            errors.push("Escribe una breve descripción");
        } else {
            description.classList.replace("is-invalid", "is-valid");
        }
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
