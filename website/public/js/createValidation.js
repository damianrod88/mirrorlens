window.onload = function () {
    let name = document.querySelector("#name");
    name.focus();

    let form = document.querySelector("form.create-form");
    form.addEventListener("submit", function (e) {
        let email = document.querySelector("#email");
        let errors = [];
        const url = `http://localhost:3001/api/users/email?email=${email.value}`;
        /* fetch(url)
            .then((res) => res.json())
            .then(function (res) {
                if (res.data !== null) {
                    errors.push("ya hay un usuario");
                }
            }) */

        /*  fetch(`http://localhost:3001/api/users/email?email=${email.value}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (mail) {
                let errores = [];
                let user = mail.data;
                if (user !== null) {
                    errores.push(
                        "Ya hay un usuario registrado con este correo electrónico"
                    );
                    errors.push(errores[0]);
                    console.log(errors);
                }
            }); */
        /* fetch("http://localhost:3001/api/users/?page=0&limit=1000")
            .then(function (response) {
                return response.json();
            })
            .then(function (mail) {
                console.log(mail.data);
                let mailDb = mail.data;

                for (let i = 0; i < mailDb.length; i++) {
                    if (email.value == mailDb[i].email) {
                        email.classList.add("is-invalid");
                        errors.push("El mail ya está registrado");
                    }
                }

                console.log(errors);
            });
 */

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

        if (email.value == "") {
            email.classList.add("is-invalid");
            errors.push("Escribe un email");
        } else {
            e.preventDefault();
            fetch(url)
                .then((res) => res.json())
                .then(function (res) {
                    if (res.data !== null) {
                        email.classList.add("is-invalid");
                        errors.push("ya hay un usuario");
                    }
                    email.classList.replace("is-invalid", "is-valid");
                    form.submit();
                });
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
        let btn = document.querySelector("button.button-form");
        if (errors.length > 0) {
            console.log(errors);
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
