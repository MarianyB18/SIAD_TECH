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

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validação básica de correspondência de senha
    if (newPassword !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
    } else {
        // Se as senhas coincidirem, você pode adicionar sua lógica de back-end aqui
        alert("Senha redefinida com sucesso!");
        // Em um cenário real, você faria uma requisição para o servidor aqui
    }
});