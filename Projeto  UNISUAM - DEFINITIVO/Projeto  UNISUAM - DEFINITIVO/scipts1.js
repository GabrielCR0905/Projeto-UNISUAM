const nameForm = document.querySelector("#name-form");
const submitButton = document.querySelector("#submit");

// Função para exibir mensagens de erro
function showError(element, message, duration = 5000) {
    element.textContent = message;
    setTimeout(() => {
        element.textContent = "";
    }, duration);
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Capturando valores dos campos
    const usernameValue = document.querySelector("#username").value;
    const name2Value = document.querySelector("#name2").value;
    const dateValue = document.querySelector("#date").value;
    const cpfValue = document.querySelector("#cpf").value;
    const endereçoValue = document.querySelector("#endereço").value;
    const celularValue = document.querySelector("#celular").value;
    const telefoneValue = document.querySelector("#telefone").value;
    const loginValue = document.querySelector("#login").value;
    const passwordValue = document.querySelector("#password").value;
    const passwordtwoValue = document.querySelector("#passwordtwo").value;

    // Validando os campos e exibindo erros
    if (usernameValue === "") return showError(document.querySelector(".msg"), "Preencha o Nome");
    if (name2Value === "") return showError(document.querySelector(".msg2"), "Preencha o Nome Materno");
    if (dateValue === "") return showError(document.querySelector(".msg3"), "Preencha a Data");
    if (cpfValue === "") return showError(document.querySelector(".msg4"), "Preencha o CPF");
    if (endereçoValue === "") return showError(document.querySelector(".msg5"), "Preencha o Endereço");
    if (celularValue === "") return showError(document.querySelector(".msg6"), "Preencha o Número de Celular");
    if (telefoneValue === "") return showError(document.querySelector(".msg7"), "Preencha o Número de Telefone");
    if (loginValue === "") return showError(document.querySelector(".msg8"), "Preencha o Login");
    if (passwordValue === "") return showError(document.querySelector(".msg9"), "Preencha a Senha");
    if (passwordtwoValue !== passwordValue) return showError(document.querySelector(".msg10"), "As senhas devem ser iguais", 6000);

    // Salvando os dados no LocalStorage
    localStorage.setItem("username", usernameValue);
    localStorage.setItem("name2", name2Value);
    localStorage.setItem("date", dateValue);
    localStorage.setItem("cpf", cpfValue);
    localStorage.setItem("endereço", endereçoValue);
    localStorage.setItem("celular", celularValue);
    localStorage.setItem("telefone", telefoneValue);
    localStorage.setItem("login", loginValue);
    localStorage.setItem("password", passwordValue);

    // Redirecionando para outra página
    window.location.href = "index1.html";
});








    






