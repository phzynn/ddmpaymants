const divida = 1759;

// liga botões
document.getElementById("btnPix").onclick = abrirPix;
document.getElementById("btnCartao").onclick = abrirCartao;

function abrirPix() {
  abrirModal(`
    <h3>Negociação via Pix</h3>

    <button onclick="pixVista()">À vista (10% desconto)</button>
    <button onclick="pixEntrada()">Com entrada</button>
    <button onclick="pixParcelado()">Parcelado</button>

    <button class="cancelar" onclick="fechar()">Cancelar</button>
  `);
}

function pixVista() {
  const total = divida * 0.9;
  atualizarModal(`Total à vista: <strong>R$ ${total.toFixed(2)}</strong>`);
}

function pixEntrada() {
  const entrada = 300;
  const restante = (divida - entrada) * 1.18;
  atualizarModal(`
    Entrada: R$ 300<br>
    3x de R$ ${(restante / 3).toFixed(2)}
  `);
}

function pixParcelado() {
  const parcelas = 6;
  const total = divida * Math.pow(1.018, parcelas);
  atualizarModal(`
    ${parcelas}x de R$ ${(total / parcelas).toFixed(2)}<br>
    Total: R$ ${total.toFixed(2)}
  `);
}

function abrirCartao() {
  abrirModal(`
    <h3>Cartão de Crédito</h3>

    <input placeholder="Número do cartão">
    <input placeholder="Nome impresso">
    <input placeholder="Validade">
    <input placeholder="CVV">

    <button onclick="parcelarCartao(6)">6x</button>
    <button onclick="parcelarCartao(12)">12x</button>

    <button class="cancelar" onclick="fechar()">Cancelar</button>
  `);
}

function parcelarCartao(n) {
  const total = divida * Math.pow(1.025, n);
  atualizarModal(`
    ${n}x de R$ ${(total / n).toFixed(2)}<br>
    Total: R$ ${total.toFixed(2)}
  `);
}

function abrirModal(html) {
  document.getElementById("modalContent").innerHTML = html;
  document.getElementById("overlay").style.display = "flex";
}

function atualizarModal(texto) {
  document.getElementById("modalContent").innerHTML += `<p>${texto}</p>`;
}

function fechar() {
  document.getElementById("overlay").style.display = "none";
}
