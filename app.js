alert("Boas vindas ao jogo do número secreto");
let dif = prompt("Qual o número máximo para o desafio?");
let numeroSecreto = parseInt(Math.random() * dif + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){
	chute = prompt(`Escolha um número entre 1 e ${dif}`);
	// se o chute for igual ao número secreto 
	if (chute == numeroSecreto ){
		//Para o laço while quando atender a condição
		break;
	}else{
		if (chute > numeroSecreto){
			alert(`O número secreto é menor que ${chute}`)
		}else{
			alert(`O número secreto é maior que ${chute}`);
		}
	}
	//tentativas += 1;
	//tentativas = tentativas + 1;
	tentativas++;
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
