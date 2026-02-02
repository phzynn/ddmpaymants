const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const valor = 1759;

function abrirPix() {
  const valor = 1759;

  modal.innerHTML = `
    <h2>Negociação via Pix</h2>

    <div class="pix-filtros">
      <label><input type="radio" name="filtro" checked> Todos</label>
      <label><input type="radio" name="filtro"> Com Entrada</label>
      <label><input type="radio" name="filtro"> Sem Entrada</label>
    </div>

    <table class="pix-table">
      <thead>
        <tr>
          <th>Selecionar</th>
          <th>Forma Entrada</th>
          <th>Entrada Mínima</th>
          <th>Desconto</th>
          <th>Forma Parcelas</th>
          <th>Nº Parcelas</th>
          <th>Valor Parcela</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="radio" name="pix"></td>
          <td>Pix</td>
          <td>R$ 222,08</td>
          <td>R$ 0,00</td>
          <td>Crédito</td>
          <td>1</td>
          <td>R$ ${( (valor - 222.08) ).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="radio" name="pix"></td>
          <td>Pix</td>
          <td>R$ 222,08</td>
          <td>R$ 0,00</td>
          <td>Crédito</td>
          <td>2</td>
          <td>R$ ${( (valor - 222.08) / 2 ).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="radio" name="pix"></td>
          <td>Pix</td>
          <td>R$ 222,08</td>
          <td>R$ 0,00</td>
          <td>Crédito</td>
          <td>3</td>
          <td>R$ ${( (valor - 222.08) / 3 ).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="radio" name="pix"></td>
          <td>Pix</td>
          <td>R$ 253,81</td>
          <td>R$ 0,00</td>
          <td>Boleto</td>
          <td>1</td>
          <td>R$ ${( (valor - 253.81) ).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="radio" name="pix"></td>
          <td>-</td>
          <td>R$ 0,00</td>
          <td>R$ 0,00</td>
          <td>Pix</td>
          <td>1</td>
          <td>R$ ${valor.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>

    <button onclick="confirmar()">Confirmar</button>
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