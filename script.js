const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const valor = 1759;

function abrirPix() {
  const avista = (valor * 0.9).toFixed(2);
  modal.innerHTML = `
    <h2>Negociação via Pix</h2>

    <div class="option">
      <input type="radio" name="pix"> À vista: R$ ${avista}
    </div>

    <div class="option">
      <input type="radio" name="pix"> Entrada R$ 300 + 6x R$ ${( (valor-300)/6 ).toFixed(2)}
    </div>

    <div class="option">
      <input type="radio" name="pix"> 12x com juros: R$ ${(valor*1.25/12).toFixed(2)}
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