// ===== GERADOR DE DICAS SUSTENTÁVEIS =====
// Lista com 10 dicas relacionadas à agricultura familiar e sustentabilidade
const listaDicas = [
    "💧 Reaproveite a água da chuva para irrigar pequenas plantações. Economize água!",
    "🌱 Plante árvores nativas ao redor das nascentes para proteger a água doce.",
    "🐝 Evite agrotóxicos: use controle biológico de pragas (joaninhas, sapos, aves).",
    "🥕 Faça rotação de culturas para não esgotar o solo e aumentar a produtividade.",
    "♻️ Transforme restos de comida e folhas em adubo orgânico (compostagem).",
    "☀️ Use energia solar para cercas elétricas ou bombeamento de água.",
    "🌾 Valorize sementes crioulas - elas são adaptadas à sua região e mais resistentes.",
    "🐔 Crie galinhas soltas para controlar pragas e ainda ter ovos e adubo natural.",
    "📆 Planeje o plantio respeitando o calendário da natureza e as estações chuvosas.",
    "🤝 Venda direto para o consumidor em feiras orgânicas - menos desperdício e mais lucro."
];

// Capturar elementos do DOM
const botaoGerar = document.getElementById('btnGerarDica');
const caixaDica = document.getElementById('exibirDica');

// Função que sorteia uma dica aleatória
function gerarDicaSustentavel() {
    const indiceAleatorio = Math.floor(Math.random() * listaDicas.length);
    const dicaEscolhida = listaDicas[indiceAleatorio];
    caixaDica.innerHTML = dicaEscolhida;
}

// Adicionar evento ao botão
if (botaoGerar) {
    botaoGerar.addEventListener('click', gerarDicaSustentavel);
}

// ===== BOTÃO DE ACESSIBILIDADE (mostrar/esconder menu) =====
const btnAcessibilidade = document.getElementById('btnAcessibilidade');
const menuAcessibilidade = document.getElementById('menuAcessibilidade');

if (btnAcessibilidade && menuAcessibilidade) {
    btnAcessibilidade.addEventListener('click', () => {
        // Alterna visibilidade do menu de acessibilidade
        if (menuAcessibilidade.style.display === 'none' || menuAcessibilidade.style.display === '') {
            menuAcessibilidade.style.display = 'flex';
        } else {
            menuAcessibilidade.style.display = 'none';
        }
    });
}

// ===== FUNÇÃO PARA AUMENTAR FONTE =====
const botaoAumentar = document.getElementById('aumentarFonte');
let tamanhoFonteAtual = 100; // em porcentagem

function aumentarFonte() {
    if (tamanhoFonteAtual < 140) { // limite máximo 140%
        tamanhoFonteAtual += 10;
        document.body.style.fontSize = tamanhoFonteAtual + '%';
    }
}

// ===== FUNÇÃO PARA DIMINUIR FONTE =====
function diminuirFonte() {
    if (tamanhoFonteAtual > 70) { // limite mínimo 70%
        tamanhoFonteAtual -= 10;
        document.body.style.fontSize = tamanhoFonteAtual + '%';
    }
}

// Atribuir eventos aos botões de fonte
if (botaoAumentar) {
    botaoAumentar.addEventListener('click', aumentarFonte);
}

const botaoDiminuir = document.getElementById('diminuirFonte');
if (botaoDiminuir) {
    botaoDiminuir.addEventListener('click', diminuirFonte);
}

// ===== ALTO CONTRASTE =====
const botaoContraste = document.getElementById('altoContraste');
let contrasteAtivo = false;

function alternarContraste() {
    if (contrasteAtivo) {
        document.body.classList.remove('alto-contraste');
        contrasteAtivo = false;
    } else {
        document.body.classList.add('alto-contraste');
        contrasteAtivo = true;
    }
}

if (botaoContraste) {
    botaoContraste.addEventListener('click', alternarContraste);
}

// Inicialização: garantir que menu de acessibilidade comece escondido
document.addEventListener('DOMContentLoaded', () => {
    if (menuAcessibilidade) {
        menuAcessibilidade.style.display = 'none';
    }
    // Mensagem inicial amigável na caixa de dicas
    if (caixaDica && caixaDica.innerHTML === 'Clique no botão para receber sua primeira dica!') {
        // mantém a mensagem padrão do HTML
    }
});
