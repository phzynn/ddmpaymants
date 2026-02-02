const divida = 1759;

function abrirModal(html) {
  document.getElementById("modalContent").innerHTML = html;
  document.getElementById("overlay").style.display = "flex";
}

function fechar() {
  document.getElementById("overlay").style.display = "none";
}

/* PIX */
function abrirPix() {
  abrirModal(`
    <h3>Negociação via Pix</h3>

    <label>
      <input type="radio" name="pix" onclick="pixVista()"> 
      À vista (10% desconto): R$ ${(divida * 0.9).toFixed(2)}
    </label>

    <label>
      <input type="radio" name="pix" onclick="pixEntrada()"> 
      Entrada R$ 300 + 3x
    </label>

    <label>
      <input type="radio" name="pix" onclick="pixParcelado()"> 
      6x ou 12x com juros
    </label>

    <div id="pixResultado"></div>

    <button>Confirmar Pix</button>
    <button class="cancelar" onclick="fechar()">Cancelar</button>
  `);
}

function pixVista() {
  document.getElementById("pixResultado").innerHTML =
    `<p>Total a pagar: <strong>R$ ${(divida * 0.9).toFixed(2)}</strong></p>`;
}

function pixEntrada() {
  const restante = divida - 300;
  const parcela = (restante / 3).toFixed(2);
  document.getElementById("pixResultado").innerHTML =
    `<p>Entrada: R$ 300<br>3x de R$ ${parcela}</p>`;
}

function pixParcelado() {
  const p6 = ((divida * 1.08) / 6).toFixed(2);
  const p12 = ((divida * 1.15) / 12).toFixed(2);
  document.getElementById("pixResultado").innerHTML =
    `<p>6x de R$ ${p6}<br>12x de R$ ${p12}</p>`;
}

/* CARTÃO */
function abrirCartao() {
  abrirModal(`
    <h3>Pagamento com Cartão</h3>

    <label>Número do cartão</label>
    <input type="text">

    <label>Nome no cartão</label>
    <input type="text">

    <label>Validade</label>
    <input type="text">

    <label>CVV</label>
    <input type="password">

    <button onclick="parcelasCartao()">Continuar</button>
    <button class="cancelar" onclick="fechar()">Cancelar</button>
  `);
}

function parcelasCartao() {
  abrirModal(`
    <h3>Escolha as parcelas</h3>
    <p>1x sem juros: R$ ${divida.toFixed(2)}</p>
    <p>3x: R$ ${(divida / 3).toFixed(2)}</p>
    <p>6x: R$ ${((divida * 1.1) / 6).toFixed(2)}</p>
    <p>12x: R$ ${((divida * 1.2) / 12).toFixed(2)}</p>

    <button>Pagar com cartão</button>
    <button class="cancelar" onclick="fechar()">Cancelar</button>
  `);
}
