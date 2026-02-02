const overlay = document.getElementById("overlay");
const modal = document.getElementById("modalContent");
const divida = 1759;

document.getElementById("btnPix").onclick = () => abrirPix();
document.getElementById("btnCartao").onclick = () => abrirCartao();

function abrirPix() {
  overlay.style.display = "flex";
  modal.innerHTML = `
    <h2>Negociação via Pix</h2>
    <p><strong>Escolha uma opção:</strong></p>

    <label><input type="radio" name="pix" value="avista"> À vista: R$ ${(divida*0.9).toFixed(2)}</label><br>
    <label><input type="radio" name="pix" value="entrada"> Entrada R$ 300 + 6x</label><br>
    <label><input type="radio" name="pix" value="parcelado"> 12x com juros</label>

    <button onclick="confirmarPix()">Confirmar Pix</button>
    <button onclick="fechar()">Cancelar</button>
  `;
}

function confirmarPix() {
  alert("Proposta Pix registrada com sucesso!");
  fechar();
}

function abrirCartao() {
  overlay.style.display = "flex";
  modal.innerHTML = `
    <h2>Pagamento com Cartão</h2>

    <input placeholder="Número do cartão"><br><br>
    <input placeholder="Nome no cartão"><br><br>
    <input placeholder="Validade"><br><br>
    <input placeholder="CVV"><br>

    <button onclick="parcelas()">Continuar</button>
    <button onclick="fechar()">Cancelar</button>
  `;
}

function parcelas() {
  modal.innerHTML = `
    <h2>Parcelamento</h2>
    <button>1x R$ ${divida.toFixed(2)}</button>
    <button>6x R$ ${(divida/6).toFixed(2)}</button>
    <button>12x R$ ${(divida*1.15/12).toFixed(2)} (juros)</button>
    <button onclick="fechar()">Cancelar</button>
  `;
}

function fechar() {
  overlay.style.display = "none";
}
