const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const valor = 1759;

function abrirPix() {
  const valor = 1759;

  const descontoAvista = (valor * 0.10).toFixed(2);
  const valorAvista = (valor - descontoAvista).toFixed(2);

  const entrada = (valor * 0.13).toFixed(2); // ~13% como faculdade
  const restante = valor - entrada;

  modal.innerHTML = `
    <h2>Negociação via Pix</h2>

    <div class="tabela-scroll">
      <table class="tabela-pix">
        <thead>
          <tr>
            <th>Selecionar</th>
            <th>Forma<br>Pagamento Entrada</th>
            <th>Entrada<br>Mínima</th>
            <th>Desconto</th>
            <th>Forma<br>Pagamento Parcelas</th>
            <th>Nº de<br>Parcelas</th>
            <th>Valor das<br>Parcelas</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><input type="radio" name="pix"></td>
            <td>Pix</td>
            <td>R$ 0,00</td>
            <td>R$ ${descontoAvista}</td>
            <td>Pix</td>
            <td>1</td>
            <td>R$ ${valorAvista}</td>
          </tr>

          <tr>
            <td><input type="radio" name="pix"></td>
            <td>Pix</td>
            <td>R$ ${entrada}</td>
            <td>R$ 0,00</td>
            <td>Crédito</td>
            <td>1</td>
            <td>R$ ${restante.toFixed(2)}</td>
          </tr>

          <tr>
            <td><input type="radio" name="pix"></td>
            <td>Pix</td>
            <td>R$ ${entrada}</td>
            <td>R$ 0,00</td>
            <td>Crédito</td>
            <td>2</td>
            <td>R$ ${(restante / 2).toFixed(2)}</td>
          </tr>

          <tr>
            <td><input type="radio" name="pix"></td>
            <td>Pix</td>
            <td>R$ ${entrada}</td>
            <td>R$ 0,00</td>
            <td>Crédito</td>
            <td>3</td>
            <td>R$ ${(restante / 3).toFixed(2)}</td>
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