# 🐧 Clube da Arquitetura Computacional

### Aprenda Arquitetura Computacional jogando, num computador dos anos 2000

Uma cruzadinha e um jogo de tiro em primeira pessoa (estilo Doom) que rodam dentro de um monitor de tubo, com área de trabalho do Windows XP e uma página de navegador inspirada no Club Penguin. Feito para treinar os termos da aula de **Tópicos de Arquitetura Computacional**.

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

A tela inicial é uma mesa com um monitor de tubo, teclado, mouse, uma memória RAM, pizza, refrigerante, pinguins e puffles. Ao ligar o monitor, você entra num Windows XP com menu **iniciar**, ícones e um navegador com a página do clube. De lá você escolhe o jogo:

| Modo | Ideia |
| ---- | ----- |
| 🧩 **Cruzadinha** | Leia as pistas e escreva os 16 termos direto no tabuleiro. |
| 🎯 **Caça-Respostas** | Atire com uma arma laser na resposta certa que quica pela tela. São 15 perguntas em 3 níveis. |

Tudo roda no navegador, sem instalar nada, e tem trilha sonora e efeitos sonoros próprios (gerados por código).

## 🕹️ Como jogar

### Na mesa

1. Aperte o botão redondo do monitor: ele **liga e desliga** o computador (o som só começa depois do primeiro clique).
2. No Windows XP, abra um jogo pelos ícones, pelos botões da página do clube ou pelo menu **iniciar**.
3. No menu **iniciar** também existe o botão **Desligar**. O **X** da janela de um jogo volta para a mesa.
4. O botão 🔊 no canto da tela liga e desliga o som.

### 🧩 Cruzadinha

1. Clique numa casa do tabuleiro, ou numa pista da lista, e digite as letras. O cursor avança sozinho.
2. **Conferir** mostra as palavras certas em 🟩 verde e as erradas em 🟥 vermelho, e o contador mostra seus acertos (ex.: "8 de 16 palavras").
3. **💡 Dica** mostra uma pista extra (não óbvia) da palavra onde está o cursor, e conta quantas dicas você usou.
4. **Reiniciar** limpa o tabuleiro.

> Use as setas do teclado para andar pelas casas e **Backspace** para voltar.

### 🎯 Caça-Respostas

Você vê o jogo em primeira pessoa, segurando a arma, com um painel de status embaixo (como no Doom).

1. Clique em **Começar**. A pergunta aparece no console, embaixo do painel.
2. As 5 respostas ficam quicando de um lado ao outro da tela, devagar, para dar tempo de ler.
3. Mire com o mouse e clique: o laser sai da arma e vai até onde você clicou. Clique em cima da resposta que você acha certa.
4. **Acertou?** O alvo fica verde e você soma 1 acerto. **Errou?** Você perde 25% de vida e o jogo mostra a resposta certa e a explicação. Com 0% de vida, o jogo acaba.
5. As 15 perguntas sobem de dificuldade:

| Nível | Perguntas | O que muda |
| ----- | --------- | ---------- |
| FÁCIL | 5 | A pista do termo, com respostas curtas (CPU, RAM, DMA...). |
| MÉDIO | 5 | Uma dica indireta do termo, ainda com respostas curtas. |
| DIFÍCIL | 5 | Perguntas de situação e de conceito, com respostas em frases longas. |

O painel mostra **acertos, vida, nível, pergunta atual e tiros**, e o rostinho do pinguim fica vermelho quando você erra. Cada partida sorteia perguntas diferentes.

## 📚 Palavras e pistas

São 16 palavras, todas cruzadas no tabuleiro e usadas no jogo de tiro.

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

HTML, CSS e JavaScript puros, sem bibliotecas, frameworks nem imagens: o monitor, a mesa, os pinguins, os puffles, a arma e o painel foram desenhados com CSS. Os sons e as músicas são gerados por código.

```
arqcomp-cruzadinha/
├── index.html   # estrutura: mesa, tela do monitor, cruzadinha e caça-respostas
├── style.css    # visual: mesa, Windows XP, Club Penguin e painel estilo Doom
├── script.js    # lógica dos jogos, perguntas, menu iniciar e sons
└── README.md
```

### 🎮 [Jogar agora](https://crocejoao.github.io/ArqComp-Cruzadinha/)




## 💻 Rodar no seu computador

```
git clone https://github.com/crocejoao/ArqComp-Cruzadinha.git
cd arqcomp-cruzadinha
```

Depois abra o `index.html` no navegador. Não precisa de servidor.

## 🙌 Créditos

- Conteúdo baseado no e-book *Tópicos de Arquitetura Computacional* (São Paulo Tech School).
- Projeto acadêmico e **não oficial**, com visual inspirado no Windows XP, no Club Penguin e no Doom. Não é afiliado à Microsoft, à Disney nem à id Software.
