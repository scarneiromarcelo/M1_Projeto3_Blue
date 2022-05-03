const prompt = require('prompt-sync')();
// Array para guardar o item encontrado no parque
let arrayLastDay = [];

// Criando o meu objeto personagem
const personagem = {
    nome: '',
    statusMoral: 1,
}; 

// Solicitando o nome do persogem
    do {
        personagem.nome = prompt('PROTAGONISTA: ').toUpperCase();
        console.clear();
    } while (personagem.nome == '');

//Objeto com informações sobre passagem do tempo
let diasData = {
    dia1: '30/10/1990',
    dia2: '01/11/1990',
    dia3: '02/11/1990',
    dia4: '03/11/1990'
}

let diaD  
// Informações sobre as condições para vitória, vou deixar no README.
// Introdução do Jogo
console.log(`30/10/1990

Em 4 dias, todas as pessoas estarão mortas no planeta, e restam poucos dias de vida a essas pessoas.

`)
prompt('PRESS ENTER..');
console.clear();

console.log(`

Ajude Dr(a) ${personagem.nome} a fazer tudo que conseguir ou quem sabe até salvar o planeta.

`);
prompt('PRESS ENTER..');
console.clear();

// Objetos contendo ás interações
const mollysQuarto = { 
    dia1: `
    
    Papai, preciso ir para aula hoje?
    
    `,
    dia2: `
    
    Papai, eu queria ir para aula..
    
    `,
    dia3: `
    
    Mollys não está. Foi embora juntamente com a sua esposa.
    
    `,
}

const banheiro = {
    dia1: `
    
    Você olha para o espelho e se sente orgulhoso..
    
    `,
    dia2: `
    
    Olhando no espelho, você diz para sí mesmo que está animado para chegar novamente ao trabalho..
    
    `,
    dia3: `
    
    Olhando no espelho, você se pergunta se deve ir para o laboratório ou deve ficar em casa homeoffice..
    
    `,
    dia4: `
    
    Você olha para o espelho e sente que tomará uma decisão muito importante no dia de hoje..
    
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
    
}

const goToWork = {

    dia1: `DURANTE O TRAJETO: 

    Dr(a) ${personagem.nome} veja a felicidade nas expressões dessas pessoas! 
    
    `,
    dia2: `DURANTE O TRAJETO:
    
    Você ainda vê movimento pelas ruas, nenhum sinal de caos..
    
    `,
    dia3: `DURANTE O TRAJETO:
    
    Há um grande tumulto, pessoas desesperadas pela rua..
    
    `,   
    
}

const atWork = {

    dia1: `NO TRABALHO:
    
    Dr(a) ${personagem.nome} Seus colegas de trabalho organizaram uma recepção calorosa para você!
    
    `,
    dia2: `NO TRABALHO:
    
    Dr(a) ${personagem.nome} está sendo críticado pelos colegas..
    
    `,
    dia3: `NO TRABALHO:

    O laboratório está um caos !! A infra estrutura está toda danificada..
    
    `,

}

const lastChoice = {
    dia1: `VOCÊ ESTÁ NO TRABALHO:

    [1] Para trabalhar no laborátório
    [2] Para ir comemorar com os amigos`,
    
    dia2: `VOCÊ ESTÁ NO TRABALHO:

    O SEU LABORATÓRIO ESTÁ TRANCADO !
    [1] Para subir as escadas e ir até a cobertura
    [2] Para voltar para casa e trabalhar homeoffice`,
    
    dia3: `VOCÊ ESTÁ NO TRABALHO:

    [1] Para encontrar o arquivo em meio a bagunça e dar andamento no trabalho no laboratório..
    [2] Para ir até a sua casa e continuar trabalhando homeoffice..

    `,
     
}

// Função para a sala principal
function salaPrincipal() {
    return console.log(
        `VOCÊ ESTÁ NA SALA PRINCIPAL:
            [1] Ir ao banheiro
            [2] Entrar no quarto de Molys
            [3] Ir trabalhar`)            
}

// Função para o ciclo 4
function lastSalaPrincipal() {
    return console.log(
        `VOCÊ ESTÁ NA SALA PRINCIPAL:
            [1] Ir ao banheiro
            [2] Ficar em casa
            [3] Ir para o parque`)            
}

// Função para dar skip
function skip() {
    return prompt('PRESS ENTER');
}

let escolha = 0
// Ciclos de 4 dias:
for (let dia = 1; dia <= 4; dia++) {   
    function controleDoTempo() {
        if (dia == 1){
            diaD = diasData.dia1
      } if (dia == 2){
            diaD = diasData.dia2
      } if (dia == 3){
            diaD = diasData.dia3
      } if (dia == 4){
            diaD = diasData.dia4
      }
        return console.log(diaD)
      }
    console.clear();
    // Primeiro dia ganha status moral
    if(dia == 1){
        controleDoTempo();
        skip();
        console.clear();

        do {    
            
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
    
        do {
            console.log(lastChoice.dia1);
            escolha = prompt('')
            console.clear();
        } while (escolha != 2 && escolha != 1);         

        if (escolha == 2){
            console.log(`
            
            Muito bom confraternizar com os amigos.
            
            `);
            personagem.statusMoral++          
        }
        if (escolha == 1){
            console.log(`
            
            Ótimo Dr(a) ${personagem.nome} que bom que está pensando em aprimorar ás suas skills.
            
            `);
            personagem.statusMoral++            
        }
        
        skip();
        console.clear();       
        
    }  
    
    // Segundo dia (Ganha  status moral e perde moral)
    if (dia == 2){
    controleDoTempo();
    skip();
    console.clear();

    console.log(`
    
    Em 3 dias, todas as pessoas estarão mortas no planeta, e restam poucos dias de vida a essas pessoas.
    
    `)
    skip();
    console.clear();

    console.log(`
    
    Ajude Dr(a) ${personagem.nome} a fazer tudo que conseguir ou quem sabe até salvar o planeta.
    
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
        
        }

        do {
            console.log(lastChoice.dia2);
            escolha = prompt('')
            console.clear();
            
        } while (escolha != 2 && escolha != 1);
        
        if (escolha == 2){
            console.log(`
            
            Você retorna para sua casa e resolve dar andamento na pesquisa..
            
            `)
            personagem.statusMoral++
        }
        if (escolha == 1){
            console.log(`
            
            Você encontra seu amigo de confiaça e ele lhe diz que vai abandonar a pesquisa..
            
            `);
            
        }

        skip();
        console.clear();      
    }         
      
    // Terceiro dia (Perde status moral);
    if (dia == 3){
    controleDoTempo();
    skip();
    console.clear();

    console.log(`
    
    Em 2 dias, todas as pessoas estarão mortas no planeta, e restam poucos dias de vida a essas pessoas.
    
    `)
    skip();
    console.clear();

    console.log(`
    
    Ajude Dr(a) ${personagem.nome} a fazer tudo que conseguir ou quem sabe até salvar o planeta.
    
    `);
    skip();
    console.clear();

    do {
        salaPrincipal();
        escolha = +prompt('');
        console.clear();
        
        if (escolha == 1){
            console.log(
                banheiro.dia3
                );
            skip();
            console.clear();
        }

        if (escolha == 2){
            console.log(
                mollysQuarto.dia3
            );
            skip();
            console.clear();
        }
        
    } while (escolha != 3);
        
        if (escolha == 3){
            console.log(
                irTrabalhar.dia3
            );
            skip();
            console.clear();
            
            console.log(
                goToWork.dia3
            )

            skip();
            console.clear();

            console.log(
                atWork.dia3
            );

            skip();
            console.clear();
            
        }

        do {
            console.log(lastChoice.dia3);
            escolha = prompt('')
            console.clear();
            
        } while (escolha != 2 && escolha != 1);
        
        if (escolha == 2){
            console.log(`
            
            Você está muito perto de conseguir más lhe resta pouco tempo..
            
            `)
            personagem.statusMoral++
        }
        if (escolha == 1){
            console.log(`
            
            Em meio a toda bagunça do laborátório você perde muito tempo, más tem um insight.
            
            `);
            
        }

        skip();
        console.clear();       
    }        
         
   
    // Quarto dia (Escolhas influenciarão nos status da moral e definirá se salva ou não o mundo.);
    if (dia == 4){
        controleDoTempo();
        skip();
        console.clear();

        console.log(`
        
        Em 1 dia, todas as pessoas estarão mortas no planeta.
    
        `)
        skip();
        console.clear();

        console.log(`
        
        Ajude Dr(a) ${personagem.nome} a fazer tudo que conseguir ou quem sabe até salvar o planeta.
    
        `);
        skip();
        console.clear();    
        
        do {
            lastSalaPrincipal();
            escolha = +prompt('');
            console.clear();
        
            if (escolha == 1){
                console.log(
                banheiro.dia4
                );
                skip();
                console.clear();
            }
        } while (escolha != 2 && escolha != 3);

        if (escolha == 2){
            console.log(`
            
            Finalizou o soro, é tudo ou nada !
            
            `
            );
            skip();
            console.clear();
            }       
                
        if (escolha == 3){
            console.log(`
            
            No parque, Dr(a) ${personagem.nome} encontrou o rascunho do Doutorando James e teve um insight que pode mudar tudo.
            
            `);
            arrayLastDay.push(1);
            skip();
            console.clear();
            
            console.log(`
        
            Agora que temos o Caderno de rascunho de James, precisamos contar com a moral do Dr(a) ${personagem.nome} para finalizar a cura !
        
            `);
            skip();
            console.clear();
        }
    }
}           
  
// Condição para vencer o Jogo
let rascunho = arrayLastDay[0];      
           
if (personagem.statusMoral == 5 && rascunho == 1 ) {
    console.log(`
        
    Dr(a) ${personagem.nome} salvou o mundo !!! Herói que será lembrado por toda história..
        
        `);
} else {
    console.log(`
        
    No dia 04/11/1990 a humanidade foi extinta, a causa foi uma mutação genética contida em uma "cura" feita pela equipe do Dr(a) ${personagem.nome}.. 
        
    `);
}
