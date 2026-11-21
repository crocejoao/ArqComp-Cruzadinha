# 🐧 Clube da Arquitetura Computacional

### Aprenda Arquitetura Computacional jogando!

Uma cruzadinha e um jogo de tiro ao estilo Duck Hunt, com visual inspirado no Windows XP e no Club Penguin, desenvolvidos para treinar os conceitos da disciplina **Tópicos de Arquitetura Computacional**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=github&logoColor=white)

### 🎮 [Jogar agora](https://crocejoao.github.io/ArqComp-Cruzadinha/)

---

## 📑 Sumário

- [O que é o Clube](#-o-que-é-o-clube)
- [Como jogar](#-como-jogar)
- [Palavras e pistas](#-palavras-e-pistas)
- [Tecnologias e estrutura](#-tecnologias-e-estrutura)
- [Rodar no seu computador](#-rodar-no-seu-computador)
- [Créditos](#-créditos)

## 🖥️ O que é o Clube

O jogo começa em uma mesa com um monitor de tubo. Ao ligar o monitor, o desktop apresenta dois jogos para revisar conceitos de Arquitetura Computacional, como CPU, ULA, UC, memórias, barramentos, DMA e microcontroladores.

| Modo | Ideia |
|---|---|
| 🧩 **Cruzadinha** | Leia as pistas e escreva os termos diretamente no tabuleiro. |
| 🎯 **Caça-Respostas** | Leia a pergunta e atire na resposta correta que se movimenta pela tela. |

Tudo funciona diretamente no navegador, sem necessidade de instalação. As 16 palavras do conteúdo são utilizadas nos dois jogos.

## 🕹️ Como jogar

### 🖥️ Na mesa

1. Aperte o botão redondo do monitor para ligá-lo. O som começa somente após esse clique.
2. Clique no ícone do jogo desejado.
3. Utilize o botão 🔊 para ligar ou desligar o som.
4. Clique no X da janela para voltar à mesa.

### 🧩 Cruzadinha

1. Clique em uma casa do tabuleiro ou em uma pista da lista e digite as letras.
2. O cursor avança automaticamente para a próxima casa da palavra.
3. **Conferir:** mostra as palavras corretas em verde e as incorretas em vermelho, além de atualizar o contador de acertos.
4. **💡 Dica:** apresenta uma pista extra da palavra selecionada.
5. **Reiniciar:** limpa o tabuleiro.

**Dica:** utilize as setas do teclado para navegar pelas casas e o Backspace para voltar.

### 🎯 Caça-Respostas

1. Clique em **Começar** para iniciar a rodada.
2. Leia a pergunta apresentada na parte inferior da tela.
3. Mire com o mouse e clique para disparar o laser na resposta correta.
4. Ao acertar, o alvo fica verde e você ganha um ponto.
5. Ao errar, o jogo apresenta a resposta correta e uma explicação do conceito.

São 16 perguntas, uma para cada termo, e ao final é apresentada sua pontuação.

## 📚 Palavras e pistas

O jogo utiliza as 16 palavras da atividade de Arquitetura Computacional, distribuídas entre as direções horizontais e verticais.

| Nº | Termo | Letras | Direção | Pista |
|---:|---|---:|:---:|---|
| 1 | Quad core | 8 | ↓ | Processador com quatro núcleos que trabalham ao mesmo tempo no mesmo chip. |
| 2 | DMA | 3 | → | Controlador que move dados entre periféricos e memória sem ocupar o processador. |
| 3 | Memória de massa | 14 | ↓ | Guarda programas e arquivos de forma permanente e em grande volume, como HD e SSD. |
| 4 | EEPROM | 6 | ↓ | Memória não volátil regravável eletricamente, que apaga e grava byte a byte. |
| 5 | Registradores | 13 | ↓ | Minúsculas memórias dentro da CPU, as mais rápidas, guardando os dados da operação atual. |
| 6 | RAM | 3 | → | Memória volátil onde ficam os softwares em uso; perde tudo ao desligar. |
| 7 | ROM | 3 | ↓ | Memória não volátil de apenas leitura, que guarda o programa de inicialização. |
| 8 | Microcontrolador | 16 | → | Chip único com processador, memória e portas de entrada e saída, comum em sistemas embarcados. |
| 9 | Address bus | 10 | ↓ | Caminho por onde a CPU indica qual posição de memória quer acessar. |
| 10 | Cache | 5 | ↓ | Memória rápida que guarda dados frequentemente utilizados pela CPU. |
| 11 | Dual core | 8 | → | Processador com dois núcleos que executam tarefas ao mesmo tempo. |
| 12 | Data bus | 7 | ↓ | Caminho por onde as informações trafegam entre CPU, memória e periféricos. |
| 13 | CPU | 3 | ↓ | Cérebro do computador: executa as instruções dos programas. |
| 14 | Flash | 5 | ↓ | Memória não volátil regravável em blocos, usada em pendrives e cartões. |
| 15 | ULA | 3 | → | Parte da CPU que faz as contas e as operações lógicas. |
| 16 | UC | 2 | → | Parte da CPU que busca e decodifica instruções e comanda os demais componentes. |

## 🛠️ Tecnologias e estrutura

O projeto foi desenvolvido utilizando tecnologias web puras, sem bibliotecas ou frameworks externos.

- **HTML5:** estrutura das telas e dos elementos do jogo.
- **CSS3:** estilização e efeitos visuais inspirados no Windows XP e no Club Penguin.
- **JavaScript:** lógica da cruzadinha, movimentação dos alvos, pontuação, interações e geração de sons.

Os sons e as músicas são gerados diretamente pelo código, sem necessidade de arquivos de áudio externos.

### Estrutura do projeto

```text
ArqComp-Cruzadinha/
├── index.html
├── CSS/
│   └── style.css
├── JAVASCRIPT/
│   └── script.js
└── README.md
```

## 💻 Rodar no seu computador

É necessário ter o Git instalado.

**1. Clone o repositório:**

```bash
git clone https://github.com/crocejoao/ArqComp-Cruzadinha.git
```

**2. Entre na pasta do projeto:**

```bash
cd ArqComp-Cruzadinha
```

**3. Abra o arquivo `index.html` no navegador.**

Não é necessário instalar dependências ou iniciar um servidor.

## 🙌 Créditos

- Conteúdo baseado no e-book *Tópicos de Arquitetura Computacional*, da São Paulo Tech School.
- Projeto acadêmico e não oficial, inspirado no visual do Windows XP e do Club Penguin.
- Não possui afiliação com a Microsoft ou a Disney. Os elementos visuais foram desenvolvidos com CSS e emojis.