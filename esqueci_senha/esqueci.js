
const form = document.getElementById("forgotForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        message.innerHTML =
            '<span class="error">Digite um e-mail válido.</span>';
        return;
    }

    message.innerHTML =
        '<span class="success">Link de recuperação enviado com sucesso!</span>';

    form.reset();
});
