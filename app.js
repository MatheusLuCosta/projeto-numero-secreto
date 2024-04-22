alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//repetições ou enquanto algo não for ...
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    //condições
    if (chute == numeroSecreto) {
        alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

