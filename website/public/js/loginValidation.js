window.onload = function () {
    let email = document.querySelector("#email");
    email.focus();

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
        let password = document.querySelector("#password");
        let btn = document.querySelector("button.button-form-content");
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let errors = [];

        if (email.value == "") {
            email.classList.add("is-invalid");
            errors.push("Escribe un email");
        } else if (!email.value.match(re)) {
            email.classList.add("is-invalid");
            errors.push("Escribe un email válido");
        } else if ((await getDevices(email.value)).data == null) {
            email.classList.add("is-invalid");
            errors.push("Parece que no estás registrado todavía..");
        } else {
            email.classList.replace("is-invalid", "is-valid");
        }

        if (password.value == "") {
            password.classList.add("is-invalid");
            errors.push("Escribe tu contraseña");
        } else {
            password.classList.replace("is-invalid", "is-valid");
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
            form.submit();
        }
    });
};
