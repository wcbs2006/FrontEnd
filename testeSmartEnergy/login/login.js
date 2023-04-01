// LOGIN

// Dados teste
const users = [
    { nome: "Wescley", senha: "23Abacaxi"},
    { nome: "Carlos", senha: "Abacate5"},
    { nome: "Letícia Dias", senha: "Informatica2023"}
];

const login = document.getElementById('formLogin');

login.addEventListener("submit", (event) =>{
    event.preventDefault();

    const nome = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    // Se os campos estiverem vazios 
    if(!nome || !senha){
        alert("Por favor, insira suas informações.");
        return;
    }

    //Verifica se as credenciais estão corretas
    const user = users.find(u => u.nome === nome && u.senha === senha);
    if(user){
    // Redireciona para outra página e fica fixo na página
    
    if (window.history.replaceState) {
        // Remove a entrada de histórico da página de login
        window.history.replaceState(null, null, window.location.href);
        window.location.replace("after-login.html")
      }

    }else{
    alert("Usuário ou senha incorretos.");
    }
    console.log("nome:", nome);
    console.log("senha:", senha);
  

})
