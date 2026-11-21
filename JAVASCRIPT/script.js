// ================= DADOS (as 16 palavras do PDF) =================
// n = número da pista | l = linha onde começa | c = coluna onde começa
// d = "H" (horizontal) ou "V" (vertical) | r = resposta | nome = como aparece no jogo de tiro
var palavras = [
  { n: 1,  l: 0,  c: 6,  d: "V", r: "QUADCORE", nome: "Quad core", pista: "Processador com quatro núcleos que trabalham ao mesmo tempo no mesmo chip." },
  { n: 2,  l: 1,  c: 2,  d: "H", r: "DMA", nome: "DMA", pista: "Controlador que move dados entre periféricos e memória sem ocupar o processador." },
  { n: 3,  l: 1,  c: 3,  d: "V", r: "MEMORIADEMASSA", nome: "Memória de massa", pista: "Guarda programas e arquivos de forma permanente e em grande volume, como HD e SSD." },
  { n: 4,  l: 1,  c: 14, d: "V", r: "EEPROM", nome: "EEPROM", pista: "Memória não volátil regravável eletricamente, que apaga e grava byte a byte." },
  { n: 5,  l: 2,  c: 1,  d: "V", r: "REGISTRADORES", nome: "Registradores", pista: "Minúsculas memórias dentro da CPU, as mais rápidas, guardando os dados da operação atual." },
  { n: 6,  l: 2,  c: 5,  d: "H", r: "RAM", nome: "RAM", pista: "Memória volátil onde ficam os softwares em uso; perde tudo ao desligar." },
  { n: 7,  l: 4,  c: 10, d: "V", r: "ROM", nome: "ROM", pista: "Memória não volátil de apenas leitura, que guarda o programa de inicialização." },
  { n: 8,  l: 5,  c: 0,  d: "H", r: "MICROCONTROLADOR", nome: "Microcontrolador", pista: "Chip único com processador, memória e portas de entrada e saída, comum em sistemas embarcados." },
  { n: 9,  l: 5,  c: 12, d: "V", r: "ADDRESSBUS", nome: "Address bus", pista: "Caminho por onde a CPU indica qual posição de memória quer acessar." },
  { n: 10, l: 8,  c: 7,  d: "V", r: "CACHE", nome: "Cache", pista: "Memória pequena e ultrarrápida entre a CPU e a RAM, guarda o que é mais usado." },
  { n: 11, l: 9,  c: 5,  d: "H", r: "DUALCORE", nome: "Dual core", pista: "Processador com dois núcleos que executam tarefas ao mesmo tempo." },
  { n: 11, l: 9,  c: 5,  d: "V", r: "DATABUS", nome: "Data bus", pista: "Caminho por onde as informações trafegam entre CPU, memória e periféricos." },
  { n: 12, l: 9,  c: 9,  d: "V", r: "CPU", nome: "CPU", pista: "Cérebro do computador: executa as instruções dos programas." },
  { n: 13, l: 11, c: 14, d: "V", r: "FLASH", nome: "Flash", pista: "Memória não volátil regravável em blocos, usada em pendrives e cartões." },
  { n: 14, l: 13, c: 12, d: "H", r: "ULA", nome: "ULA", pista: "Parte da CPU que faz as contas e as operações lógicas." },
  { n: 15, l: 14, c: 5,  d: "H", r: "UC", nome: "UC", pista: "Parte da CPU que busca e decodifica instruções e comanda os demais componentes." }
];

// ================= DICAS EXTRAS (botão Dica da cruzadinha), na MESMA ORDEM do vetor palavras =================
var dicas = [
  "Tem o dobro de núcleos do processador da palavra 11 horizontal.",
  "Alivia o processador: ele só autoriza a transferência e fica livre para outras tarefas.",
  "O que está guardado continua lá com o computador desligado, e é a maior memória da máquina.",
  "Pequena memória de microcontroladores para guardar configurações que não podem se perder ao desligar.",
  "Ficam no topo da hierarquia de memória: nada é mais rápido nem mais próximo da ULA.",
  "É o espaço de trabalho do computador: o que não cabe aqui precisa ficar guardado no disco.",
  "Costuma guardar o firmware que o computador usa assim que é ligado, como a BIOS.",
  "Um computador inteiro dentro de um chip só, como o que fica numa placa Arduino.",
  "Só vai num sentido: da CPU para fora. Responde à pergunta 'onde?'.",
  "Guarda cópias do que acabou de ser usado, apostando que será pedido de novo logo.",
  "Tem a metade dos núcleos do processador da palavra 1 vertical.",
  "Diferente do barramento de endereço, ele trafega nos dois sentidos.",
  "Dentro dela moram a ULA, a UC e os registradores.",
  "Memória dos pendrives e dos SSDs, apagada em blocos e não byte a byte.",
  "Soma, subtrai e compara, sempre trabalhando sob as ordens da UC.",
  "Não calcula nada: interpreta cada instrução e dá as ordens aos outros componentes."
];

// ================= SOM (tudo feito por código, sem arquivos de áudio) =================
var audio = null;      // AudioContext = "motor de som" do navegador; só pode ser criado depois de um clique
var somLigado = true;
var ligado = false;    // o monitor está ligado?
var musicas = {
  // cada música tem: tempo (ms entre as notas), melodia e baixo (números = frequência da nota, 0 = silêncio)
  menu: { tempo: 450, melodia: [523,659,784,659,587,784,659,0, 523,659,880,784,659,587,523,0], baixo: [262,0,0,0,196,0,0,0, 220,0,0,0,175,0,196,0] },
  cruz: { tempo: 600, melodia: [392,0,523,0,659,0,523,0, 440,0,523,0,587,0,523,0], baixo: [196,0,0,0,0,0,0,0, 175,0,0,0,0,0,0,0] },
  jogo: { tempo: 240, melodia: [523,659,784,659, 880,784,659,523, 587,698,880,698, 784,659,587,0], baixo: [262,0,262,0,262,0,262,0, 175,0,175,0,196,0,196,0] }
};
var musicaAtual = "menu";
var passo = 0;
var timerMusica = null;

// toca uma nota: freq = frequência, dur = duração (s), tipo = formato da onda, vol = volume, atraso = espera (s)
function tom(freq, dur, tipo, vol, atraso) {
  if (audio == null || somLigado == false || freq == 0) { return; }
  var osc = audio.createOscillator();   // oscillator = gerador de som
  var ganho = audio.createGain();       // gain = controle de volume
  osc.type = tipo;
  osc.frequency.value = freq;
  var t = audio.currentTime + atraso;
  ganho.gain.setValueAtTime(vol, t);
  ganho.gain.exponentialRampToValueAtTime(0.0001, t + dur);   // volume vai caindo até sumir
  osc.connect(ganho);
  ganho.connect(audio.destination);     // destination = caixa de som
  osc.start(t);
  osc.stop(t + dur);
}

function tocar(nome) {
  musicaAtual = nome;
  passo = 0;
  if (timerMusica != null) { clearInterval(timerMusica); }
  timerMusica = setInterval(passoMusica, musicas[nome].tempo);
}

function passoMusica() {
  var m = musicas[musicaAtual];
  tom(m.melodia[passo], 0.35, "triangle", 0.12, 0);
  tom(m.baixo[passo], 0.4, "sine", 0.1, 0);
  passo++;
  if (passo >= m.melodia.length) { passo = 0; }
}

function sfxClique() { tom(900, 0.06, "square", 0.05, 0); }
function sfxAcerto() { tom(659, 0.15, "triangle", 0.15, 0); tom(880, 0.15, "triangle", 0.15, 0.12); tom(1047, 0.3, "triangle", 0.15, 0.24); }
function sfxErro() { tom(180, 0.35, "sawtooth", 0.08, 0); tom(130, 0.4, "sawtooth", 0.08, 0.15); }
function sfxJanela() { tom(523, 0.12, "triangle", 0.12, 0); tom(784, 0.2, "triangle", 0.12, 0.1); }

// "piu piu" do laser: duas notas que começam agudas e descem rápido
function sfxPiu() {
  if (audio == null || somLigado == false) { return; }
  var tipos = ["square", "triangle"];
  var volumes = [0.18, 0.25];
  var t = audio.currentTime;
  for (var i = 0; i < 2; i++) {
    var osc = audio.createOscillator();
    var ganho = audio.createGain();
    osc.type = tipos[i];
    osc.frequency.setValueAtTime(2200 - i * 900, t);
    osc.frequency.exponentialRampToValueAtTime(180, t + 0.25);   // a nota desce de 2200 para 180
    ganho.gain.setValueAtTime(volumes[i], t);
    ganho.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    osc.connect(ganho);
    ganho.connect(audio.destination);
    osc.start(t);
    osc.stop(t + 0.3);
  }
}

function alternarSom() {
  if (somLigado == true) {
    somLigado = false;
    document.getElementById("btnSom").innerHTML = "🔇";
  } else {
    somLigado = true;
    document.getElementById("btnSom").innerHTML = "🔊";
  }
}

// ================= MESA E MONITOR =================
function ligar() {
  if (audio == null) {
    audio = new (window.AudioContext || window.webkitAudioContext)();   // cria o som (precisa do clique)
  }
  if (audio.state == "suspended") { audio.resume(); }   // alguns navegadores deixam o som pausado até o clique
  if (ligado == true) { return; }
  ligado = true;
  document.getElementById("tela").className = "tela ligada";
  document.getElementById("area").style.display = "block";
  document.getElementById("dica").innerHTML = "Escolha um jogo no navegador da tela do monitor 🖱️";
  // som de "Windows ligando": notas subindo uma depois da outra
  var notas = [392, 523, 659, 784];
  for (var i = 0; i < notas.length; i++) {
    tom(notas[i], 0.7, "triangle", 0.15, i * 0.18);
  }
  tocar("menu");
}

function abrir(nome) {
  sfxJanela();
  document.getElementById("mesa").style.display = "none";
  document.getElementById(nome).style.display = "block";
  if (nome == "cruz") { tocar("cruz"); }
  if (nome == "jogo") {
    tocar("jogo");
    jogando = false;
    document.getElementById("alvos").innerHTML = "";
    document.getElementById("pergunta").innerHTML = "Atire na resposta certa! Aperte Começar.";
    document.getElementById("placar").innerHTML = "Acertos: 0";
    document.getElementById("btnJogo").style.display = "inline-block";
  }
  window.scrollTo(0, 0);
}

function voltar() {
  sfxClique();
  jogando = false;
  document.getElementById("cruz").style.display = "none";
  document.getElementById("jogo").style.display = "none";
  document.getElementById("mesa").style.display = "flex";
  tocar("menu");
}

function atualizarRelogio() {
  var d = new Date();
  var m = d.getMinutes();
  if (m < 10) { m = "0" + m; }
  document.getElementById("relogio").innerHTML = d.getHours() + ":" + m;
}

// ================= CRUZADINHA =================
var TAM = 16;          // o tabuleiro tem 16 linhas x 16 colunas
var letras = [];       // letras[l][c] = letra certa da casa ("" = casa vazia)
var numeros = [];      // numeros[l][c] = número da pista que começa nessa casa (0 = nenhum)
var dirCasa = [];      // dirCasa[l][c] = "H", "V" ou "HV" (quais palavras passam pela casa)
var focoL = -1;       // linha e coluna da casa onde o cursor está (usado pelo botão Dica)
var focoC = -1;
var dicasUsadas = 0;
var direcao = "H";     // direção em que o cursor avança ao digitar

// descobre a linha e a coluna da letra número k da palavra p
function linhaDe(p, k) { if (p.d == "V") { return p.l + k; } return p.l; }
function colunaDe(p, k) { if (p.d == "H") { return p.c + k; } return p.c; }

function montarDados() {
  for (var l = 0; l < TAM; l++) {
    letras[l] = []; numeros[l] = []; dirCasa[l] = [];
    for (var c = 0; c < TAM; c++) { letras[l][c] = ""; numeros[l][c] = 0; dirCasa[l][c] = ""; }
  }
  for (var i = 0; i < palavras.length; i++) {
    var p = palavras[i];
    numeros[p.l][p.c] = p.n;
    for (var k = 0; k < p.r.length; k++) {
      var l2 = linhaDe(p, k);
      var c2 = colunaDe(p, k);
      letras[l2][c2] = p.r.charAt(k);              // charAt(k) pega a letra na posição k da palavra
      dirCasa[l2][c2] = dirCasa[l2][c2] + p.d;
    }
  }
}

function desenharTabuleiro() {
  var html = "";
  for (var l = 0; l < TAM; l++) {
    for (var c = 0; c < TAM; c++) {
      if (letras[l][c] == "") {
        html += '<div class="vazio"></div>';
      } else {
        html += '<div class="casa" id="casa_' + l + '_' + c + '">';
        if (numeros[l][c] > 0) { html += '<i>' + numeros[l][c] + '</i>'; }
        html += '<input maxlength="1" autocomplete="off" id="in_' + l + '_' + c + '"';
        html += ' onfocus="focou(' + l + ',' + c + ')" oninput="digitou(' + l + ',' + c + ')" onkeydown="tecla(event,' + l + ',' + c + ')">';
        html += '</div>';
      }
    }
  }
  document.getElementById("tabuleiro").innerHTML = html;   // innerHTML coloca o texto HTML dentro da página
}

function desenharPistas() {
  var h = "";
  var v = "";
  for (var i = 0; i < palavras.length; i++) {
    var p = palavras[i];
    var item = '<li onclick="irPista(' + i + ')"><b>' + p.n + '.</b> ' + p.pista + ' (' + p.r.length + ' letras) <span id="marca_' + i + '"></span></li>';
    if (p.d == "H") { h += item; } else { v += item; }
  }
  document.getElementById("listaH").innerHTML = h;
  document.getElementById("listaV").innerHTML = v;
}

// vai para a casa (l, c) se ela existir e não for vazia
function irPara(l, c) {
  if (l < 0 || c < 0 || l >= TAM || c >= TAM) { return; }
  if (letras[l][c] != "") { document.getElementById("in_" + l + "_" + c).focus(); }
}

function focou(l, c) {
  focoL = l;
  focoC = c;
  if (dirCasa[l][c] == "H") { direcao = "H"; }
  if (dirCasa[l][c] == "V") { direcao = "V"; }
  document.getElementById("in_" + l + "_" + c).select();   // select() deixa a letra marcada para trocar fácil
}

function digitou(l, c) {
  var campo = document.getElementById("in_" + l + "_" + c);
  var v = campo.value.toUpperCase();
  if (v < "A" || v > "Z") { v = ""; }      // só aceita letras de A até Z
  campo.value = v;
  if (v != "") {
    tom(1000, 0.04, "square", 0.04, 0);
    if (direcao == "H") { irPara(l, c + 1); } else { irPara(l + 1, c); }
  }
}

function tecla(e, l, c) {
  var campo = document.getElementById("in_" + l + "_" + c);
  if (e.key == "Backspace" && campo.value == "") {
    if (direcao == "H") { irPara(l, c - 1); } else { irPara(l - 1, c); }
  }
  if (e.key == "ArrowRight") { irPara(l, c + 1); }
  if (e.key == "ArrowLeft") { irPara(l, c - 1); }
  if (e.key == "ArrowDown") { irPara(l + 1, c); }
  if (e.key == "ArrowUp") { irPara(l - 1, c); }
}

function irPista(i) {
  sfxClique();
  direcao = palavras[i].d;
  irPara(palavras[i].l, palavras[i].c);
}

// junta as letras digitadas de uma palavra
function lerPalavra(p) {
  var texto = "";
  for (var k = 0; k < p.r.length; k++) {
    var valor = document.getElementById("in_" + linhaDe(p, k) + "_" + colunaDe(p, k)).value;
    if (valor == "") { valor = "_"; }
    texto += valor;
  }
  return texto;
}

function pintarPalavra(p, classe) {
  for (var k = 0; k < p.r.length; k++) {
    document.getElementById("casa_" + linhaDe(p, k) + "_" + colunaDe(p, k)).className = classe;
  }
}

function limparCores() {
  for (var l = 0; l < TAM; l++) {
    for (var c = 0; c < TAM; c++) {
      if (letras[l][c] != "") { document.getElementById("casa_" + l + "_" + c).className = "casa"; }
    }
  }
}

function conferir() {
  var certas = 0;
  var acertou = [];
  limparCores();
  for (var i = 0; i < palavras.length; i++) {
    acertou[i] = (lerPalavra(palavras[i]) == palavras[i].r);
    if (acertou[i] == true) { certas++; }
  }
  // 1º pinta as erradas de vermelho, 2º pinta as certas de verde (por cima, nas casas que cruzam)
  for (i = 0; i < palavras.length; i++) {
    if (acertou[i] == false) {
      pintarPalavra(palavras[i], "casa erro");
      document.getElementById("marca_" + i).innerHTML = "❌";
    }
  }
  for (i = 0; i < palavras.length; i++) {
    if (acertou[i] == true) {
      pintarPalavra(palavras[i], "casa certa");
      document.getElementById("marca_" + i).innerHTML = "✅";
    }
  }
  document.getElementById("contador").innerHTML = certas + " de " + palavras.length + " palavras";
  if (certas == palavras.length) {
    document.getElementById("msgCruz").innerHTML = "🎉 Parabéns! Você completou a cruzadinha!";
    sfxAcerto();
  } else {
    document.getElementById("msgCruz").innerHTML = "Palavras em vermelho (❌) estão erradas ou incompletas. Tente de novo!";
    sfxErro();
  }
}

function reiniciar() {
  sfxClique();
  for (var l = 0; l < TAM; l++) {
    for (var c = 0; c < TAM; c++) {
      if (letras[l][c] != "") { document.getElementById("in_" + l + "_" + c).value = ""; }
    }
  }
  limparCores();
  for (var i = 0; i < palavras.length; i++) { document.getElementById("marca_" + i).innerHTML = ""; }
  document.getElementById("contador").innerHTML = "0 de " + palavras.length + " palavras";
  document.getElementById("msgCruz").innerHTML = "Tabuleiro limpo. Boa sorte!";
  dicasUsadas = 0;
}

// ================= BOTÃO DICA DA CRUZADINHA =================
function pedirDica() {
  sfxClique();
  if (focoL < 0) {
    document.getElementById("msgCruz").innerHTML = "Clique numa casa do tabuleiro primeiro e depois peça a dica.";
    return;
  }
  // procura a palavra que passa pela casa onde o cursor está (prefere a direção atual)
  var achou = -1;
  for (var i = 0; i < palavras.length; i++) {
    for (var k = 0; k < palavras[i].r.length; k++) {
      if (linhaDe(palavras[i], k) == focoL && colunaDe(palavras[i], k) == focoC) {
        if (palavras[i].d == direcao) { achou = i; } else if (achou == -1) { achou = i; }
      }
    }
  }
  var nomeDir = "vertical";
  if (palavras[achou].d == "H") { nomeDir = "horizontal"; }
  dicasUsadas++;
  tom(880, 0.1, "sine", 0.12, 0);
  tom(1175, 0.2, "sine", 0.12, 0.1);
  document.getElementById("msgCruz").innerHTML = "💡 <b>Dica da palavra " + palavras[achou].n + " " + nomeDir + ":</b> " + dicas[achou] + " <i>(dicas usadas: " + dicasUsadas + ")</i>";
}

// ================= CAÇA-RESPOSTAS (estilo Duck Hunt + Doom) =================
var jogando = false;
var travado = true;          // true = já atirou nessa pergunta, espera a próxima
var perguntas = [];          // ordem embaralhada das palavras
var qAtual = 0;
var acertos = 0;
var alvoX = [];              // posição horizontal de cada resposta que se move
var alvoDir = [];            // 1 = vai para a direita, -1 = vai para a esquerda
var alvoNome = [];           // qual palavra (posição no vetor palavras) cada alvo representa
var cores = ["#e63946", "#ff9a1f", "#8a4fd6", "#2ec4b6", "#f4d03f"];   // cor do puffle de cada alvo
var VELOCIDADE = 1.2;        // pixels por passo (a cada 30 ms): devagar para dar para ler
var LARGURA_ALVO = 190;
var timerAlvos = null;

function embaralhar(vetor) {
  for (var i = vetor.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));   // Math.random() sorteia 0 a 1; Math.floor arredonda para baixo
    var guardado = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = guardado;
  }
}

function comecarJogo() {
  sfxClique();
  perguntas = [];
  for (var i = 0; i < palavras.length; i++) { perguntas[i] = i; }
  embaralhar(perguntas);
  qAtual = 0;
  acertos = 0;
  jogando = true;
  document.getElementById("btnJogo").style.display = "none";
  if (timerAlvos == null) { timerAlvos = setInterval(moverAlvos, 30); }
  proximaPergunta();
}

function atualizarPlacar() {
  var numero = qAtual + 1;
  if (numero > palavras.length) { numero = palavras.length; }
  document.getElementById("placar").innerHTML = "Pergunta " + numero + " de " + palavras.length + " · Acertos: " + acertos;
}

function proximaPergunta() {
  if (jogando == false) { return; }
  if (qAtual >= perguntas.length) {
    jogando = false;
    travado = true;
    document.getElementById("alvos").innerHTML = "";
    document.getElementById("pergunta").innerHTML = "🏁 Fim de jogo! Você acertou " + acertos + " de " + palavras.length + ".";
    document.getElementById("btnJogo").innerHTML = "Jogar de novo";
    document.getElementById("btnJogo").style.display = "inline-block";
    sfxAcerto();
    return;
  }
  var certa = perguntas[qAtual];
  // sorteia 4 respostas erradas diferentes e junta com a certa
  var opcoes = [certa];
  while (opcoes.length < 5) {
    var s = Math.floor(Math.random() * palavras.length);
    var jaTem = false;
    for (var k = 0; k < opcoes.length; k++) {
      if (opcoes[k] == s) { jaTem = true; }
    }
    if (jaTem == false) { opcoes.push(s); }
  }
  embaralhar(opcoes);
  var html = "";
  for (var i = 0; i < 5; i++) {
    alvoNome[i] = opcoes[i];
    alvoX[i] = i * 120;
    if (i % 2 == 0) { alvoDir[i] = 1; } else { alvoDir[i] = -1; }   // % = resto da divisão (par/ímpar)
    html += '<div class="alvo" id="alvo' + i + '" style="top:' + (10 + i * 52) + 'px;left:' + alvoX[i] + 'px" onclick="atirar(' + i + ')">';
    html += '<span class="puf" style="--c:' + cores[i] + '"></span>' + palavras[opcoes[i]].nome + '</div>';
  }
  document.getElementById("alvos").innerHTML = html;
  document.getElementById("pergunta").innerHTML = "<b>Qual é o termo?</b> " + palavras[certa].pista;
  travado = false;
  atualizarPlacar();
}

// as respostas quicam: ao encostar numa lateral do palco, voltam para o outro lado
function moverAlvos() {
  if (jogando == false) { return; }
  var limite = document.getElementById("palco").offsetWidth - LARGURA_ALVO - 6;
  for (var i = 0; i < 5; i++) {
    var el = document.getElementById("alvo" + i);
    if (el != null) {
      alvoX[i] = alvoX[i] + VELOCIDADE * alvoDir[i];
      if (alvoX[i] >= limite) { alvoX[i] = limite; alvoDir[i] = -1; }
      if (alvoX[i] <= 0) { alvoX[i] = 0; alvoDir[i] = 1; }
      el.style.left = alvoX[i] + "px";
    }
  }
}

function apagarRaio() {
  document.getElementById("raio").style.display = "none";
  document.getElementById("flash").style.display = "none";
  document.getElementById("arma").className = "arma";
}

// roda a cada clique no palco: o laser sai da ponta da arma (embaixo, no meio) até o ponto clicado
function mirar(e) {
  if (audio != null && audio.state == "suspended") { audio.resume(); }
  var palco = document.getElementById("palco");
  var ret = palco.getBoundingClientRect();           // posição do palco na tela
  var x = e.clientX - ret.left;                       // onde o mouse clicou dentro do palco
  var y = e.clientY - ret.top;
  var x0 = palco.offsetWidth / 2;                     // ponta da arma
  var y0 = palco.offsetHeight - 186;
  var nomes = ["linhaA", "linhaB"];
  for (var i = 0; i < 2; i++) {
    var linha = document.getElementById(nomes[i]);
    linha.setAttribute("x1", x0);                     // setAttribute muda os números da linha desenhada (SVG)
    linha.setAttribute("y1", y0);
    linha.setAttribute("x2", x);
    linha.setAttribute("y2", y);
  }
  document.getElementById("raio").style.display = "block";
  var flash = document.getElementById("flash");
  flash.style.left = (x - 18) + "px";
  flash.style.top = (y - 18) + "px";
  flash.style.display = "block";
  document.getElementById("arma").className = "arma tiro";   // a arma dá um "coice"
  sfxPiu();
  setTimeout(apagarRaio, 160);
}

// roda quando o clique acerta em cima de uma resposta
function atirar(i) {
  if (travado == true || jogando == false) { return; }
  travado = true;
  var certa = perguntas[qAtual];
  var texto = "";
  if (alvoNome[i] == certa) {
    acertos++;
    texto = "✅ Acertou! ";
    document.getElementById("alvo" + i).className = "alvo certo";
    sfxAcerto();
  } else {
    texto = "❌ Errou! A resposta era <b>" + palavras[certa].nome + "</b>. ";
    document.getElementById("alvo" + i).className = "alvo errado";
    for (var k = 0; k < 5; k++) {
      if (alvoNome[k] == certa) { document.getElementById("alvo" + k).className = "alvo certo"; }
    }
    sfxErro();
  }
  document.getElementById("pergunta").innerHTML = texto + palavras[certa].pista;
  qAtual++;
  atualizarPlacar();
  setTimeout(proximaPergunta, 3000);   // espera 3 segundos (dá tempo de ler) e vai para a próxima
}

// ================= AJUSTE DA MESA E INÍCIO =================
// a mesa tem 1100px de largura; em telas menores o zoom diminui tudo junto, mantendo as proporções
function ajustarMesa() {
  var escala = window.innerWidth / 1100;
  if (escala > 1) { escala = 1; }
  document.getElementById("cena").style.zoom = escala;
}

montarDados();
desenharTabuleiro();
desenharPistas();
atualizarRelogio();
ajustarMesa();
window.onresize = ajustarMesa;
setInterval(atualizarRelogio, 30000);
