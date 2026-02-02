const divida = 1759;

function abrirPix() {
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("modalContent").innerHTML = `
    <h3>Negociação via Pix</h3>

    <button onclick="pixVista()">À vista (10% desconto)</button>
    <button onclick="pixEntrada()">Com entrada</button>
    <button onclick="pixParcelado()">Parcelado</button>

    <br><br>
    <button onclick="fechar()">Cancelar</button>
  `;
}

function pixVista() {
  const total = divida * 0.9;
  alert("Total à vista: R$ " + total.toFixed(2));
}

function pixEntrada() {
  const entrada = 300;
  const restante = (divida - entrada) * 1.18;
  alert(`Entrada: R$300\n3x de R$ ${(restante/3).toFixed(2)}`);
}

function pixParcelado() {
  const parcelas = 6;
  const total = divida * Math.pow(1.018, parcelas);
  alert(`${parcelas}x de R$ ${(total/parcelas).toFixed(2)}`);
}

function abrirCartao() {
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("modalContent").innerHTML = `
    <h3>Cartão de Crédito</h3>

    <input placeholder="Número do cartão"><br><br>
    <input placeholder="Nome impresso"><br><br>
    <input placeholder="Validade"><br><br>
    <input placeholder="CVV"><br><br>

    <button onclick="parcelarCartao(6)">6x</button>
    <button onclick="parcelarCartao(12)">12x</button>

    <br><br>
    <button onclick="fechar()">Cancelar</button>
  `;
}

function parcelarCartao(n) {
  const total = divida * Math.pow(1.025, n);
  alert(`${n}x de R$ ${(total/n).toFixed(2)}`);
}

function fechar() {
  document.getElementById("overlay").style.display = "none";
}
