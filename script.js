const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const valor = 1759;

function abrirPix() {
  const valor = 1759;

  // cálculos baseados no valor
  const entradaCredito = (valor * 0.13).toFixed(2); // ~13% de entrada
  const avista = (valor * 0.90).toFixed(2); // 10% desconto
  const credito1 = (valor / 1).toFixed(2);
  const credito2 = (valor / 2).toFixed(2);
  const credito3 = (valor / 3).toFixed(2);

  modal.innerHTML = `
    <h2>Negociação via Pix</h2>

    <div class="tabela-scroll">
      <table class="tabela-pix">
        <tr>
          <th></th>
          <th>Forma Entrada</th>
          <th>Entrada Mínima</th>
          <th>Desconto</th>
          <th>Forma Parcelas</th>
          <th>Nº Parcelas</th>
          <th>Valor Parcela</th>
        </tr>

        <tr>
          <td><input type="radio" name="pix"></td>
          <td>Pix</td>
          <td>R$ 0,00</td>
          <td>R$ ${(valor - avista).toFixed(2)}</td>
          <td>Pix</td>
          <td>1</td>
          <td>R$ ${avista}</td>
        </tr>

        <tr>
          <td><input type="radio" name="pix"></td>
          <td>Pix</td>
          <td>R$ ${entradaCredito}</td>
          <td>R$ 0,00</td>
          <td>Crédito</td>
          <td>1</td>
          <td>R$ ${(valor - entradaCredito).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="radio" name="pix"></td>
          <td>Pix</td>
          <td>R$ ${entradaCredito}</td>
          <td>R$ 0,00</td>
          <td>Crédito</td>
          <td>2</td>
          <td>R$ ${( (valor - entradaCredito) / 2 ).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="radio" name="pix"></td>
          <td>Pix</td>
          <td>R$ ${entradaCredito}</td>
          <td>R$ 0,00</td>
          <td>Crédito</td>
          <td>3</td>
          <td>R$ ${( (valor - entradaCredito) / 3 ).toFixed(2)}</td>
        </tr>
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