window.onload = function () {
    let name = document.querySelector("#name");
    name.focus();

    getDevices = async (email) => {
        const fetchResponse = await fetch(
            `http://localhost:3001/api/users/email?email=${email}`
        );
        const data = await fetchResponse.json();
        return data;
    };

    let form = document.querySelector("form.create-form");
    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        let img = document.querySelector("#img");
        let email = document.querySelector("#email");
        let direction = document.querySelector("#direction");
        let repassword = document.querySelector("#repassword");
        let password = document.querySelector("#password");
        let btn = document.querySelector("button.button-form");
        const pattern =
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let errors = [];

        if (name.value.trim() == "") {
            name.classList.add("is-invalid");
            errors.push("El nombre es obligatorio");
        } else {
            name.classList.replace("is-invalid", "is-valid");
        }

        if (img.value == "") {
            img.classList.add("is-invalid");
            errors.push("Sube un imágen");
        } else {
            img.classList.replace("is-invalid", "is-valid");
        }

        if (email.value == "") {
            email.classList.add("is-invalid");
            errors.push("Escribe un email");
        } else if (!email.value.match(re)) {
            email.classList.add("is-invalid");
            errors.push("Escribe un email válido");
        } else if ((await getDevices(email.value)).data !== null) {
            email.classList.add("is-invalid");
            errors.push("Ya está registrado ese correo");
        } else {
            email.classList.replace("is-invalid", "is-valid");
        }

        if (direction.value.trim() == "") {
            direction.classList.add("is-invalid");
            errors.push("Escribe tu dirección");
        } else {
            direction.classList.replace("is-invalid", "is-valid");
        }

        if (password.value == "" && repassword.value == "") {
            password.classList.add("is-invalid");
            repassword.classList.add("is-invalid");
            errors.push("Escribe tu contraseña");
            errors.push("Confirma la contraseña");
        } else if (!pattern.test(password.value)) {
            password.classList.add("is-invalid");
            errors.push(
                "La contraseña debe tener un mínimo de 8 carácteres incluyendo un número, una minúscula, una mayúscula y un caracter especial."
            );
        } else if (password.value != repassword.value) {
            password.classList.add("is-invalid");
            errors.push("Las contraseñas no son iguales");
        } else {
            password.classList.replace("is-invalid", "is-valid");
            repassword.classList.replace("is-invalid", "is-valid");
        }

        if (errors.length > 0) {
            console.log(errors);

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
                    `Bienvenido ${name.value}!`,
                    "Gracias por registrarte!",
                    "success"
                ).then(() => {
                    form.submit();
                });
            }
        }
    });
};
