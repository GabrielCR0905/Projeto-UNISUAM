const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit");


// Função para mostrar mensagens de erro
function showError(element, message, duration = 3000) {
    element.textContent = message;
    setTimeout(() => {
        element.textContent = "";
    }, duration);
}

// Verificar login ao enviar o formulário
submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Obtendo valores do formulário de login
    const loginValue = loginInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Recuperar dados do LocalStorage
    const storedLogin = localStorage.getItem("login");
    const storedPassword = localStorage.getItem("password");

    // Validação do login
    if (loginValue === "" || passwordValue === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (loginValue === storedLogin && passwordValue === storedPassword) {
        // Login bem-sucedido
        alert("Login bem-sucedido!");
        window.location.href = "index3.html"; // Redireciona para a página após login
    } else {
        // Erro de login
        alert("Login ou senha incorretos. Tente novamente.");
    }
});

    // Seu código aqui
