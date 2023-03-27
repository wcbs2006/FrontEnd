const vehicleName = document.getElementById("car-name");
const totalPrice = document.getElementById("car-price");
const button = document.getElementById("sale");

button.addEventListener('click', (event)=>{
    event.preventDefault();

    let downPayment = (totalPrice.value * 0.5).toFixed(2);
    let instlmt = ((totalPrice.value - downPayment) / 12).toFixed(2);
    document.getElementById('output').innerHTML = `Veículo ${vehicleName.value}<br>Entrada de R$ ${downPayment}<br>12x de R$ ${instlmt}`

    // Obs: Eu pensei em colocar condições para ele funcionar com base nelas, mas mesmo as colocando, não obedecia aos parâmetros colocados.
    //POR EXEMPLO: Se as variáveis fossem diferentes de null, executava a ação ao apertar o botão. Mesmo com essa condição, o programa rodava com os valores vazios.


})

