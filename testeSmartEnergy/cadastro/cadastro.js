// CADASTRO

const cadastro = document.getElementById('formCadastro')

cadastro.addEventListener('submit', (event) =>{
    event.preventDefault(); // Evita que o formulário seja enviado para um servidor
    console.log(`teste`)
    // Catching dos valores
    const nome = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById("password").value;
    const dataNasc = document.getElementById('birthday').value;
    
    // Calcular idade do usuário para determinar limites etários
    const dataNascDate = new Date(dataNasc);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascDate.getFullYear();
    let mes = hoje.getMonth() - dataNascDate.getMonth();

    if(mes < 0 || (mes === 0 && hoje.getDate() < (dataNascDate && dataNascDate.getDate()))){
    idade--;
    }

    const isValid = validateForm(nome, email, senha, dataNasc, idade, dataNascDate)

    if (isValid) {
        console.log(`Nome: ${nome}`);
        console.log(`Email: ${email}`);
        console.log(`Senha: ${senha}`);
        console.log(`Data de Nascimento: ${dataNasc}`);
        console.log(`Idade: ${idade}`);
    }
})
// Validating do valores
function validateForm(nome, email, senha, dataNasc, idade, dataNascDate) {
    if(nome.trim().length === 0 || email.trim().length === 0 || senha.trim().length === 0 || dataNasc.trim().length === 0){
        alert('Por favor, insira as informações que faltam.');
        return false;
    }
    const regexNome = /^[\p{L}\p{M}'\-\s]+$/u;
    const regexEmail = /^\S+@\S+\.\S+$/;
    const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // requer pelo menos 8 caracteres com pelo menos 1 letra minúscula, 1 letra maiúscula e 1 número
    if (isNaN(dataNascDate.getTime())) {
        alert('Por favor, insira uma data de nascimento válida.');
        return false;
    }    

    if (!regexNome.test(nome)) {
        alert('Por favor, insira um nome válido.');
        return false;
    }

    if(!regexEmail.test(email)){
        alert('Por favor, insira um email válido.');
        return false;
    }
    if(!regexSenha.test(senha)){
        alert('Por favor, insira uma senha válida.\nPrecisa ter 8 caracteres com pelo menos 1 letra minúscula, 1 letra maíuscula e 1 número.');
        return false;
    }   

    if(idade < 16 || idade > 116){
        alert('Você deve ter entre 16 e 116 anos para se cadastrar.')
        return false;
    }
    alert(`Cadastro realizado!`)
    return true;

    
}
