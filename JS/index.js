//Elementos basicos do projeto
var frase = document.getElementById("frase");
var jogador = document.getElementById("jogador");
var pc = document.getElementById("pc");
var botao = document.getElementById("botao");
var areaEscolha = document.getElementById("area-escolha");
var areaResultado = document.getElementById("area-resultado");
//Elementos opcionais de declaração
var pedra = document.getElementById("Pedra");
var papel = document.getElementById("Papel");
var tesoura = document.getElementById("Tesoura");

//Imagens que usamos no projeto
var imagens_jogador = ["img/pedra.png","img/papel.png","img/tesoura.png"];
var imagens_pc = ["img/pc-pedra.png","img/pc-papel.png","img/pc-tesoura.png"];

//INDICE
var index = 0;

//Função para efeito das imagens
function efeitoImagem(){
    jogador.src = imagens_jogador[index];
    pc.src = imagens_pc[index];

    index++;
    if(index === 3){
        index = 0;
    }
}
//Chamada do efeito de escolha
var efeito = setInterval(efeitoImagem,100);

//Função de seleção
function select(escolhaJogador){
    //Esconder area de opções
    areaEscolha.style.display = 'none';

    //Mostar a area de animação
    areaResultado.style.display = 'block';

    //Começar o contador em 3
    frase.textContent = '3';

    //Atviar o cronometro;
    var tempo = setInterval(() => {
        var cronometro = parseInt(frase.textContent);
        cronometro--;
        frase.textContent = cronometro;

        //Para quando chegar em 0
        if(cronometro === 0){
            clearInterval(tempo);
            clearInterval(efeito);
        } 

    }, 1000);

    //Regras do jogo
    setTimeout(() => {
        //Randomizar a escolha do pc
        var escolhaPC = Math.floor(Math.random()*3);
        console.log('Escolha do pc: '+ escolhaPC);

        //Mostrar a escolha do pc
        pc.src = imagens_pc[escolhaPC];

        //Mostrar escolha do Jogador
        jogador.src = imagens_jogador[escolhaJogador];

        //Verificar se foi impate
        if(escolhaJogador === escolhaPC){
            frase.textContent = 'Empatou!';
            botao.style.display = 'block';
            return false;
        }

        //Verificar vitória
        switch(escolhaJogador){
            case 0://Escoleu pedra
                escolhaPC === 2 ? frase.textContent = "Jogador Venceu!!!" : frase.textContent = "PC Venceu!!!";
                botao.style.display = 'block';
                break;

            case 1://Escoleu papel
                escolhaPC === 0 ? frase.textContent = "Jogador Venceu!!!" : frase.textContent = "PC Venceu!!!";
                botao.style.display = 'block';
                break;

            case 2://Escoleu tesoura
                escolhaPC === 1 ? frase.textContent = "Jogador Venceu!!!" : frase.textContent = "PC Venceu!!!";
                botao.style.display = 'block';
                break;    


            default:
                alert('Escolha invalida');
        }

    }, 3000);

}
