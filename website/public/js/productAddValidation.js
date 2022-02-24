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

        let type = document.querySelector("#type_id");

        /*if (!type.checked) {
            type.classList.add("is-invalid");
            errors.push("Selecciona un tipo de lente");
        } else {
            type.classList.replace("is-invalid", "is-valid");
        }*/

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

        /*
        let awards = document.querySelector("#awards");
        if (awards.value == "") {
            awards.classList = "is-invalid";
            errors.push("Los premios son obligatorios");
        } else if (awards.value.length > 10) {
            errors.push("Los premios deben contener menos de 10 carácteres");
            awards.classList = "is-invalid";
        } else {
            awards.classList = "is-valid";
        }
        let releaseDate = document.querySelector("#release_date");
        if (releaseDate.value == "") {
            errors.push("La fecha es obligatoria");
        }
        let length = document.querySelector("#length");
        if (length.value == "") {
            length.classList = "is-invalid";
            errors.push("La duración es obligatoria");
        } else if (length.value < 60 || length.value > 360) {
            errors.push(
                "La duración tiene que estar comprendida entre 60 y 360 minutos"
            );
            length.classList = "is-invalid";
        } else {
            length.classList = "is-valid";
        }
        let genre = document.querySelector("#genre_id");
        if (genre.value == "") {
            errors.push("El género es obligatorio");
        }*/
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector("ul.errors");
            ulErrors.classList.add("alert-warning");
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            }
            let btn = document.querySelector("button.button-form");
            btn.onclick = function () {
                ulErrors.innerHTML = "";
            };
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Se creo correctamente",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    });
};
