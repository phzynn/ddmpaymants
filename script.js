const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const valor = 1759;

function abrirPix() {
  modal.innerHTML = `
    <h2>Negociação via Pix</h2>

    <div style="overflow-x:auto">
      <table style="min-width:600px; width:100%; font-size:14px; border-collapse:collapse">
        <thead>
          <tr>
            <th>Forma Entrada</th>
            <th>Entrada Mínima</th>
            <th>Desconto</th>
            <th>Forma Parcelas</th>
            <th>Nº Parcelas</th>
            <th>Valor das Parcelas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pix</td>
            <td>R$ 615,65</td>
            <td>R$ 0,00</td>
            <td>Crédito</td>
            <td>1</td>
            <td>R$ 1.143,35</td>
          </tr>
          <tr>
            <td>Pix</td>
            <td>R$ 615,65</td>
            <td>R$ 0,00</td>
            <td>Crédito</td>
            <td>2</td>
            <td>R$ 571,68</td>
          </tr>
          <tr>
            <td>Pix</td>
            <td>R$ 615,65</td>
            <td>R$ 0,00</td>
            <td>Crédito</td>
            <td>3</td>
            <td>R$ 381,12</td>
          </tr>

          <tr>
            <td>Pix</td>
            <td>R$ 703,60</td>
            <td>R$ 0,00</td>
            <td>Boleto</td>
            <td>1</td>
            <td>R$ 1.055,40</td>
          </tr>
          <tr>
            <td>Pix</td>
            <td>R$ 703,60</td>
            <td>R$ 0,00</td>
            <td>Boleto</td>
            <td>2</td>
            <td>R$ 527,70</td>
          </tr>

          <tr>
            <td>-</td>
            <td>R$ 0,00</td>
            <td>R$ 0,00</td>
            <td>Pix</td>
            <td>1</td>
            <td><strong>R$ 1.759,00</strong></td>
          </tr>
        </tbody>
      </table>
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