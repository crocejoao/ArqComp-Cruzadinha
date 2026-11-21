# 🐧 Clube da Arquitetura Computacional

### Aprenda Arquitetura Computacional jogando

Uma cruzadinha e um jogo de tiro ao estilo Duck Hunt, com visual de Windows XP e Club Penguin, feitos para treinar os termos da aula de **Tópicos de Arquitetura Computacional**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=github&logoColor=white)

### 🎮 [**Jogar agora**](https://SEU-USUARIO.github.io/arqcomp-cruzadinha/)

---

## 📑 Sumário

- [O que é o Clube](#-o-que-é-o-clube)
- [Como jogar](#-como-jogar)
- [Palavras e pistas](#-palavras-e-pistas)
- [Tecnologias e estrutura](#-tecnologias-e-estrutura)
- [Rodar no seu computador](#-rodar-no-seu-computador)
- [Créditos](#-créditos)

## 🖥️ O que é o Clube

O jogo começa numa mesa com um monitor de tubo. Ao ligar o monitor, o desktop mostra dois jogos para fixar os conceitos vistos em aula (CPU, ULA, UC, memórias, barramentos, DMA e microcontrolador):

| Modo | Ideia |
| ---- | ----- |
| 🧩 **Cruzadinha** | Leia as pistas e escreva os termos direto no tabuleiro. |
| 🎯 **Caça-Respostas** | Leia a pergunta e atire na resposta certa que passa devagar pela tela. |

Tudo roda no navegador, sem instalar nada. As 16 palavras do conteúdo aparecem nos dois jogos.

## 🕹️ Como jogar

### Na mesa

1. Aperte o botão redondo do monitor para ligá-lo (o som só começa depois desse clique).
2. Clique no ícone do jogo que quiser.
3. O botão 🔊 no canto da tela liga e desliga o som. O **X** da janela volta para a mesa.

### 🧩 Cruzadinha

1. Clique numa casa do tabuleiro, ou numa pista da lista, e digite as letras.
2. O cursor avança sozinho para a próxima casa da palavra.
3. **Conferir** mostra as palavras certas em 🟩 verde e as erradas em 🟥 vermelho, e o contador mostra seus acertos (ex.: "8 de 16 palavras").
4. **💡 Dica** mostra uma pista extra (não óbvia) da palavra onde está o cursor.
5. **Reiniciar** limpa o tabuleiro.

> Dica: use as setas do teclado para andar pelas casas e **Backspace** para voltar.

### 🎯 Caça-Respostas

1. Clique em **Começar**. A pergunta aparece embaixo da tela.
2. Mire com o mouse e clique para disparar o laser da arma (vista em primeira pessoa). Acerte a resposta certa, que fica quicando de uma lateral à outra da tela.
3. **Acertou?** O alvo fica verde e você ganha 1 ponto.
4. **Errou?** O jogo mostra qual era a resposta certa e explica o conceito.
5. São 16 perguntas, uma para cada termo, e no final aparece sua pontuação.

## 📚 Palavras e pistas

São 16 palavras, todas cruzadas no tabuleiro.

| Nº | | Termo | Letras | Direção | Pista |
| -- | --- | ----- | ------ | ------- | ----- |
| 1 | 🔲 | **Quad core** | 8 | ↓ | Processador com quatro núcleos que trabalham ao mesmo tempo no mesmo chip. |
| 2 | 🚚 | **DMA** | 3 | → | Controlador que move dados entre periféricos e memória sem ocupar o processador. |
| 3 | 💽 | **Memória de massa** | 14 | ↓ | Guarda programas e arquivos de forma permanente e em grande volume, como HD e SSD. |
| 4 | 💾 | **EEPROM** | 6 | ↓ | Memória não volátil regravável eletricamente, que apaga e grava byte a byte. |
| 5 | 📦 | **Registradores** | 13 | ↓ | Minúsculas memórias dentro da CPU, as mais rápidas, guardando os dados da operação atual. |
| 6 | ⚡ | **RAM** | 3 | → | Memória volátil onde ficam os softwares em uso; perde tudo ao desligar. |
| 7 | 📜 | **ROM** | 3 | ↓ | Memória não volátil de apenas leitura, que guarda o programa de inicialização. |
| 8 | 🔌 | **Microcontrolador** | 16 | → | Chip único com processador, memória e portas de entrada e saída, comum em sistemas embarcados. |
| 9 | 📍 | **Address bus** | 10 | ↓ | Caminho por onde a CPU indica qual posição de memória quer acessar. |
| 10 | 🚀 | **Cache** | 5 | ↓ | Memória pequena e ultrarrápida entre a CPU e a RAM, guarda o que é mais usado. |
| 11 | 🔳 | **Dual core** | 8 | → | Processador com dois núcleos que executam tarefas ao mesmo tempo. |
| 11 | 🚌 | **Data bus** | 7 | ↓ | Caminho por onde as informações trafegam entre CPU, memória e periféricos. |
| 12 | 🧠 | **CPU** | 3 | ↓ | Cérebro do computador: executa as instruções dos programas. |
| 13 | 🧊 | **Flash** | 5 | ↓ | Memória não volátil regravável em blocos, usada em pendrives e cartões. |
| 14 | 🧮 | **ULA** | 3 | → | Parte da CPU que faz as contas e as operações lógicas. |
| 15 | 🎛️ | **UC** | 2 | → | Parte da CPU que busca e decodifica instruções e comanda os demais componentes. |

## 🛠️ Tecnologias e estrutura

HTML, CSS e JavaScript puros, sem bibliotecas nem frameworks. Os sons e as músicas são gerados por código, sem arquivos de áudio.

```
arqcomp-cruzadinha/
├── index.html   # estrutura das telas
├── style.css    # visual Windows XP / Club Penguin
├── script.js    # lógica dos jogos e sons
└── README.md
```

## 💻 Rodar no seu computador

```
git clone https://github.com/SEU-USUARIO/arqcomp-cruzadinha.git
cd arqcomp-cruzadinha
```

Depois abra o `index.html` no navegador. Não precisa de servidor.

## 🙌 Créditos

- Conteúdo baseado no e-book *Tópicos de Arquitetura Computacional* (São Paulo Tech School).
- Projeto acadêmico e **não oficial**, inspirado no visual do Windows XP e do Club Penguin. Não é afiliado à Microsoft nem à Disney. Os visuais foram feitos com CSS e emojis.
