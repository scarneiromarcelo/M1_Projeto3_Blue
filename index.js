const prompt = require('prompt-sync')();
 
// Credenciais para iniciar o jogo
const personagem = {
    nome: '',
    statusMoral: 0,
    // exibirStatus: function () {            
    //     console.log(
    //         this.nome + ' O nível de sua moral é ' + this.statusMoral)
    // },
}; 

// Credenciais para jogar
personagem.nome = prompt('PROTAGONISTA: ').toUpperCase();
console.clear();

// Introdução do Jogo
console.log('Em 6 dias, todas as pessoas estarão mortas no planeta, e restam poucos dias de vida a essas pessoas.')
prompt('PRESS ENTER..');
console.clear();

console.log(`Ajude Dr(a) ${personagem.nome} a fazer tudo que conseguir ou quem sabe até salvar o planeta.`);
prompt('PRESS ENTER..');
console.clear();

// Objetos que recerão as interações
const mollysQuarto = { 
    dia1: `Papai, preciso ir para aula hoje?`,
    dia2: `Papai, eu queria ir para aula..`,
    dia3: `Papai..`,
    dia4: `Papai.`,
}

const banheiro = {
    dia1: 'Você olha para o espelho e se sente orgulhoso..',
    dia2: 'Você está animado para chegar novamento ao trabalho..',
    dia3: 'Você se questiona sobre o que fez de errado, e reflete sobre como pode consertar.',
    dia4: 'Você sente que tomará uma decisão muito importante no dia de hoje..',
}

const irTrabalhar = {
    dia1: `Ao sair pela porta, você pega o jornal.' 
    "NEWS: Ontem uma equipe de médicos liderada pelo Dr(a) ${personagem.nome} encontrou a cura para o cancer..`,
    dia2: `Ao sair pela porta, você pega o jornal. 
    "NEWS: A cura do câncer descoberta no início desta semana foi considerada "mortal", de acordo com autoridades.`,
    dia3: `Ao sair pela porta, você pega o jornal. 
    "NEWS: líderes mundiais em toda a Terra dirigiram-se ao seu povo ontem e lhes falaram sobre o futuro "fim dos dias".`,
    dia4: `Ao sair pela porta, você pega o jornal.
    "NEWS: O mundo todo está contando a solução do DR(A) ${personagem.nome}."`
}

const goToWork = {

    dia1: `DURANTE O TRAJETO: 

    Dr(a) ${personagem.nome} veja a felicidade nas expressões dessas pessoas! `
    



}

const atWork = {

    dia1: `NO TRABALHO:
    
    Dr(a) ${personagem.nome} Seus colegas de trabalho organizaram uma recepção calorosa para você!` 
}

// Função para a sala principal
function salaPrincipal() {
    return console.log(
        `VOCÊ ESTÁ NA SALA PRINCIPAL:
            [1] Ir ao banheiro
            [2] Entrar no quarto de Molys
            [3] Ir trabalhar`)            
}

// Função para dar skip
function skip() {
    return prompt('PRESS ENTER');
}

// Ciclos de 4 dias:
for (let dia = 0; dia < 4; dia++) {
    // Primeiro dia:
    if(dia == 1){        
        salaPrincipal();
        let escolha = +prompt('');
        
        if (escolha == 1){
            console.log(
                banheiro.dia1
                )
            skip()
            console.clear(); 

        }
        salaPrincipal();
        escolha = prompt('');
        if (escolha == 2){
            console.log(
                mollysQuarto.dia1
                )
            skip();
            console.clear();
        } 
        salaPrincipal();
        escolha = prompt('');
        if (escolha == 3){
            console.log(
                irTrabalhar.dia1
            )
            skip();
            console.clear();
            personagem.statusMoral++            
        }   
        
        console.log(
            goToWork.dia1
        );

        skip();
        console.clear();

        console.log(
            atWork.dia1
        );

        skip();
        console.clear();

        console.log(`
        VOCÊ ESTÁ NO TRABALHO:
        [1] Para trabalhar no laborátório
        [2] Para ir comemorar com os amigos`);

        //Condições
        escolha = prompt('')
        if (escolha == 2){
            console.log('Muito bom confraternizar com os amigos. MORAL ++')
            personagem.statusMoral++          
        }
        if (escolha == 1){
            console.log(`Ótimo Dr(a) ${personagem.nome} que bom que está pensando em aprimorar ás suas skills. MORAL ++`)
            personagem.statusMoral++
        }
    }

    console.log(personagem.statusMoral)

//     // Segundo dia
//     if(dia == 2){
//         // console.log('O segundo dia do personagem.')
//         curaAndamento.push('10');
//     }
//     // Terceiro dia
//     if(dia == 3){
//         // console.log('O terceiro dia do personagem.')
//         curaAndamento.push('10');
//     }
//     // Quarto dia
//     if(dia == 4){
//         // console.log('O quarto dia do personagem.')
//         curaAndamento.push('10');
//     }
 }