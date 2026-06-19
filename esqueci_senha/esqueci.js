function togglePasswordVisibility(inputId, icon) {
    const passwordInput = document.getElementById(inputId);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

// Manipulação do envio do formulário
document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página por padrão

    form.reset();
});
