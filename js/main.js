'use strict';

// ─── Config ───────────────────────────────────────────────
const CONFIG = {
    whatsapp: "31985097424",
    pix: {
        key: "+55 31 985097424",
        name: "Leticia Moises",
        city: "Belo Horizonte",
    },
    cardPaymentUrl: "https://link.mercadopago.com.br/lmcasament",
};

// ─── Gift list ────────────────────────────────────────────
const presentes = [
    // lua-de-mel
    { id: 1,  cat: 'lua-de-mel', nome: 'Ajude com a Lua de Mel',           desc: 'Contribua para a nossa viagem dos sonhos',    preco: 'R$ 100,00',   img: 'imagens/Ajude%20a%20mala.png',       url: '' },
    { id: 2,  cat: 'lua-de-mel', nome: 'Mapa Mundi Decorativo',             desc: 'Para marcar os destinos que vamos explorar',  preco: 'R$ 80,00',    img: 'imagens/Mapa.png',                   url: '' },

    // cerimonia
    { id: 3,  cat: 'cerimonia',  nome: 'Buquê da Noiva',                    desc: 'Arranjo floral para a cerimônia',              preco: 'R$ 150,00',   img: 'imagens/buque.png',                  url: '' },
    { id: 4,  cat: 'cerimonia',  nome: 'Decoração da Cerimônia',            desc: 'Detalhes especiais para o grande dia',         preco: 'R$ 200,00',   img: 'imagens/bugy.png',                   url: '' },

    // casa
    { id: 5,  cat: 'casa',       nome: 'Ar-Condicionado',                   desc: 'Clima ideal para o lar dos noivos',            preco: 'R$ 1.800,00', img: 'imagens/Ar%20condicionado.jpeg',     url: '' },
    { id: 6,  cat: 'casa',       nome: 'Armário',                           desc: 'Organização e espaço para o quarto',           preco: 'R$ 900,00',   img: 'imagens/armario.png',                url: '' },
    { id: 7,  cat: 'casa',       nome: 'Televisão',                         desc: 'Para os melhores momentos juntos',             preco: 'R$ 1.500,00', img: 'imagens/tv.png',                     url: '' },
    { id: 8,  cat: 'casa',       nome: 'Robô Aspirador',                    desc: 'Limpeza automática e praticidade no lar',      preco: 'R$ 700,00',   img: 'imagens/Rob%C3%B4%20aspirador%20.jpeg', url: '' },
    { id: 9,  cat: 'casa',       nome: 'Cortina Branca',                    desc: 'Elegância e leveza para os ambientes',         preco: 'R$ 250,00',   img: 'imagens/Cortina%20Branca.jpeg',      url: '' },
    { id: 10, cat: 'casa',       nome: 'Cortina',                           desc: 'Decoração e privacidade para o lar',           preco: 'R$ 220,00',   img: 'imagens/cortina.jpeg',               url: '' },
    { id: 11, cat: 'casa',       nome: 'Varal Retrátil 100cm',              desc: 'Praticidade para o dia a dia',                 preco: 'R$ 120,00',   img: 'imagens/Varal%20retr%C3%A1til%20100cm.jpeg', url: '' },
    { id: 12, cat: 'casa',       nome: 'Luminária de Apoio',                desc: 'Iluminação e aconchego para o ambiente',       preco: 'R$ 180,00',   img: 'imagens/Apoio.png',                  url: '' },
    { id: 13, cat: 'casa',       nome: 'Kit Decoração',                     desc: 'Itens de decoração para o lar',                preco: 'R$ 160,00',   img: 'imagens/2.png',                      url: '' },
    { id: 14, cat: 'casa',       nome: 'Kit Organização',                   desc: 'Organização e estilo para a casa',             preco: 'R$ 140,00',   img: 'imagens/4.png',                      url: '' },
    { id: 15, cat: 'casa',       nome: 'Presente Especial',                 desc: 'Uma surpresa para os noivos',                  preco: 'R$ 200,00',   img: 'imagens/Screenshot_20260207_181144_Samsung%20Internet.jpg', url: '' },

    // cozinha
    { id: 16, cat: 'cozinha',    nome: 'Batedeira Stand Mixer',             desc: 'Para as melhores receitas',                    preco: 'R$ 500,00',   img: 'imagens/cozinha/BATEDEIRA%2B.jpeg',  url: '' },
    { id: 17, cat: 'cozinha',    nome: 'Forno Elétrico para Embutir',       desc: 'Praticidade e modernidade na cozinha',         preco: 'R$ 1.200,00', img: 'imagens/cozinha/Forno%20El%C3%A9trico%20para%20Embutir.jpeg', url: '' },
    { id: 18, cat: 'cozinha',    nome: 'Lava-Louças',                       desc: 'Mais tempo juntos e menos na pia',             preco: 'R$ 2.000,00', img: 'imagens/cozinha/Lava-Lou%C3%A7as.jpeg', url: '' },
    { id: 19, cat: 'cozinha',    nome: 'Liquidificador Mix 2 Velocidades',  desc: 'Versatilidade para o dia a dia',               preco: 'R$ 280,00',   img: 'imagens/cozinha/Mix%202%20Velocidades.jpeg', url: '' },
    { id: 20, cat: 'cozinha',    nome: 'Aparelho de Jantar Chique',         desc: 'Para receber com elegância',                   preco: 'R$ 450,00',   img: 'imagens/cozinha/pratos%20chiques.jpeg', url: '' },
    { id: 21, cat: 'cozinha',    nome: 'Jogo de Pratos Rasos',              desc: 'Para as refeições do dia a dia',               preco: 'R$ 280,00',   img: 'imagens/cozinha/pratos%20rasos.jpeg',  url: '' },
    { id: 22, cat: 'cozinha',    nome: 'Aparelho de Jantar',                desc: 'Conjunto completo para a mesa',                preco: 'R$ 350,00',   img: 'imagens/cozinha/pratos.jpeg',          url: '' },
    { id: 23, cat: 'cozinha',    nome: 'Depurador de Ar',                   desc: 'Para uma cozinha sempre fresquinha',           preco: 'R$ 400,00',   img: 'imagens/depurador.png',               url: '' },

    // quarto
    { id: 24, cat: 'quarto',     nome: 'Base Box',                          desc: 'Conforto e suporte para um bom sono',          preco: 'R$ 800,00',   img: 'imagens/base.png',                   url: '' },
    { id: 25, cat: 'quarto',     nome: 'Cabeceira Estofada Bege Escuro',    desc: 'Elegância e conforto para o quarto',           preco: 'R$ 600,00',   img: 'imagens/quarto/Cabeceira%20Estofada%20Bege%20Escuro.jpeg', url: '' },
    { id: 26, cat: 'quarto',     nome: 'Forro de Cama',                     desc: 'Proteção e conforto para o colchão',           preco: 'R$ 180,00',   img: 'imagens/quarto/forro%204.jpeg',        url: '' },
    { id: 27, cat: 'quarto',     nome: 'Forro de Cama (opção 1)',           desc: 'Macio e resistente para o dia a dia',          preco: 'R$ 160,00',   img: 'imagens/quarto/forro%20de%20cama1.jpeg', url: '' },
    { id: 28, cat: 'quarto',     nome: 'Forro de Cama (opção 2)',           desc: 'Qualidade e durabilidade garantidas',           preco: 'R$ 160,00',   img: 'imagens/quarto/forro%20de%20cama2.jpeg', url: '' },
    { id: 29, cat: 'quarto',     nome: 'Forro de Cama (opção 3)',           desc: 'Conforto para as noites de descanso',          preco: 'R$ 160,00',   img: 'imagens/quarto/forro%20de%20cama3.jpeg', url: '' },
    { id: 30, cat: 'quarto',     nome: 'Jogo de Lençol',                    desc: 'Maciez e elegância para o quarto',             preco: 'R$ 250,00',   img: 'imagens/quarto/jogo%20de%20lencou.jpeg', url: '' },
    { id: 31, cat: 'quarto',     nome: 'Lençol',                            desc: 'Suave e fresquinho para boas noites',          preco: 'R$ 200,00',   img: 'imagens/quarto/len%C3%A7ou4.jpeg',     url: '' },
    { id: 32, cat: 'quarto',     nome: 'Travesseiro',                       desc: 'Para os melhores sonhos a dois',               preco: 'R$ 120,00',   img: 'imagens/quarto/travesseriro.jpeg',     url: '' },

    // banheiro
    { id: 33, cat: 'banheiro',   nome: 'Chuveiro Elétrico',                 desc: 'Conforto e eficiência no banho',               preco: 'R$ 350,00',   img: 'imagens/banheiro/Chuveiro%20.jpeg',   url: '' },
    { id: 34, cat: 'banheiro',   nome: 'Toalha Azul',                       desc: 'Maciez e absorção de qualidade',               preco: 'R$ 80,00',    img: 'imagens/banheiro/toalha%20azul.jpeg', url: '' },
    { id: 35, cat: 'banheiro',   nome: 'Toalha Branca',                     desc: 'Elegância e maciez para o banheiro',           preco: 'R$ 80,00',    img: 'imagens/banheiro/toalha%20branca%20.jpeg', url: '' },
    { id: 36, cat: 'banheiro',   nome: 'Toalha',                            desc: 'Conforto após cada banho',                     preco: 'R$ 75,00',    img: 'imagens/banheiro/toalhe.jpeg',        url: '' },
    { id: 37, cat: 'banheiro',   nome: 'Toalha Verde',                      desc: 'Cor e frescor para o banheiro',                preco: 'R$ 75,00',    img: 'imagens/banheiro/tolha%20verde.jpeg', url: '' },
];

// ─── PIX Helpers ─────────────────────────────────────────
function parsePriceToFloat(priceStr) {
    if (!priceStr) return null;
    const cleaned = priceStr.replace(/[^\d,]/g, '').replace(',', '.');
    const val = parseFloat(cleaned);
    return isNaN(val) ? null : val.toFixed(2);
}

function calcCRC16(payload) {
    let crc = 0xFFFF;
    for (let i = 0; i < payload.length; i++) {
        crc ^= payload.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
        }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

function gerarPixPayload(priceStr) {
    const { key, name, city } = CONFIG.pix;
    function emv(id, val) {
        const v = String(val);
        return `${id}${v.length.toString().padStart(2, '0')}${v}`;
    }
    const parsedAmount = parsePriceToFloat(priceStr);
    const pixInfo = emv('00', 'BR.GOV.BCB.PIX') + emv('01', key);
    const payload = [
        emv('00', '01'),
        emv('26', pixInfo),
        emv('52', '0000'),
        emv('53', '986'),
        parsedAmount !== null ? emv('54', parsedAmount) : '',
        emv('58', 'BR'),
        emv('59', name.substring(0, 25)),
        emv('60', city.substring(0, 15)),
        emv('62', emv('05', '***')),
        '6304',
    ].join('');
    return payload + calcCRC16(payload);
}

// ─── Toast ───────────────────────────────────────────────
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── Gift Cards ──────────────────────────────────────────
function renderGifts() {
    const list = document.getElementById('gift-list');
    if (!list) return;
    list.innerHTML = presentes.map(p => `
        <div class="gift-card" role="button" tabindex="0"
             onclick="abrirModal(${p.id})"
             onkeydown="if(event.key==='Enter')abrirModal(${p.id})">
            <div class="gift-card__image">
                <img src="${p.img}" alt="${p.nome}" loading="lazy">
                <span class="gift-card__badge badge-${p.cat}">${badgeLabel(p.cat)}</span>
            </div>
            <div class="gift-card__body">
                <h3 class="gift-card__name">${p.nome}</h3>
                <p class="gift-card__desc">${p.desc}</p>
                <div class="gift-card__price">${p.preco}</div>
                <button class="gift-card__btn">Presentear</button>
            </div>
        </div>
    `).join('');
}

function badgeLabel(cat) {
    const labels = {
        'cozinha': 'Cozinha',
        'quarto': 'Quarto',
        'banheiro': 'Banheiro',
        'lua-de-mel': 'Lua de Mel',
        'cerimonia': 'Cerimônia',
        'casa': 'Casa',
    };
    return labels[cat] || cat;
}

// ─── Modal ───────────────────────────────────────────────
let _modalPresente = null;

function abrirModal(id) {
    const p = presentes.find(x => x.id === id);
    if (!p) return;
    _modalPresente = p;

    document.getElementById('modal-title').textContent = p.nome;
    document.getElementById('modal-desc').textContent  = p.desc;
    document.getElementById('modal-price').textContent = p.preco;

    // WhatsApp
    const msg = encodeURIComponent(`Olá! Quero presentear com: *${p.nome}* (${p.preco}) 🎁`);
    document.getElementById('btn-whatsapp').href = `https://wa.me/55${CONFIG.whatsapp}?text=${msg}`;

    // Product link
    const btnProduct = document.getElementById('btn-product');
    if (p.url) {
        btnProduct.href = p.url;
        btnProduct.style.display = '';
    } else {
        btnProduct.style.display = 'none';
    }

    // Card button visibility
    const cardWrapper = document.getElementById('payment-card-wrapper');
    cardWrapper.style.display = CONFIG.cardPaymentUrl ? '' : 'none';

    // Reset panels and active states
    document.querySelector('.pix-panel').classList.remove('is-open');
    document.querySelector('.card-panel').classList.remove('is-open');
    document.querySelector('.payment-btn--pix').classList.remove('is-active');
    document.querySelector('.payment-btn--card').classList.remove('is-active');

    // Open modal
    document.getElementById('modal-reserva').classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function fecharModal(e) {
    if (e && e.target !== document.getElementById('modal-reserva')) return;
    document.getElementById('modal-reserva').classList.remove('is-open');
    document.body.style.overflow = '';
    _modalPresente = null;
}

function mostrarPIX() {
    if (!_modalPresente) return;
    const p = _modalPresente;
    const payload = gerarPixPayload(p.preco);
    const qrUrl   = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${encodeURIComponent(payload)}`;

    document.getElementById('pix-qr-img').src              = qrUrl;
    document.getElementById('pix-key-display').textContent = CONFIG.pix.key;
    document.getElementById('pix-amount').textContent       = p.preco;

    document.querySelector('.pix-panel').classList.add('is-open');
    document.querySelector('.card-panel').classList.remove('is-open');
    document.querySelector('.payment-btn--pix').classList.add('is-active');
    document.querySelector('.payment-btn--card').classList.remove('is-active');
}

function mostrarCartao() {
    if (!CONFIG.cardPaymentUrl) return;
    document.getElementById('btn-card-pay').href = CONFIG.cardPaymentUrl;
    document.querySelector('.card-panel').classList.add('is-open');
    document.querySelector('.pix-panel').classList.remove('is-open');
    document.querySelector('.payment-btn--card').classList.add('is-active');
    document.querySelector('.payment-btn--pix').classList.remove('is-active');
}

function copiarChavePIX() {
    navigator.clipboard.writeText(CONFIG.pix.key)
        .then(() => showToast('Chave PIX copiada! ✓'))
        .catch(() => {
            const ta = document.createElement('textarea');
            ta.value = CONFIG.pix.key;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('Chave PIX copiada! ✓');
        });
}

// ─── Countdown ───────────────────────────────────────────
function updateCountdown() {
    const target = new Date('2026-09-12T15:00:00-03:00');
    const now    = new Date();
    const diff   = target - now;

    if (diff <= 0) {
        ['days','hours','minutes','seconds'].forEach(id => {
            document.getElementById(id).textContent = '00';
        });
        return;
    }

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('days').textContent    = String(days).padStart(2, '0');
    document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ─── Calendar ────────────────────────────────────────────
function adicionarCalendario() {
    const url = 'https://www.google.com/calendar/render?action=TEMPLATE'
        + '&text=Casamento+Letícia+%26+Moisés'
        + '&dates=20260912T180000Z/20260912T230000Z'
        + '&details=Casamento+de+Letícia+e+Moisés'
        + '&location=R.+Ataláia%2C+62+-+Jaqueline%2C+Belo+Horizonte+-+MG'
        + '&sf=true&output=xml';
    window.open(url, '_blank');
}

// ─── Forms ───────────────────────────────────────────────
function initForms() {
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', e => {
            e.preventDefault();
            const inputs = rsvpForm.querySelectorAll('input');
            const nome   = inputs[0].value.trim();
            const adultos = inputs[1].value.trim();
            if (!nome || !adultos) return;
            const msg = encodeURIComponent(
                `Olá! Confirmo minha presença no casamento de Letícia e Moisés! 🎉\n`
                + `*Nome:* ${nome}\n`
                + `*Adultos:* ${adultos}`
            );
            window.open(`https://wa.me/55${CONFIG.whatsapp}?text=${msg}`, '_blank');
            rsvpForm.reset();
            showToast('Presença confirmada! ✓');
        });
    }

    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', e => {
            e.preventDefault();
            const nome  = document.getElementById('comment-name').value.trim();
            const texto = document.getElementById('comment-text').value.trim();
            if (!nome || !texto) return;
            const msg = encodeURIComponent(
                `💌 *Recado para os noivos de ${nome}:*\n\n${texto}`
            );
            window.open(`https://wa.me/55${CONFIG.whatsapp}?text=${msg}`, '_blank');
            commentForm.reset();
            showToast('Recado enviado! ✓');
        });
    }
}

// ─── Navbar ──────────────────────────────────────────────
function initNavbar() {
    const navbar   = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('is-scrolled', window.scrollY > 20);
    }, { passive: true });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('is-active'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('is-active');
            }
        });
    }, { rootMargin: '-35% 0px -60% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
}

// ─── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderGifts();
    initForms();
    initNavbar();
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Close modal on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.getElementById('modal-reserva').style.display = 'none';
            document.body.style.overflow = '';
            _modalPresente = null;
        }
    });
});
