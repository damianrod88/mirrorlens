window.onload = function () {
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
            errors.push("Sube un imágen");
        } else {
            img.classList.replace("is-invalid", "is-valid");
        }

        let email = document.querySelector("#email");
        if (email.value == "") {
            email.classList.add("is-invalid");
            errors.push("Escribe un email");
        } else {
            email.classList.replace("is-invalid", "is-valid");
        }
        let direction = document.querySelector("#direction");
        if (direction.value == "") {
            direction.classList.add("is-invalid");
            errors.push("Escribe tu dirección");
        } else {
            direction.classList.replace("is-invalid", "is-valid");
        }
        let repassword = document.querySelector("#repassword");
        let password = document.querySelector("#password");
        if (password.value == "" && repassword.value == "") {
            password.classList.add("is-invalid");
            repassword.classList.add("is-invalid");
            errors.push("Escribe tu contraseña");
            errors.push("Confirma la contraseña");
        } else if (password.value != repassword.value) {
            password.classList.add("is-invalid");
            errors.push("Las contraseñas no son iguales");
        } else {
            password.classList.replace("is-invalid", "is-valid");
            repassword.classList.replace("is-invalid", "is-valid");
        }

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
