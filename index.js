const prompt = require('prompt-sync')();
 
// Criando o meu objeto personagem
const personagem = {
    nome: '',
    statusMoral: 0,
}; 

// Solicitando o nome do persogem
    do {
        personagem.nome = prompt('PROTAGONISTA: ').toUpperCase();
        console.clear();
    } while (personagem.nome == '');

// Introdução do Jogo
console.log(`30/10/1990

Em 4 dias, todas as pessoas estarão mortas no planeta, e restam poucos dias de vida a essas pessoas.

`)
prompt('PRESS ENTER..');
console.clear();

console.log(`Ajude Dr(a) ${personagem.nome} a fazer tudo que conseguir ou quem sabe até salvar o planeta.

`);
prompt('PRESS ENTER..');
console.clear();

// Objetos contendo ás interações
const mollysQuarto = { 
    dia1: `Papai, preciso ir para aula hoje?
    
    `,
    dia2: `Papai, eu queria ir para aula..
    
    `,
    dia3: `Papai..
    
    `,
    dia4: `Papai.
    
    `,
}

const banheiro = {
    dia1: `Você olha para o espelho e se sente orgulhoso..
    
    `,
    dia2: `Olhando no espelho, você diz para sí mesmo que está animado para chegar novamente ao trabalho..
    
    `,
    dia3: `Olhando no espelho, você se pergunta se deve ir para o laboratório ou deve ficar em casa homeoffice..
    
    `,
    dia4: `Você sente que tomará uma decisão muito importante no dia de hoje..
    
    `,
}

const irTrabalhar = {
    dia1: `AO SAIR PELA PORTA VOCÊ PEGA O JORNAL:

    "NEWS: Ontem uma equipe de médicos liderada pelo Dr(a) ${personagem.nome} encontrou a cura para o cancer.."
    
    `,
    dia2: `AO SAIR PELA PORTA VOCÊ PEGA O JORNAL:

    "NEWS: A cura do câncer descoberta no início desta semana foi considerada "mortal", de acordo com autoridades."
    
    `,
    dia3: `AO SAIR PELA PORTA VOCÊ PEGA O JORNAL: 

    "NEWS: líderes mundiais em toda a Terra dirigiram-se ao seu povo ontem e lhes falaram sobre o futuro "fim dos dias".
    
    `,
    dia4: `AO SAIR PELA PORTA VOCÊ PEGA O JORNAL:

    "NEWS: O mundo todo está contando a solução do DR(A) ${personagem.nome}."
    
    `
}

const goToWork = {

    dia1: `DURANTE O TRAJETO: 

    Dr(a) ${personagem.nome} veja a felicidade nas expressões dessas pessoas! 
    
    `,
    dia2: `DURANTE O TRAJETO:
    
    Você ainda vê movimento pelas ruas, nenhum sinal de caos..
    
    `



}

const atWork = {

    dia1: `NO TRABALHO:
    
    Dr(a) ${personagem.nome} Seus colegas de trabalho organizaram uma recepção calorosa para você!
    
    `,
    dia2: `NO TRABALHO:
    
    Você está sendo críticado pelos colegas..
    
    `
}

const lastChoice = {
    dia1: `
        VOCÊ ESTÁ NO TRABALHO:
        [1] Para trabalhar no laborátório
        [2] Para ir comemorar com os amigos`,

    dia2: `
    VOCÊ ESTÁ NO TRABALHO:

    O SEU LABORATÓRIO ESTÁ TRANCADO !
    [1] Para subir as escadas e ir até a cobertura
    [2] Para voltar para casa e trabalhar homeoffice`,
     
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



let escolha = 0
// Ciclos de 4 dias:
for (let dia = 1; dia < 4; dia++) {
    // Primeiro dia (ganha moral)
    if(dia == 1){
        do { // Valindo a repetição do arco 'casa'        
        salaPrincipal();
        escolha = +prompt('');
        console.clear();   
            
        if (escolha == 1){
            console.log(
                banheiro.dia1
                )
            skip()
            console.clear(); 
    
        }       
    
        if (escolha == 2){
            console.log(
                 mollysQuarto.dia1
                )
             skip();
            console.clear();
        }
    } while (escolha != 3);                
    // Concluído a validação de repetição..

        if (escolha == 3){
            console.log(
                irTrabalhar.dia1
            )
            skip();
            console.clear();
            personagem.statusMoral++            
           
        
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
    }
    //Segunda validação
        do {
            console.log(lastChoice.dia1);
            escolha = prompt('')
            console.clear();
        } while (escolha != 2 && escolha != 1);         

        if (escolha == 2){
            console.log(`Muito bom confraternizar com os amigos. MORAL ++
            
            `);
            personagem.statusMoral++          
        }
        if (escolha == 1){
            console.log(`Ótimo Dr(a) ${personagem.nome} que bom que está pensando em aprimorar ás suas skills. MORAL ++
            
            `);
            personagem.statusMoral++            
        }
        
        skip();
        console.clear();
        console.log(`01/11/1990
    
        `)
        skip();
        console.clear();
    }  
    
    // Segundo dia (Ganha moral e perde moral)
    if (dia == 2){
    console.log(`Em 3 dias, todas as pessoas estarão mortas no planeta, e restam poucos dias de vida a essas pessoas.
    
    `)
    skip();
    console.clear();

    console.log(`Ajude Dr(a) ${personagem.nome} a fazer tudo que conseguir ou quem sabe até salvar o planeta.
    
    `);
    skip();
    console.clear();    
        
    do {
        salaPrincipal();
        escolha = +prompt('');
        console.clear();
        
        if (escolha == 1){
            console.log(
                banheiro.dia2
                );
            skip();
            console.clear();
        }

        if (escolha == 2){
            console.log(
                mollysQuarto.dia2
            );
            skip();
            console.clear();
        }
        
    } while (escolha != 3);
        
        if (escolha == 3){
            console.log(
                irTrabalhar.dia2
            );
            skip();
            console.clear();
            
            console.log(
                goToWork.dia2
            )

            skip();
            console.clear();

            console.log(
                atWork.dia2
            );

            skip();
            console.clear();

            //personagem.statusMoral++ // Adicionando ponto ao status

        }

        do {
            console.log(lastChoice.dia2);
            escolha = prompt('')
            console.clear();
            
        } while (escolha != 2 && escolha != 1);
        
        if (escolha == 2){
            console.log('Você retorna para sua casa e resolve dar andamento na pesquisa.. MORAL ++')
            personagem.statusMoral++
        }
        if (escolha == 1){
            console.log('Você encontra seu amigo de confiaça e ele lhe diz que vai abandonar a pesquisa.. MORAL --');
            personagem.statusMoral--
        }

        skip();
        console.clear();
        console.log(`02/11/1990
    
        `)
        skip();
        console.clear();         
        
    }     
     
//     // Terceiro dia (Perde moral)

//     
//     // Quarto dia (Escolhas influenciarão nos status da moral e definirá se salva ou não o mundo.)
}  