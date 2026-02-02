const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const valor = 1759;

function abrirPix() {
  modal.innerHTML = `
    <h2>Negociação via Pix</h2>

    <div class="option">
      <input type="radio" name="pix">
      Pix · Entrada R$ 0,00 · 1x Pix<br>
      <strong>R$ 1.759,00</strong>
    </div>

    <div class="option">
      <input type="radio" name="pix">
      Pix · Entrada R$ 615,65 · Crédito 1x<br>
      <strong>R$ 1.143,35</strong>
    </div>

    <div class="option">
      <input type="radio" name="pix">
      Pix · Entrada R$ 615,65 · Crédito 2x<br>
      <strong>2x de R$ 571,68</strong>
    </div>

    <div class="option">
      <input type="radio" name="pix">
      Pix · Entrada R$ 615,65 · Crédito 3x<br>
      <strong>3x de R$ 381,12</strong>
    </div>

    <div class="option">
      <input type="radio" name="pix">
      Pix · Entrada R$ 703,60 · Boleto 1x<br>
      <strong>R$ 1.055,40</strong>
    </div>

    <div class="option">
      <input type="radio" name="pix">
      Pix · Entrada R$ 703,60 · Boleto 2x<br>
      <strong>2x de R$ 527,70</strong>
    </div>

    <button onclick="confirmar()">Confirmar Pix</button>
    <button onclick="fechar()">Cancelar</button>
  `;

  overlay.style.display = "flex";
}

function abrirCredito() {
  modal.innerHTML = `
    <h2>Pagamento com Cartão</h2>

    <input placeholder="Número do cartão">
    <input placeholder="Nome no cartão">
    <input placeholder="Validade">
    <input placeholder="CVV">

    <select>
      <option>1x sem juros</option>
      <option>2x</option>
      <option>3x</option>
      <option>6x</option>
      <option>12x</option>
    </select>

    <button onclick="confirmar()">Pagar</button>
    <button onclick="fechar()">Cancelar</button>
  `;
  overlay.style.display = "flex";
}

function confirmar() {
  alert("Proposta registrada com sucesso!");
  fechar();
}

function fechar() {
  overlay.style.display = "none";
}